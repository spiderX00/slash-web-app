import { Injectable, InjectionToken } from '@angular/core';
import { Faker, faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class FakerService {
  private _faker: Faker = faker;

  get faker(): Faker {
    return this._faker;
  }
}

export const FAKER = new InjectionToken<Faker>('faker');

export function fakerjs(): Faker {
  return new FakerService().faker;
}