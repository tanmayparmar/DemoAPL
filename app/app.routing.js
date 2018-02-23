"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apl2017stats_component_1 = require("./apl2017stats/apl2017stats.component");
var most_runs_list_component_1 = require("./apl2017stats/most-runs-list/most-runs-list.component");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
    // {path:"",redirectTo:"runList",pathMatch:"full"},
    // {path:"home",component: AppComponent},
    { path: "mostRunsList", component: most_runs_list_component_1.MostRunsListComponent },
    { path: "apl2017stats", component: apl2017stats_component_1.Apl2017statsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdGQUE4RTtBQUM5RSxtR0FBK0Y7QUFDL0Ysc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUV2RSwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBRW5FLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDcEQsbURBQW1EO0lBQ25ELHlDQUF5QztJQUN2QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGdEQUFxQixFQUFDO0lBQ3BELEVBQUUsSUFBSSxFQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUM7Q0FDeEQsQ0FBQTtBQU1OO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBsMjAxN3N0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9hcGwyMDE3c3RhdHMvYXBsMjAxN3N0YXRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb3N0UnVuc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2FwbDIwMTdzdGF0cy9tb3N0LXJ1bnMtbGlzdC9tb3N0LXJ1bnMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJpdGVtc1wiLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIml0ZW0vOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudCB9LFxuICAgIC8vIHtwYXRoOlwiXCIscmVkaXJlY3RUbzpcInJ1bkxpc3RcIixwYXRoTWF0Y2g6XCJmdWxsXCJ9LFxuICAgIC8vIHtwYXRoOlwiaG9tZVwiLGNvbXBvbmVudDogQXBwQ29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogXCJydW5MaXN0XCIsIGNvbXBvbmVudDogTW9zdFJ1bnNMaXN0Q29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDpcImFwbDIwMTdzdGF0c1wiLCBjb21wb25lbnQ6IEFwbDIwMTdzdGF0c0NvbXBvbmVudH0gIFxuICAgICBdXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19