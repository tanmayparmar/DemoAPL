"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apl2017stats_component_1 = require("./apl2017stats/apl2017stats.component");
var most_runs_list_component_1 = require("./apl2017stats/most-runs-list/most-runs-list.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var most_wickets_list_component_1 = require("./apl2017stats/most-wickets-list/most-wickets-list.component");
exports.routes = [
    // {path:"",redirectTo:"runList",pathMatch:"full"},
    // {path:"home",component: AppComponent},
    { path: "mostRunsList", component: most_runs_list_component_1.MostRunsListComponent },
    { path: "mostWicketsList", component: most_wickets_list_component_1.MostWicketsListComponent },
    { path: "apl2017stats", component: apl2017stats_component_1.Apl2017statsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(exports.routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdGQUE4RTtBQUM5RSxtR0FBK0Y7QUFDL0Ysc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSw0R0FBd0c7QUFFM0YsUUFBQSxNQUFNLEdBQVc7SUFDMUIsbURBQW1EO0lBQ25ELHlDQUF5QztJQUN2QyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLGdEQUFxQixFQUFDO0lBQ3pELEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxzREFBd0IsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLDhDQUFxQixFQUFDO0NBQ3hELENBQUE7QUFNTjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwbDIwMTdzdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vYXBsMjAxN3N0YXRzL2FwbDIwMTdzdGF0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb3N0UnVuc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2FwbDIwMTdzdGF0cy9tb3N0LXJ1bnMtbGlzdC9tb3N0LXJ1bnMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNb3N0V2lja2V0c0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2FwbDIwMTdzdGF0cy9tb3N0LXdpY2tldHMtbGlzdC9tb3N0LXdpY2tldHMtbGlzdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgLy8ge3BhdGg6XCJcIixyZWRpcmVjdFRvOlwicnVuTGlzdFwiLHBhdGhNYXRjaDpcImZ1bGxcIn0sXHJcbiAgICAvLyB7cGF0aDpcImhvbWVcIixjb21wb25lbnQ6IEFwcENvbXBvbmVudH0sXHJcbiAgICAgIHsgcGF0aDogXCJtb3N0UnVuc0xpc3RcIiwgY29tcG9uZW50OiBNb3N0UnVuc0xpc3RDb21wb25lbnR9LFxyXG4gICAgICB7IHBhdGg6IFwibW9zdFdpY2tldHNMaXN0XCIsIGNvbXBvbmVudDogTW9zdFdpY2tldHNMaXN0Q29tcG9uZW50IH0sXHJcbiAgICAgIHsgcGF0aDpcImFwbDIwMTdzdGF0c1wiLCBjb21wb25lbnQ6IEFwbDIwMTdzdGF0c0NvbXBvbmVudH0gIFxyXG4gICAgIF1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=