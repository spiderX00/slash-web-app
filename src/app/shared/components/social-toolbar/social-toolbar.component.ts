import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-toolbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule
  ],
  templateUrl: './social-toolbar.component.html',
  styleUrl: './social-toolbar.component.scss'
})
export class SocialToolbarComponent {
  public faTwitter = faTwitter;
  public faFacebook = faFacebookF;
  public faInstagram = faInstagramSquare;
}
