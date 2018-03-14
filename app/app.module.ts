import { Apl2017StatsModule } from "./apl2017-stats/apl2017-stats.module";
import { FirebaseService } from "./services/firebase.service";
import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes, routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { Routes } from "@angular/router";

// uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
     AppComponent
    ],
    imports: [
    //    Apl2017StatsModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        routing,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        HomeComponent
    ],
    providers: [
        ItemService,
        FirebaseService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
