import { Injectable, NgZone } from "@angular/core";
import { Players } from "../model/players";
import firebase = require("nativescript-plugin-firebase");
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/share";

@Injectable()
export class FirebaseService {
<<<<<<< HEAD
   //  private players : Players[];
=======
  //   private players : Players[];
>>>>>>> 90cae6837d3056314442ed396a999ea49f4247d8

  constructor(private ngZone: NgZone) {}
  items: BehaviorSubject<Array<Players>> = new BehaviorSubject([]);

  private _allItems: Array<Players> = [];
  getBatsmanList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = "batsmanList";
      let onValueEvent = (snapshot: any) => {
        this.ngZone.run(() => {
          let results = this.handleSnapshot(snapshot.value);
          console.log(JSON.stringify(results));
          observer.next(results);
        });
      };
      firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();
  }
  getBowlerList(): Observable<any> {
    return new Observable((observer: any) => {
      let path = "bowlerList";

      let onValueEvent = (snapshot: any) => {
        this.ngZone.run(() => {
          let results = this.handleSnapshot(snapshot.value);
          console.log(JSON.stringify(results));
          observer.next(results);
        });
      };
      firebase.addValueEventListener(onValueEvent, `/${path}`);
    }).share();
  }

  handleSnapshot(data: any) {
    this._allItems = [];
    // this.players = [];
    if (data) {
      for (let name in data) {
        //   let result = (<any>Object).assign({id:name},data[name]);
        var result: Players = data[name];
        //  result.id = id;
        this._allItems.push(result);
      }
      this.publishUpdates();
    }
    return this._allItems;
    // return this.players;
  }

  publishUpdates() {
    this._allItems.sort(function(
      a,
      b //  this.players.sort(function(a,b)
    ) {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });

    this.items.next([...this._allItems]);
    //this.players.next([...this.players]);
  }
  handleErrors(error) {
    console.log(JSON.stringify(error));
    return Promise.reject(error.message);
  }
}
