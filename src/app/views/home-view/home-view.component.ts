import { Component } from '@angular/core';
import { information } from '../../utilities/utility';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css',
})
export class HomeViewComponent {
  information = information;
}
