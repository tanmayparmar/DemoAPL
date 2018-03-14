"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apl2017_stats_module_1 = require("./apl2017-stats/apl2017-stats.module");
var firebase_service_1 = require("./services/firebase.service");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
// uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                apl2017_stats_module_1.Apl2017StatsModule,
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                app_routing_1.routing,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                home_component_1.HomeComponent
            ],
            providers: [
                item_service_1.ItemService,
                firebase_service_1.FirebaseService,
                { provide: core_1.NgModuleFactoryLoader, useClass: router_1.NSModuleFactoryLoader }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2RUFBMEU7QUFDMUUsZ0VBQThEO0FBQzlELHNDQUFrRjtBQUNsRixnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFnRDtBQUNoRCxpREFBK0M7QUFDL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsc0RBQThGO0FBQzlGLHdEQUFzRDtBQUd0RCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFnQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTlCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNWLDRCQUFZO2FBQ1o7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wseUNBQWtCO2dCQUNsQix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2dCQUN4QixxQkFBTztnQkFDUCxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQzthQUMzQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLGtDQUFlO2dCQUNmLEVBQUUsT0FBTyxFQUFFLDRCQUFxQixFQUFFLFFBQVEsRUFBRSw4QkFBcUIsRUFBRTthQUN0RTtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGwyMDE3U3RhdHNNb2R1bGUgfSBmcm9tIFwiLi9hcGwyMDE3LXN0YXRzL2FwbDIwMTctc3RhdHMubW9kdWxlXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IHJvdXRlcywgcm91dGluZyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsIE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gdW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXHJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG4vLyB1bmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQXBsMjAxN1N0YXRzTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZyxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxyXG4gICAgICAgIEZpcmViYXNlU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgdXNlQ2xhc3M6IE5TTW9kdWxlRmFjdG9yeUxvYWRlciB9XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuLypcclxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxyXG4qL1xyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxyXG4iXX0=