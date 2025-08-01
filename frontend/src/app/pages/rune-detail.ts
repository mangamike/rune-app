import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../services/rune.service';
import { Rune } from '../models/rune.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rune-detail',
  templateUrl: './rune-detail.html',
  styleUrls: ['./rune-detail.scss'],
  imports: [CommonModule, RouterModule]
})
export class RuneDetail implements OnInit {
  rune: Rune | null = null;
  showReversed = false;

  constructor(private route: ActivatedRoute, private runeService: RuneService) {}

  ngOnInit() {
    const runeName = this.route.snapshot.paramMap.get('name');
    if (runeName) {
      this.rune = this.runeService.getRuneByName(runeName);
    }
  }
}
