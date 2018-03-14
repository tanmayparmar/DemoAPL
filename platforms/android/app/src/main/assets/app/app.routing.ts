import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

export const routes: Routes = [

    { path:"", component: HomeComponent},
      {
        path: "apl2017stats",
        loadChildren: "./apl2017-stats/apl2017-stats.module#Apl2017StatsModule"
  }
     ];

     // tslint:disable-next-line:typedef
     export const routing = NativeScriptRouterModule.forRoot(routes);