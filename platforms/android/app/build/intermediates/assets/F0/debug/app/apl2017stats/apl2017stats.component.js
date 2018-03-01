"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("core-js/es7/reflect");
var Apl2017statsComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Apl2017statsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    Apl2017statsComponent.prototype.onGetBowlerList = function () {
        this.routerExtensions.navigate(["mostWicketsList"]);
    };
    Apl2017statsComponent.prototype.onGetBatsmanList = function () {
        this.routerExtensions.navigate(["mostRunsList"]);
    };
    Apl2017statsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-apl2017stats",
            templateUrl: "./apl2017stats.component.html",
            styleUrls: ["./apl2017stats.component.scss"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], Apl2017statsComponent);
    return Apl2017statsComponent;
}());
exports.Apl2017statsComponent = Apl2017statsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBsMjAxN3N0YXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwbDIwMTdzdGF0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELCtCQUE2QjtBQVM3QjtJQUNFLG9DQUFvQztJQUNwQywrQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDO0lBRTNELCtDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxnREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBVk0scUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBR3NDLHlCQUFnQjtPQUYzQyxxQkFBcUIsQ0FXakM7SUFBRCw0QkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiY29yZS1qcy9lczcvcmVmbGVjdFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogXCJhcHAtYXBsMjAxN3N0YXRzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcGwyMDE3c3RhdHMuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYXBsMjAxN3N0YXRzLmNvbXBvbmVudC5zY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcGwyMDE3c3RhdHNDb21wb25lbnQgIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxyXG5cclxuICBvbkdldEJvd2xlckxpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibW9zdFdpY2tldHNMaXN0XCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkdldEJhdHNtYW5MaXN0KCk6IHZvaWQge1xyXG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibW9zdFJ1bnNMaXN0XCJdKTtcclxuICAgICAgfVxyXG59XHJcblxyXG4iXX0=