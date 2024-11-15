import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MobileService } from '../../services/Mobile/mobile.service';

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
  @Output() isSideBarOpenChange = new EventEmitter<boolean>();
  isMobile = false;

  constructor(
    private elementRef: ElementRef,
    private isMobileService: MobileService
  ){}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (this.isSideBarOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.isSideBarOpen = false
      this.isSideBarOpenChange.emit(this.isSideBarOpen);
    }
  }

  ngOnInit(){
    this.isMobileService.IsMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    })
  }

}
