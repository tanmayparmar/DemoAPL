import { Players } from "./../../model/players";
<<<<<<< HEAD
import 'core-js/es7/reflect';
=======
>>>>>>> 90cae6837d3056314442ed396a999ea49f4247d8
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
<<<<<<< HEAD
=======

>>>>>>> 90cae6837d3056314442ed396a999ea49f4247d8
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
