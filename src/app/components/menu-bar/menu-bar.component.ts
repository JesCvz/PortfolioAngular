import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DarkModeService } from '../../services/DarkMode/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  @Input() darkMode = false;

  constructor(
    private elementRef: ElementRef,
    private darkModeService: DarkModeService
  ) {}

  isChecked = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.isMenuOpen = false;
    }
  }

  onCheckedChange(): void {
    const root = document.querySelector(':root');
    if(root){
      this.darkModeService.toggleDarkMode();
      root.classList.toggle('dark');
    }
  }
}
