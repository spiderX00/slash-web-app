import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleComponent } from '../../shared/components/article/article.component';

const DEFAULT_VISUALIZATION = 10;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ArticleComponent
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
