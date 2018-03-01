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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0VBQW9FO0FBQ3BFLDBDQUF5QztBQUN6QyxzREFBK0Q7QUFFL0Qsc0NBQWtEO0FBUWxEO0lBTUUsK0JBQ1UsZ0JBQWtDLEVBQ2xDLGVBQWdDLEVBQ2hDLE1BQWM7UUFGZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFDSix3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBUSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzdELENBQUM7SUFiVSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDOUMsQ0FBQzt5Q0FRNEIseUJBQWdCO1lBQ2pCLGtDQUFlO1lBQ3hCLGVBQU07T0FUYixxQkFBcUIsQ0FjakM7SUFBRCw0QkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllcnMgfSBmcm9tIFwiLi8uLi8uLi9tb2RlbC9wbGF5ZXJzXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLy4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiBcImFwcC1tb3N0LXJ1bnMtbGlzdFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbW9zdC1ydW5zLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vbW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9zdFJ1bnNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwbGF5ZXJzOiBQbGF5ZXJzW107XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgVUlEOiBzdHJpbmc7XHJcbiAgcHVibGljIHBsYXllcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYXllcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRCYXRzbWFuTGlzdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=