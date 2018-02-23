"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_service_1 = require("./../../services/firebase.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var MostRunsListComponent = /** @class */ (function () {
    function MostRunsListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    MostRunsListComponent.prototype.ngOnInit = function () {
        this.players$ = this.firebaseService.getBatsmanList();
    };
    MostRunsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-most-runs-list",
            templateUrl: "./most-runs-list.component.html",
            styleUrls: ["./most-runs-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            firebase_service_1.FirebaseService,
            router_1.Router])
    ], MostRunsListComponent);
    return MostRunsListComponent;
}());
exports.MostRunsListComponent = MostRunsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0VBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QyxzREFBK0Q7QUFFL0Qsc0NBQWtEO0FBUWxEO0lBT0UsK0JBQ1UsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFDSix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFkVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FTNEIseUJBQWdCO1lBQ2pCLGtDQUFlO1lBQ3hCLGVBQU07T0FWYixxQkFBcUIsQ0FlakM7SUFBRCw0QkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi8uLi8uLi9tb2RlbC9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImFwcC1tb3N0LXJ1bnMtbGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL21vc3QtcnVucy1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9tb3N0LXJ1bnMtbGlzdC5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE1vc3RSdW5zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBsYXllcnM6IFBsYXllcnNbXTtcblxuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIFVJRDogc3RyaW5nO1xuICBwdWJsaWMgcGxheWVycyQ6IE9ic2VydmFibGU8YW55PjtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYXllcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRCYXRzbWFuTGlzdCgpO1xuICB9XG59XG4iXX0=