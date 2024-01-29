import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SocialToolbarComponent } from '../social-toolbar/social-toolbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToolbarComponent,
    SocialToolbarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
