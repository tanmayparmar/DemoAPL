import { MostRunsListComponent } from "./apl2017stats/most-runs-list/most-runs-list.component";
import { FirebaseService } from './services/firebase.service';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { Apl2017statsComponent } from './apl2017stats/apl2017stats.component';
import { MostWicketsListComponent } from "./apl2017stats/most-wickets-list/most-wickets-list.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MostRunsListComponent,
        MostWicketsListComponent,
        Apl2017statsComponent
    ],
    providers: [
        FirebaseService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }