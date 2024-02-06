import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EventComponent } from '../../shared/components/event/event.component';

const DEFAULT_VISUALIZATION = 8;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    EventComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public visualization: number = DEFAULT_VISUALIZATION;
  
  getRangeArray(length: number): number[] {
    return Array.from({ length }, (_, index) => index);
  }
}
