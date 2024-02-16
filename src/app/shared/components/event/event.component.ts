import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnChanges } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { Tournament } from "../../services/tournament/tournament.interface";
import { UrlGenerator } from "../../services/url-generator/url-generator";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnChanges {
  @Input({ required: true }) event!: Tournament;

  constructor(public urls: UrlGenerator) { };

  ngOnChanges(): void {
    this.urls.generateUrl(this.event);
  }
}