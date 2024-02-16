import { Injectable, InjectionToken } from '@angular/core';
import { Faker, faker } from '@faker-js/faker';
import { FakeGenerator } from './faker.interface';

@Injectable({
  providedIn: 'root',
})
export class MockdataServiceService implements FakeGenerator {
  public readonly faker: Faker = faker;

  constructor() {
    // Initialize the faker instance here (if needed)
    // Example: this.faker.locale = 'en_US';
  }

  // Other methods or properties related to mock data generation
}

// Rename the injection token for clarity
export const FAKE_DATA_GENERATOR = new InjectionToken<Faker>('fakeDataGenerator');

export function fakerjs(): Faker {
  return new MockdataServiceService().faker;
}
