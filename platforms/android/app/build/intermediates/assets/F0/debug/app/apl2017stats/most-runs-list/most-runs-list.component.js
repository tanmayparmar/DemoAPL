"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("core-js/es7/reflect");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9zdC1ydW5zLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsK0JBQTZCO0FBQzdCLHNFQUFvRTtBQUNwRSwwQ0FBeUM7QUFDekMsc0RBQStEO0FBRS9ELHNDQUFrRDtBQVFsRDtJQU1FLCtCQUNVLGdCQUFrQyxFQUNsQyxlQUFnQyxFQUNoQyxNQUFjO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBQ0osd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBYlUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1NBQzlDLENBQUM7eUNBUTRCLHlCQUFnQjtZQUNqQixrQ0FBZTtZQUN4QixlQUFNO09BVGIscUJBQXFCLENBY2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXJzIH0gZnJvbSBcIi4vLi4vLi4vbW9kZWwvcGxheWVyc1wiO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtbW9zdC1ydW5zLWxpc3RcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL21vc3QtcnVucy1saXN0LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL21vc3QtcnVucy1saXN0LmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vc3RSdW5zTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcGxheWVyczogUGxheWVyc1tdO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIFVJRDogc3RyaW5nO1xyXG4gIHB1YmxpYyBwbGF5ZXJzJDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wbGF5ZXJzJCA9IDxhbnk+dGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0QmF0c21hbkxpc3QoKTtcclxuICB9XHJcbn1cclxuIl19