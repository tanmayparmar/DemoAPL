"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var FirebaseService = /** @class */ (function () {
    //   private players : Players[];
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this._allItems = [];
    }
    FirebaseService.prototype.getBatsmanList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "batsmanList";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.getBowlerList = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            var path = "bowlerList";
            var onValueEvent = function (snapshot) {
                _this.ngZone.run(function () {
                    var results = _this.handleSnapshot(snapshot.value);
                    console.log(JSON.stringify(results));
                    observer.next(results);
                });
            };
            firebase.addValueEventListener(onValueEvent, "/" + path);
        }).share();
    };
    FirebaseService.prototype.handleSnapshot = function (data) {
        this._allItems = [];
        // this.players = [];
        if (data) {
            for (var name_1 in data) {
                //   let result = (<any>Object).assign({id:name},data[name]);
                var result = data[name_1];
                //  result.id = id;
                this._allItems.push(result);
            }
            this.publishUpdates();
        }
        return this._allItems;
        // return this.players;
    };
    FirebaseService.prototype.publishUpdates = function () {
        this._allItems.sort(function (a, b //  this.players.sort(function(a,b)
        ) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            return 0;
        });
        this.items.next(this._allItems.slice());
        //this.players.next([...this.players]);
    };
    FirebaseService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error.message);
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUQ7QUFFbkQsdURBQTBEO0FBQzFELDhDQUE2QztBQUM3Qyx3REFBdUQ7QUFDdkQsbUNBQWlDO0FBR2pDO0lBQ0UsaUNBQWlDO0lBRWpDLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNsQyxVQUFLLEdBQW9DLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6RCxjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQUhGLENBQUM7SUFJdEMsd0NBQWMsR0FBZDtRQUFBLGlCQVlDO1FBWEMsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLFFBQWE7WUFDbEMsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDO1lBQ3pCLElBQUksWUFBWSxHQUFHLFVBQUMsUUFBYTtnQkFDL0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7b0JBQ2QsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsTUFBSSxJQUFNLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCx1Q0FBYSxHQUFiO1FBQUEsaUJBYUM7UUFaQyxNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsUUFBYTtZQUNsQyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUM7WUFFeEIsSUFBSSxZQUFZLEdBQUcsVUFBQyxRQUFhO2dCQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZCxJQUFJLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxNQUFJLElBQU0sQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxJQUFTO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLHFCQUFxQjtRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsNkRBQTZEO2dCQUM3RCxJQUFJLE1BQU0sR0FBWSxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7Z0JBQ2pDLG1CQUFtQjtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUNELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsdUJBQXVCO0lBQ3pCLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFDbEIsQ0FBQyxFQUNELENBQUMsQ0FBQyxtQ0FBbUM7O1lBRXJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUssSUFBSSxDQUFDLFNBQVMsU0FBRSxDQUFDO1FBQ3JDLHVDQUF1QztJQUN6QyxDQUFDO0lBQ0Qsc0NBQVksR0FBWixVQUFhLEtBQUs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFuRVUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUlpQixhQUFNO09BSHZCLGVBQWUsQ0FvRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4uL21vZGVsL3BsYXllcnNcIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmljZSB7XG4gIC8vICAgcHJpdmF0ZSBwbGF5ZXJzIDogUGxheWVyc1tdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8UGxheWVycz4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PFBsYXllcnM+ID0gW107XG4gIGdldEJhdHNtYW5MaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogYW55KSA9PiB7XG4gICAgICBsZXQgcGF0aCA9IFwiYmF0c21hbkxpc3RcIjtcbiAgICAgIGxldCBvblZhbHVlRXZlbnQgPSAoc25hcHNob3Q6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5oYW5kbGVTbmFwc2hvdChzbmFwc2hvdC52YWx1ZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0cykpO1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIGZpcmViYXNlLmFkZFZhbHVlRXZlbnRMaXN0ZW5lcihvblZhbHVlRXZlbnQsIGAvJHtwYXRofWApO1xuICAgIH0pLnNoYXJlKCk7XG4gIH1cbiAgZ2V0Qm93bGVyTGlzdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgbGV0IHBhdGggPSBcImJvd2xlckxpc3RcIjtcblxuICAgICAgbGV0IG9uVmFsdWVFdmVudCA9IChzbmFwc2hvdDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmhhbmRsZVNuYXBzaG90KHNuYXBzaG90LnZhbHVlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHRzKSk7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgZmlyZWJhc2UuYWRkVmFsdWVFdmVudExpc3RlbmVyKG9uVmFsdWVFdmVudCwgYC8ke3BhdGh9YCk7XG4gICAgfSkuc2hhcmUoKTtcbiAgfVxuXG4gIGhhbmRsZVNuYXBzaG90KGRhdGE6IGFueSkge1xuICAgIHRoaXMuX2FsbEl0ZW1zID0gW107XG4gICAgLy8gdGhpcy5wbGF5ZXJzID0gW107XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xuICAgICAgICAvLyAgIGxldCByZXN1bHQgPSAoPGFueT5PYmplY3QpLmFzc2lnbih7aWQ6bmFtZX0sZGF0YVtuYW1lXSk7XG4gICAgICAgIHZhciByZXN1bHQ6IFBsYXllcnMgPSBkYXRhW25hbWVdO1xuICAgICAgICAvLyAgcmVzdWx0LmlkID0gaWQ7XG4gICAgICAgIHRoaXMuX2FsbEl0ZW1zLnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FsbEl0ZW1zO1xuICAgIC8vIHJldHVybiB0aGlzLnBsYXllcnM7XG4gIH1cblxuICBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICB0aGlzLl9hbGxJdGVtcy5zb3J0KGZ1bmN0aW9uKFxuICAgICAgYSxcbiAgICAgIGIgLy8gIHRoaXMucGxheWVycy5zb3J0KGZ1bmN0aW9uKGEsYilcbiAgICApIHtcbiAgICAgIGlmIChhLmRhdGUgPCBiLmRhdGUpIHJldHVybiAtMTtcbiAgICAgIGlmIChhLmRhdGUgPiBiLmRhdGUpIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuX2FsbEl0ZW1zXSk7XG4gICAgLy90aGlzLnBsYXllcnMubmV4dChbLi4udGhpcy5wbGF5ZXJzXSk7XG4gIH1cbiAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==