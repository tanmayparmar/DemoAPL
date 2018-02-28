import { Apl2017statsComponent } from './apl2017stats/apl2017stats.component';
import { MostRunsListComponent } from './apl2017stats/most-runs-list/most-runs-list.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MostWicketsListComponent } from './apl2017stats/most-wickets-list/most-wickets-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     {path:"home",component: AppComponent},
      { path: "mostRunsList", component: MostRunsListComponent},
      { path: "mostWicketsList", component: MostWicketsListComponent },
      { path:"apl2017stats", component: Apl2017statsComponent}  
     ]

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }