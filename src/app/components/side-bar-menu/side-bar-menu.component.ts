import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MobileService } from '../../services/Mobile/mobile.service';
import { routes } from '../../app.routes';
import { MatListModule } from '@angular/material/list';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-menu',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: './side-bar-menu.component.html',
  styleUrl: './side-bar-menu.component.css'
})
export class SideBarMenuComponent {
  @Input() darkMode = false;
  @Input() isSideBarOpen = false;
  @Output() isSideBarOpenChange = new EventEmitter<boolean>();
  isMobile = false;
  routes = routes;

  constructor(
    private elementRef: ElementRef,
    private isMobileService: MobileService,
    private router: Router
  ){}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    if (this.isSideBarOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.handleSideBarClose()
    }
  }

  ngOnInit(){
    this.isMobileService.IsMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
    })
  }

  handleRouteClick(value:string | undefined){
    if(!value){
      return;
    } 
    
    this.router.navigate([value])
    this.handleSideBarClose()
  }

  handleSideBarClose(){
    this.isSideBarOpen = false
    this.isSideBarOpenChange.emit(this.isSideBarOpen);
  }
}
