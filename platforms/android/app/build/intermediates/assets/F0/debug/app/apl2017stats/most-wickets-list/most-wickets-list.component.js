"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es7/reflect");
var firebase_service_1 = require("./../../services/firebase.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var MostWicketsListComponent = /** @class */ (function () {
    function MostWicketsListComponent(routerExtensions, firebaseService, router) {
        this.routerExtensions = routerExtensions;
        this.firebaseService = firebaseService;
        this.router = router;
    }
    MostWicketsListComponent.prototype.ngOnInit = function () {
        this.players$ = this.firebaseService.getBowlerList();
    };
    MostWicketsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "most-wickets-list",
            templateUrl: "./most-wickets-list.component.html",
            styleUrls: ["./most-wickets-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            firebase_service_1.FirebaseService,
            router_1.Router])
    ], MostWicketsListComponent);
    return MostWicketsListComponent;
}());
exports.MostWicketsListComponent = MostWicketsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9zdC13aWNrZXRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9zdC13aWNrZXRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQTZCO0FBQzdCLHNFQUFvRTtBQUNwRSwwQ0FBeUM7QUFDekMsc0RBQStEO0FBRS9ELHNDQUFrRDtBQVNsRDtJQU1DLGtDQUNVLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxNQUFjO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBQ0osMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBYlcsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2hELENBQUM7eUNBUzJCLHlCQUFnQjtZQUNqQixrQ0FBZTtZQUN4QixlQUFNO09BVFosd0JBQXdCLENBY3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vLi4vLi4vbW9kZWwvcGxheWVyc1wiO1xyXG5pbXBvcnQgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLy4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiBcIm1vc3Qtd2lja2V0cy1saXN0XCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9tb3N0LXdpY2tldHMtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogW1wiLi9tb3N0LXdpY2tldHMtbGlzdC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTW9zdFdpY2tldHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRwbGF5ZXJzOiBQbGF5ZXJzW107XHJcblx0aWQ6IHN0cmluZztcclxuXHRuYW1lOiBzdHJpbmc7XHJcblx0VUlEOiBzdHJpbmc7XHJcblx0cHVibGljIHBsYXllcnMkOiBPYnNlcnZhYmxlPGFueT47XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKFxyXG5cdCAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdCAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcclxuXHQgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuXHQpIHt9XHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0ICB0aGlzLnBsYXllcnMkID0gPGFueT50aGlzLmZpcmViYXNlU2VydmljZS5nZXRCb3dsZXJMaXN0KCk7XHJcblx0fVxyXG59Il19