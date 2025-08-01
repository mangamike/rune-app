import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuneService } from '../services/rune.service';
import { Rune } from '../models/rune.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-runes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './runes.html',
  styleUrl: './runes.scss',
})
export class Runes implements OnInit {
  allRunes: Rune[] = [];

  constructor(private runeService: RuneService) {}

  ngOnInit() {
    this.allRunes = this.runeService.getAllRunes(); // Or however you fetch
  }
}

