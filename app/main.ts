import { AppComponent } from './app.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { AppRoutingModule, routes } from "./app.routing";
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");
import { NgModule } from "@angular/core";

firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.

  persist: true,
 // storageBucket: "demoapl-68210.appspot.com",
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);

@NgModule({
  declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
         ],
    providers: [AppComponentModule]
})

export class AppComponentModule
{

}

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers. 
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic, 
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
