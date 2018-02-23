import { Players } from "./../../model/players";
import { FirebaseService } from "./../../services/firebase.service";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "app-most-runs-list",
  templateUrl: "./most-runs-list.component.html",
  styleUrls: ["./most-runs-list.component.css"]
})
export class MostRunsListComponent implements OnInit {
  players: Players[];

  id: string;
  name: string;
  UID: string;
  public players$: Observable<any>;
  public constructor(
    private routerExtensions: RouterExtensions,
    private firebaseService: FirebaseService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.players$ = <any>this.firebaseService.getBatsmanList();
  }
}
