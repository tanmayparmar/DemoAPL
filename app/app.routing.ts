import { Apl2017statsComponent } from './apl2017stats/apl2017stats.component';
import { MostRunsListComponent } from './apl2017stats/most-runs-list/most-runs-list.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
<<<<<<< HEAD
import { MostWicketsListComponent } from './apl2017stats/most-wickets-list/most-wickets-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     {path:"home",component: AppComponent},
      { path: "mostRunsList", component: MostRunsListComponent},
      { path: "mostWicketsList", component: MostWicketsListComponent },
=======
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

export const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    // {path:"",redirectTo:"runList",pathMatch:"full"},
    // {path:"home",component: AppComponent},
      { path: "mostRunsList", component: MostRunsListComponent},
    //  { path: "mostWicketsList" componenet: MostWicektsListComponent },
>>>>>>> 90cae6837d3056314442ed396a999ea49f4247d8
      { path:"apl2017stats", component: Apl2017statsComponent}  
     ]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }