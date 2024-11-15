import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BreakpointObserver } from '@angular/cdk/layout';
import { DarkModeService } from './services/DarkMode/dark-mode.service';
import { Subscription } from 'rxjs';
import { MobileService } from './services/Mobile/mobile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioAngular';
  isDarkMode = false;
  private subscriptions: Subscription = new Subscription();
  
  constructor(
    private viewportObserver: BreakpointObserver,
    private darkModeService: DarkModeService,
    private isMobileService: MobileService
  ){}
  
  ngOnInit(): void {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      this.isDarkMode = savedDarkMode === 'true';
      const root = document.querySelector(':root');
      if(this.isDarkMode && root){
        root.classList.toggle('dark');
      }
    }
    this.darkModeService.setDarkMode(this.isDarkMode);

    const viewportSubscription = this.viewportObserver
      .observe(['(max-width: 800px)'])
      .subscribe((screenSize) => {
        this.isMobileService.setIsMobile(screenSize.matches);
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
