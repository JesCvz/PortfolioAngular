import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.css'
})
export class SideBarMenuComponent {
  @Input() darkMode = false;
  @Input() isSideBarOpen = false;
}
