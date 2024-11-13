import { Component, ElementRef, HostListener } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  constructor(private elementRef: ElementRef) {}

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
}
