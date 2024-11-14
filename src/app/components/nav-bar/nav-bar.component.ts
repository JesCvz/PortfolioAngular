import { Component, Input } from '@angular/core';
import { routes } from '../../app.routes';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarMenuComponent } from "../side-bar-menu/side-bar-menu.component";
import { DarkModeService } from '../../services/DarkMode/dark-mode.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, MenuBarComponent, MatButtonModule, MatIconModule, MatSidenavModule, SideBarMenuComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isDarkMode = false
  routes = routes;
  constructor(
    private darkModeService: DarkModeService
  ){

  }

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe((darkMode) => {
      this.isDarkMode = darkMode
    })
  }
}
