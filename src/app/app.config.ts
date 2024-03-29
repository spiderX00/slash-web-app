import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { graphqlProvider } from './graphql.provider';
import { errorInterceptorProvider } from './shared/interceptors/error-handler/error-handler.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideAnimations(),
    provideRouterStore(),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    errorInterceptorProvider,
    graphqlProvider
  ]
};

export const APP_CONFIG = new InjectionToken<ApplicationConfig>('app.config');

export interface AppConfig {
  apiEndpoint: string;
  title: string;
}