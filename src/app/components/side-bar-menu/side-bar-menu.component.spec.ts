import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarMenuComponent } from './side-bar-menu.component';

describe('SideBarMenuComponent', () => {
  let component: SideBarMenuComponent;
  let fixture: ComponentFixture<SideBarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
