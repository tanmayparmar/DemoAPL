import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import "core-js/es7/reflect";


@Component({
 moduleId: module.id,
  selector: "app-apl2017stats",
  templateUrl: "./apl2017stats.component.html",
  styleUrls: ["./apl2017stats.component.scss"]
})
export class Apl2017statsComponent  {
  // tslint:disable-next-line:no-empty
  constructor(private routerExtensions: RouterExtensions) { }

  onGetBowlerList(): void {
    this.routerExtensions.navigate(["mostWicketsList"]);
    }

    onGetBatsmanList(): void {
      this.routerExtensions.navigate(["mostRunsList"]);
      }
}

