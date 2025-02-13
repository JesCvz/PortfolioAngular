import { Component } from '@angular/core';
import { DarkModeService } from '../../services/DarkMode/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  private subscriptions = new Subscription();
  darkMode = false;
  constructor(private isDarkMode: DarkModeService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.isDarkMode.darkMode$.subscribe((darkMode) => {
        this.darkMode = darkMode;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
