import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

export interface User {
  name: string;
  email: string;
  role: string;
  organization: string;
  status: string;
  employedDate: string;
  selected?: boolean;
  image:string;
}
@Component({
  selector: 'app-choose-employee-component',
  standalone: true,
  imports: [MatTable,MatTableModule,MatCheckboxModule,FormsModule,RouterModule,NgIf,NgFor,CommonModule,MatButtonModule],
  templateUrl: './choose-employee-component.component.html',
  styleUrl: './choose-employee-component.component.css'
})

export class ChooseEmployeeComponentComponent {
  displayedColumns: string[] = ['select','author', 'function', 'status', 'employed'];
  dataSource: User[] = [];
  selectedUsers: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dataSource = this.userService.getUsers();
  }
  toggleSelection(user: User): void {
    // user.selected = !user.selected;
    if (user.selected) {
      this.selectedUsers.push(user);
    } else {
      this.selectedUsers = this.selectedUsers.filter(u => u !== user);
    }
  }
  toggleAllSelection(): void {
    const allSelected = this.dataSource.every(user => user.selected);
    const users=this.dataSource.forEach(user => user.selected = !allSelected);
    this.selectedUsers = allSelected ? [] : [...this.dataSource];
  }
}
// user.service.ts
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTable, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      name: 'John Michael',
      email: 'john@test.com',
      role: 'Manager',
      organization: 'test',
      status: 'Online',
      employedDate: '23/04/18',
      image: 'team-1.jpg',
      selected: false
    },
    {
      name: 'Jane Doe',
      email: 'jane@test.com',
      role: 'Developer',
      organization: 'test',
      status: 'Offline',
      employedDate: '15/05/19',
      image: 'team-2.jpg',
      selected: false
    },
    {
      name: 'Alice Smith',
      email: 'alice@test.com',
      role: 'Designer',
      organization: 'test',
      status: 'Online',
      employedDate: '10/06/20',
      image: 'team-3.jpg',
      selected: false
    },
    {
      name: 'Bob Johnson',
      email: 'bob@test.com',
      role: 'Product Owner',
      organization: 'test',
      status: 'Busy',
      employedDate: '22/07/21',
      image: 'team-4.jpg',
      selected: false
    },
    {
      name: 'Charlie Brown',
      email: 'charlie@test.com',
      role: 'Tester',
      organization: 'test',
      status: 'Online',
      employedDate: '30/08/22',
      image: 'team-5.jpg',
      selected: false
    },
    {
      name: 'David Wilson',
      email: 'david@test.com',
      role: 'Manager',
      organization: 'test',
      status: 'Offline',
      employedDate: '12/09/18',
      image: 'team-1.jpg',
      selected: false
    },
    {
      name: 'Eva Green',
      email: 'eva@test.com',
      role: 'Developer',
      organization: 'test',
      status: 'Online',
      employedDate: '05/10/19',
      image: 'team-2.jpg',
      selected: false
    },
    {
      name: 'Frank Castle',
      email: 'frank@test.com',
      role: 'Designer',
      organization: 'test',
      status: 'Busy',
      employedDate: '18/11/20',
      image: 'team-3.jpg',
      selected: false
    },
    {
      name: 'Grace Lee',
      email: 'grace@test.com',
      role: 'Product Owner',
      organization: 'test',
      status: 'Online',
      employedDate: '25/12/21',
      image: 'team-4.jpg',
      selected: false
    },
    {
      name: 'Henry Adams',
      email: 'henry@test.com',
      role: 'Tester',
      organization: 'test',
      status: 'Offline',
      employedDate: '14/01/22',
      image: 'team-5.jpg',
      selected: false
    },
    {
      name: 'Isabella Martinez',
      email: 'isabella@test.com',
      role: 'Manager',
      organization: 'test',
      status: 'Online',
      employedDate: '20/02/19',
      image: 'team-1.jpg',
      selected: false
    },
    {
      name: 'Jack Thompson',
      email: 'jack@test.com',
      role: 'Developer',
      organization: 'test',
      status: 'Busy',
      employedDate: '11/03/20',
      image: 'team-2.jpg',
      selected: false
    },
    {
      name: 'Kathy Brown',
      email: 'kathy@test.com',
      role: 'Designer',
      organization: 'test',
      status: 'Online',
      employedDate: '29/04/21',
      image: 'team-5.jpg',
      selected: false
    },
    {
      name: 'Liam Smith',
      email: 'liam@test.com',
      role: 'Product Owner',
      organization: 'test',
      status: 'Offline',
      employedDate: '03/05/22',
      image: 'team-1.jpg',
      selected: false
    }];
  

  getUsers(): User[] {
    return this.users;
  }
}
