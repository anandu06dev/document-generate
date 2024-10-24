import { Component } from '@angular/core';
import { Card, CardComponent, CardService } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-choose-document-component',
  standalone: true,
  imports: [CardComponent,CommonModule,FormsModule,RouterModule,MatButtonModule,MatIconModule],
  templateUrl: './choose-document-component.component.html',
  styleUrl: './choose-document-component.component.css'
})
export class ChooseDocumentComponentComponent {
  cards: Card[] = [];
  selectedCards: Card[] = [];

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCards();
  }

  printSelected() {
    this.selectedCards = this.cards.filter(card => card.selected);
    console.log(this.selectedCards);
  }
  onSelectionChange(card: Card) {
    if (card.selected) {
      // Add to selected cards if checked
      this.selectedCards.push(card);
    } else {
      // Remove from selected cards if unchecked
      this.selectedCards = this.selectedCards.filter(selectedCard => selectedCard.id !== card.id);
    }
  }

  
}
