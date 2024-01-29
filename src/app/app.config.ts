import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(), provideAnimations(), provideRouterStore(), provideClientHydration()]
};

export const APP_CONFIG = new InjectionToken<ApplicationConfig>('app.config');

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}