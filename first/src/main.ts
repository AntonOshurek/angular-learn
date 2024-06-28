import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//MODULES
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//using this aproach when we have appcomponent as a stand alone component
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );
