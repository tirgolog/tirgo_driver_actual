"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.playerFactory = exports.createTranslateLoader = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var storage_angular_1 = require("@ionic/storage-angular");
var storage_1 = require("@ionic/storage");
var http_1 = require("@angular/common/http");
var api_interceptor_1 = require("./services/api.interceptor");
var forms_1 = require("@angular/forms");
var menu_module_1 = require("./menu/menu.module");
var ngx_mask_ionic_1 = require("ngx-mask-ionic");
var http_loader_1 = require("@ngx-translate/http-loader");
var core_2 = require("@ngx-translate/core");
var choice_city_page_1 = require("./choice-city/choice-city.page");
var ngx_1 = require("@awesome-cordova-plugins/geolocation/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var order_page_1 = require("./order/order.page");
var main_pipe_module_1 = require("./pipes/main-pipe.module");
var ru_1 = require("@angular/common/locales/ru");
var common_1 = require("@angular/common");
var ngx_3 = require("@ionic-native/call-number/ngx");
var ngx_4 = require("@awesome-cordova-plugins/push/ngx");
var ngx_5 = require("@awesome-cordova-plugins/camera/ngx");
var ngx_6 = require("@ionic-native/file-transfer/ngx");
var ngx_7 = require("@ionic-native/in-app-browser/ngx");
var addcontact_page_1 = require("./addcontact/addcontact.page");
var ngx_8 = require("@ionic-native/network/ngx");
var ngx_lottie_1 = require("ngx-lottie");
var lottie_web_1 = require("lottie-web");
var setraiting_page_1 = require("./setraiting/setraiting.page");
var selectstatus_page_1 = require("./selectstatus/selectstatus.page");
var filter_page_1 = require("./filter/filter.page");
var ngx_9 = require("@ionic-native/diagnostic/ngx");
common_1.registerLocaleData(ru_1["default"]);
function createTranslateLoader(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
function playerFactory() {
    return lottie_web_1["default"];
}
exports.playerFactory = playerFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                setraiting_page_1.SetraitingPage,
                order_page_1.OrderPage,
                addcontact_page_1.AddcontactPage,
                selectstatus_page_1.SelectstatusPage,
                filter_page_1.FilterPage,
                choice_city_page_1.ChoiceCityPage,
            ],
            entryComponents: [
                choice_city_page_1.ChoiceCityPage,
                setraiting_page_1.SetraitingPage,
                addcontact_page_1.AddcontactPage,
                selectstatus_page_1.SelectstatusPage,
                filter_page_1.FilterPage,
                order_page_1.OrderPage,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_1.IonicModule.forRoot({ mode: 'ios' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_mask_ionic_1.NgxMaskIonicModule.forRoot(),
                ngx_lottie_1.LottieModule.forRoot({ player: playerFactory }),
                core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: createTranslateLoader,
                        deps: [http_1.HttpClient]
                    }
                }),
                storage_angular_1.IonicStorageModule.forRoot({
                    name: '__tirgodriver',
                    driverOrder: [storage_1.Drivers.IndexedDB, storage_1.Drivers.LocalStorage]
                }),
                app_routing_module_1.AppRoutingModule,
                menu_module_1.MenuPageModule,
                main_pipe_module_1.MainPipeModule,
            ],
            providers: [
                ngx_7.InAppBrowser,
                ngx_3.CallNumber,
                ngx_1.Geolocation,
                ngx_2.StatusBar,
                ngx_5.Camera,
                ngx_6.FileTransfer,
                ngx_4.Push,
                ngx_9.Diagnostic,
                ngx_8.Network,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: api_interceptor_1.ApiInterceptor,
                    multi: true
                },
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
