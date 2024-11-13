import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { MenuBarComponent } from "../menu-bar/menu-bar.component";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  routes = routes;
  centered = false;
  disabled = false;
  unbounded = false;
}
