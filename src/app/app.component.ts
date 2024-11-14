import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { DarkModeService } from './services/DarkMode/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioAngular';
  isMobile = false;
  isDarkMode = false;
  private subscriptions: Subscription = new Subscription();
  
  constructor(
    private viewportObserver: BreakpointObserver,
    private darkModeService: DarkModeService
  ){}
  
  ngOnInit(): void {
    const viewportSubscription = this.viewportObserver
      .observe(['(max-width: 800px)'])
      .subscribe((screenSize) => {
        this.isMobile = screenSize.matches;
      });

    const darkModeSubscription = this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode;
    });

    this.subscriptions.add(viewportSubscription);
    this.subscriptions.add(darkModeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
