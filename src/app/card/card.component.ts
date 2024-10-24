import { Component, EventEmitter, Input, Output } from '@angular/core';
// card.model.ts
export interface Card {
  selected: boolean;
  id: number;
  title: string;
  subtitle: string;
  amount: string;
  icon: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
  selected: boolean = false;
  @Output() selectionChange = new EventEmitter<Card>();

  onSelect() {
    // Emit the selected state if needed
    this.selectionChange.emit(this.card);
  }
}
// card.service.ts
import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Card[] = [
    { id: 1, title: 'MSI', subtitle: 'Merit Salary Increment', amount: '+$2000', icon: 'person',selected:false },
    { id: 2, title: 'Bonus', subtitle: 'Merit Increment Bonus', amount: '$455.00', icon: 'task' ,selected:false},
    // Add 10 more cards here...
  ];

  getCards(): Card[] {
    return this.cards;
  }
}
