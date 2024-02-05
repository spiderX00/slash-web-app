import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Faker } from "@faker-js/faker";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FAKER, fakerjs } from "../../services/faker/faker.service";

@Component({
  selector: 'app-event',
  standalone: true,
  providers: [
    { provide: FAKER, useFactory: fakerjs }
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgOptimizedImage,
    FontAwesomeModule
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {

  constructor(@Inject(FAKER) private faker: Faker) { }

  public imageUrl: string = this.faker.image.url();
  public title: string = this.faker.company.name();
  public avatar: string = this.faker.image.avatar();
  public streetAddress: string = this.faker.location.streetAddress();
  public date: Date = this.faker.date.past();
}