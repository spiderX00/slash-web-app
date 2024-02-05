import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// platformBrowserDynamic()
// .bootstrapModule(AppModule)
// .then(moduleRef => {
//   const applicationRef = moduleRef.injector.get(ApplicationRef);
//   const componentRef = applicationRef.components[0];
//   // allows to run `ng.profiler.timeChangeDetection();`
//   enableDebugTools(componentRef);
// })
// .catch(err => console.log(err));