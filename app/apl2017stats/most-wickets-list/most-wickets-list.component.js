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
            selector: 'most-wickets-list',
            templateUrl: './most-wickets-list.component.html',
            styleUrls: ['./most-wickets-list.component.css']
        }),
        __metadata("design:paramtypes", [router_2.RouterExtensions,
            firebase_service_1.FirebaseService,
            router_1.Router])
    ], MostWicketsListComponent);
    return MostWicketsListComponent;
}());
exports.MostWicketsListComponent = MostWicketsListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9zdC13aWNrZXRzLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9zdC13aWNrZXRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQTZCO0FBQzdCLHNFQUFvRTtBQUNwRSwwQ0FBeUM7QUFDekMsc0RBQStEO0FBRS9ELHNDQUFrRDtBQVNsRDtJQU1DLGtDQUNVLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxNQUFjO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBQ0osMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBYlcsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2hELENBQUM7eUNBUzJCLHlCQUFnQjtZQUNqQixrQ0FBZTtZQUN4QixlQUFNO09BVFosd0JBQXdCLENBY3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vLi4vLi4vbW9kZWwvcGxheWVyc1wiO1xuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLy4uLy4uL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdtb3N0LXdpY2tldHMtbGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb3N0LXdpY2tldHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL21vc3Qtd2lja2V0cy1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vc3RXaWNrZXRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHBsYXllcnM6IFBsYXllcnNbXTtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRVSUQ6IHN0cmluZztcblx0cHVibGljIHBsYXllcnMkOiBPYnNlcnZhYmxlPGFueT47XG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihcblx0ICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdCAgcHJpdmF0ZSBmaXJlYmFzZVNlcnZpY2U6IEZpcmViYXNlU2VydmljZSxcblx0ICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG5cdCkge31cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdCAgdGhpcy5wbGF5ZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0Qm93bGVyTGlzdCgpO1xuXHR9XG59Il19