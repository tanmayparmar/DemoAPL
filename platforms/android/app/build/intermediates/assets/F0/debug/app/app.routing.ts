import { Apl2017statsComponent } from "./apl2017stats/apl2017stats.component";
import { MostRunsListComponent } from "./apl2017stats/most-runs-list/most-runs-list.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { MostWicketsListComponent } from "./apl2017stats/most-wickets-list/most-wickets-list.component";

export const routes: Routes = [

    // {path:"",redirectTo:"runList",pathMatch:"full"},
    // {path:"home",component: AppComponent},
    { path:"", component: Apl2017statsComponent},
    { path:"apl2017stats", component: Apl2017statsComponent},
      { path: "mostRunsList", component: MostRunsListComponent},
      { path: "mostWicketsList", component: MostWicketsListComponent }
     ];

     export const navigatableComponents: any = [
     Apl2017statsComponent,
        MostRunsListComponent,
        MostWicketsListComponent
      ];