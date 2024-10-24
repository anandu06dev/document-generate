import { Component } from '@angular/core';
import { User, UserService } from '../choose-employee-component/choose-employee-component.component';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTable, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-generate-document',
  standalone: true,
  imports: [MatTable,MatTableModule,MatCheckboxModule,FormsModule,RouterModule,NgIf,NgFor,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './generate-document.component.html',
  providers:[UserService],
  styleUrl: './generate-document.component.css'
})
export class GenerateDocumentComponent {
  displayedColumns: string[] = ['author', 'msi', 'bonus', 'hr'];
  dataSource: User[] = [];
  selectedUsers: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dataSource = this.userService.getUsers();
  }
  hrDetails(user:User){
console.log(user)
const doc = new jsPDF();

    doc.text('HR Details', 10, 10);
    doc.save('hrDetails'+user.name+'.pdf');
  }
  bonus(user:User){
    this.generateBonusPDF(user.name, 'Developer', '$48000 USD', '24-OCT-2024');
  }
  bonusSample(user:User){
    const doc = new jsPDF();

    
    // Add logo
    const logo = new Image();
    logo.src = '../../../../assets/img/'+user.image; // Replace with your logo path
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 10, 10, 50, 20); // Adjust position and size

      // Add content
      doc.setFontSize(20);
      doc.text('BONUS Document', 20, 40);
      doc.setFontSize(12);
      doc.text('This is the BONUS document content.', 20, 50);

      // Add signature
      const signature = new Image();
      signature.src = '../../../../assets/img/'+user.image; // Replace with your signature path
      signature.onload = () => {
        doc.addImage(signature, 'PNG', 10, 100, 50, 20); // Adjust position and size
        doc.text('Signature', 10, 120);
        doc.save('bonus'+user.name+'.pdf');
      };
    };
  }
  msi(user:User){
    // const doc = new jsPDF();

    // doc.text('MSI Details', 10, 10);
    // doc.save('MSI'+user.name+'.pdf');
    this.generateMSILetter(user.name, 'Developer Analyst', 'IT', '24-OCT-2024',4800000,45);
   
  }

  
  generateBonusPDF(employeeName: string, position: string, bonusAmount: string, date: string) {
    const doc = new jsPDF();

    // Add logo
    const logo = new Image();
    logo.src = '../../../../assets/img/logo-company-1.jpg'; // Replace with your logo path
    logo.onload = () => {
      doc.addImage(logo, 'jpg', 10, 10, 50, 20); // Adjust position and size

      // Add letter content
      doc.setFontSize(12);
      doc.text('Company Name', 10, 40);
      doc.text('Company Address', 10, 45);
      doc.text('City, State, Zip Code', 10, 50);
      doc.text(`Date: ${date}`, 10, 60);
      doc.text(`To: ${employeeName}`, 10, 70);
      doc.text(`Position: ${position}`, 10, 75);
      doc.text('Dear ' + employeeName + ',', 10, 85);
      
      doc.setFontSize(14);
      doc.text('Bonus Award Notification', 10, 100);
      
      doc.setFontSize(12);
      doc.text(`We are pleased to inform you that you have been awarded a bonus of ${bonusAmount}.`, 10, 110);
      doc.text('This bonus is a reflection of your hard work and dedication to the company.', 10, 115);
      doc.text('We appreciate your contributions and look forward to your continued success.', 10, 120);
      
      doc.text('Sincerely,', 10, 130);
      doc.text('Your Name', 10, 135);
      doc.text('Your Position', 10, 140);
      
      // Add signature
      const signature = new Image();
      signature.src = '../../../../assets/img/signature.png'; // Replace with your signature path
      signature.onload = () => {
        doc.addImage(signature, 'PNG', 10, 150, 50, 20); // Adjust position and size
        doc.text('Signature', 10, 170);
        doc.save('Bonus_Letter'+ `${employeeName}`+'.pdf');
      };
    };
  }

  generateMSILetter(employeeName: string, position: string, department: string, date: string, revisedSalary: number, incrementPercentage: number) {
    const doc = new jsPDF();

    // Add logo
    const logo = new Image();
    logo.src = '../../../../assets/img/logo-company-1.jpg'; // Path to your logo
    logo.onload = () => {
      doc.addImage(logo, 'PNG', 10, 10, 50, 20); // Adjust the size and position as needed

      // Set font size and style
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Add content to the PDF
      doc.text(`Date: ${date}`, 10, 40);
      doc.text(`To: ${employeeName}`, 10, 50);
      doc.text(`Position: ${position}`, 10, 60);
      doc.text(`Department: ${department}`, 10, 70);
      doc.text('Subject: Merit Salary Increment', 10, 80);
      doc.text(`Dear ${employeeName},`, 10, 90);
      doc.text('We are pleased to inform you that you have been awarded a Merit Salary Increment.', 10, 100);
      doc.text(`Your new salary will be ${revisedSalary.toFixed(2)}, reflecting an increment of ${incrementPercentage}% from your previous salary.`, 10, 105);
      doc.text('This increment is a recognition of your hard work and dedication to the company.', 10, 110);
      doc.text('We appreciate your contributions and look forward to your continued success.', 10, 115);
      doc.text('Best regards,', 10, 130);
      
      // Add signature
      const signature = new Image();
      signature.src = '../../../../assets/img/signature.png';// Path to your signature
      signature.onload = () => {
        doc.addImage(signature, 'PNG', 10, 135, 50, 20); // Adjust the size and position as needed
        doc.text('Your Company Name', 10, 160);
        
        // Save the PDF
        doc.save('MSI_Letter'+ `${employeeName}`+'.pdf');
      };
    };
  
  }
}
