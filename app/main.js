"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var app_routing_1 = require("./app.routing");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require("nativescript-plugin-firebase");
var core_1 = require("@angular/core");
firebase.init({
    // optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    persist: true,
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppComponentModule = /** @class */ (function () {
    function AppComponentModule() {
    }
    AppComponentModule_1 = AppComponentModule;
    AppComponentModule = AppComponentModule_1 = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            ],
            providers: [AppComponentModule_1]
        })
    ], AppComponentModule);
    return AppComponentModule;
    var AppComponentModule_1;
}());
exports.AppComponentModule = AppComponentModule;
// a traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page. 
// angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// a NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBK0M7QUFDL0Msc0RBQXVFO0FBQ3ZFLDZDQUF5RDtBQUN6RCxnRkFBOEU7QUFDOUUsMEdBQTBHO0FBQzFHLDBEQUE0RTtBQUU1RSwyQ0FBeUM7QUFDekMsdURBQTBEO0FBQzFELHNDQUF5QztBQUV6QyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ1osa0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUU3QixPQUFPLEVBQUUsSUFBSTtDQUVkLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQyxRQUFRO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUs7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBYUY7SUFBQTtJQUVBLENBQUM7MkJBRlksa0JBQWtCO0lBQWxCLGtCQUFrQjtRQVg5QixlQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsaUNBQXdCO2dCQUN4QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsb0JBQU0sQ0FBQzthQUN0QztZQUNOLFNBQVMsRUFBRSxDQUFDLG9CQUFrQixDQUFDO1NBQ2xDLENBQUM7T0FFVyxrQkFBa0IsQ0FFOUI7SUFBRCx5QkFBQzs7Q0FBQSxBQUZELElBRUM7QUFGWSxnREFBa0I7QUFJL0IseUpBQXlKO0FBQ3pKLDZIQUE2SDtBQUM3SCwrSUFBK0k7QUFDL0ksbUZBQW1GO0FBQ25GLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCByb3V0ZXMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG4vLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXHJcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuZmlyZWJhc2UuaW5pdCh7XHJcbiAgLy8gb3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxyXG4gIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXHJcblxyXG4gIHBlcnNpc3Q6IHRydWUsXHJcbiAvLyBzdG9yYWdlQnVja2V0OiBcImRlbW9hcGwtNjgyMTAuYXBwc3BvdC5jb21cIixcclxufSkudGhlbihcclxuICAoaW5zdGFuY2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gIH0sXHJcbiAgKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gIH1cclxuKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgICAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXBwQ29tcG9uZW50TW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudE1vZHVsZSB7XHJcblxyXG59XHJcblxyXG4vLyBhIHRyYWRpdGlvbmFsIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBzdGFydHMgYnkgaW5pdGlhbGl6aW5nIGdsb2JhbCBvYmplY3RzLCBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLiBcclxuLy8gYW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOiBtb2R1bGVzLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCByb3V0ZXMsIERJIHByb3ZpZGVycy5cclxuLy8gYSBOYXRpdmVTY3JpcHQgQW5ndWxhciBhcHAgbmVlZHMgdG8gbWFrZSBib3RoIHBhcmFkaWdtcyB3b3JrIHRvZ2V0aGVyLCBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcclxuLy8gdGhhdCBzZXRzIHVwIGEgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIGFuZCBjYW4gYm9vdHN0cmFwIHRoZSBBbmd1bGFyIGZyYW1ld29yay5cclxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XHJcbiJdfQ==