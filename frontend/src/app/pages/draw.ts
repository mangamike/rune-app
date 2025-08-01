import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
  animateChild,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RuneService } from '../services/rune.service';
import { Rune } from '../models/rune.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-draw',
  standalone: true,
  imports: [CommonModule, FormsModule

  ],
  templateUrl: './draw.html',
  styleUrl: './draw.scss',
 animations: [
  trigger('runeFadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.8) rotateY(90deg)' }),
      animate(
        '500ms ease-out',
        style({ opacity: 1, transform: 'scale(1) rotateY(0deg)' })
      ),
    ]),
  ]),
  trigger('runeList', [
    transition(':enter', [
      query('@runeFadeIn', stagger(150, animateChild()), { optional: true }),
    ]),
  ]),
],
})
export class Draw {
  drawnRunes: Rune[] = [];
  showResults = false;
  showReversed = true;
  selectedCount = 3;
  spreadLabels: string[] = [];

  constructor(private runeService: RuneService) {}

  get drawCount(): number {
    return this.selectedCount;
  }

 drawRunes(count?: number) {
  const runeCount = count ?? this.drawCount;
    this.showResults = false;
    this.drawnRunes = []; 

    // Define labels based on count
    switch (count) {
      case 1:
        this.spreadLabels = ['Insight'];
        break;
      case 3:
        this.spreadLabels = ['Past', 'Present', 'Future'];
        break;
      case 5:
        this.spreadLabels = ['Past', 'Present', 'Challenge', 'Advice', 'Outcome'];
        break;
      default:
        this.spreadLabels = Array(count).fill('');
    }

    setTimeout(() => {
      const runes = this.runeService.drawRandomRunes(runeCount);
      this.drawnRunes = runes.map(rune => {
        const isReversed = this.showReversed ? Math.random() < 0.5 : false;
        return { ...rune, isReversed };
      });
      this.showResults = true;
    }, 100);
  }
   toggleReversed() {
    this.showReversed = !this.showReversed;
  }

  setDrawCount(count: number) {
    this.selectedCount = count;
  }
}
