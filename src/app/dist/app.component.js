"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var user_1 = require("./user");
var axios_1 = require("axios");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, socketService, network, pushService, themeService, authService, storage, translateService, alertController, router, geolocation) {
        var _this = this;
        this.platform = platform;
        this.socketService = socketService;
        this.network = network;
        this.pushService = pushService;
        this.themeService = themeService;
        this.authService = authService;
        this.storage = storage;
        this.translateService = translateService;
        this.alertController = alertController;
        this.router = router;
        this.geolocation = geolocation;
        this.router.navigate(['loading']);
        this.initializeApp();
        setInterval(function () {
            _this.geolocation.getCurrentPosition().then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.authService.isAuthenticated()) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.authService.updateLocation(resp.coords.latitude.toString(), resp.coords.longitude.toString()).toPromise()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }, 1800000);
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.create()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('language').then(function (val) {
                                if (val === 'ru') {
                                    _this.authService.language = 'ru';
                                    _this.translateService.use('ru');
                                }
                                else if (val === 'tr') {
                                    _this.authService.language = 'tr';
                                    _this.translateService.use('tr');
                                }
                                else if (val === 'en') {
                                    _this.authService.language = 'en';
                                    _this.translateService.use('en');
                                }
                                else {
                                    _this.authService.language = 'ru';
                                    _this.translateService.use('ru');
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.authService.checkToken()];
                    case 3:
                        _a.sent();
                        this.authService.authenticationState.subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.checkSession()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.checkSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkSession().toPromise().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _loop_1, this_1, _i, _j, row, _k, _l;
                            var _this = this;
                            return __generator(this, function (_m) {
                                switch (_m.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 15];
                                        this.authService.currentUser = new user_1.User(res.user);
                                        if (!this.authService.isAuthenticated()) {
                                            this.authService.authenticationState.next(true);
                                        }
                                        if (!(this.authService.currentUser.name !== null)) return [3 /*break*/, 12];
                                        this.socketService.connect();
                                        if (this.platform.is('cordova')) {
                                            this.pushService.init();
                                        }
                                        _a = this.authService;
                                        return [4 /*yield*/, this.authService.getTypeTruck().toPromise()];
                                    case 1:
                                        _a.typetruck = _m.sent();
                                        _b = this.authService;
                                        return [4 /*yield*/, this.authService.getTypeCargo().toPromise()];
                                    case 2:
                                        _b.typecargo = _m.sent();
                                        _c = this.authService;
                                        return [4 /*yield*/, this.authService.getTruck().toPromise()];
                                    case 3:
                                        _c.mytruck = _m.sent();
                                        _d = this.authService;
                                        return [4 /*yield*/, this.authService.getContacts().toPromise()];
                                    case 4:
                                        _d.contacts = _m.sent();
                                        _e = this.authService;
                                        return [4 /*yield*/, this.authService.getMyOrders().toPromise()];
                                    case 5:
                                        _e.myorders = _m.sent();
                                        this.authService.getMyOrders().subscribe(function (res) {
                                            _this.authService.myAllorders = res;
                                        });
                                        _f = this.authService;
                                        return [4 /*yield*/, this.authService.getMyArchiveOrders().toPromise()];
                                    case 6:
                                        _f.myarchiveorders = _m.sent();
                                        _g = this.authService;
                                        return [4 /*yield*/, this.authService.getCurrency().toPromise()];
                                    case 7:
                                        _g.currency = _m.sent();
                                        _h = this.authService;
                                        return [4 /*yield*/, this.authService.getStatuses().toPromise()];
                                    case 8:
                                        _h.statuses = _m.sent();
                                        _loop_1 = function (row) {
                                            var index = this_1.authService.myorders.findIndex(function (e) { return e.id === row.id && row.status === 1; });
                                            if (index >= 0) {
                                                var indexuser = this_1.authService.myorders[index].orders_accepted.findIndex(function (user) { var _a; return user.id === ((_a = _this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.id) && user.status_order === 1; });
                                                if (indexuser >= 0) {
                                                    this_1.authService.activeorder = this_1.authService.myorders[index];
                                                    this_1.authService.myorders.splice(index, 1);
                                                }
                                            }
                                        };
                                        this_1 = this;
                                        for (_i = 0, _j = this.authService.myorders; _i < _j.length; _i++) {
                                            row = _j[_i];
                                            _loop_1(row);
                                        }
                                        this.socketService.updateAllOrders().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _loop_2, this_2, _i, _b, row;
                                            var _this = this;
                                            return __generator(this, function (_c) {
                                                switch (_c.label) {
                                                    case 0:
                                                        _a = this.authService;
                                                        return [4 /*yield*/, this.authService.getMyOrders().toPromise()];
                                                    case 1:
                                                        _a.myorders = _c.sent();
                                                        _loop_2 = function (row) {
                                                            var index = this_2.authService.myorders.findIndex(function (e) { return e.id === row.id && row.status === 1; });
                                                            if (index >= 0) {
                                                                var indexuser = this_2.authService.myorders[index].orders_accepted.findIndex(function (user) { var _a; return user.user_id === ((_a = _this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.id) && user.status_order === 1; });
                                                                if (indexuser >= 0) {
                                                                    this_2.authService.activeorder = this_2.authService.myorders[index];
                                                                    this_2.authService.myorders.splice(index, 1);
                                                                }
                                                            }
                                                        };
                                                        this_2 = this;
                                                        for (_i = 0, _b = this.authService.myorders; _i < _b.length; _i++) {
                                                            row = _b[_i];
                                                            _loop_2(row);
                                                        }
                                                        return [4 /*yield*/, this.checkSession()];
                                                    case 2:
                                                        _c.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        _k = this.authService;
                                        return [4 /*yield*/, this.authService.getNotification().toPromise()];
                                    case 9:
                                        _k.notifications = _m.sent();
                                        _l = this.authService;
                                        return [4 /*yield*/, this.authService.getMessages().toPromise()];
                                    case 10:
                                        _l.messages = _m.sent();
                                        this.socketService.updateAllMessages().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _a = this.authService;
                                                        return [4 /*yield*/, this.authService.getMessages().toPromise()];
                                                    case 1:
                                                        _a.messages = _b.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        //this.authService.allordersfree = await this.authService.getAllOrdersFree().toPromise();
                                        //this.authService.allmyordersprocessing = await this.authService.getAllMyOrdersProcessing().toPromise();
                                        return [4 /*yield*/, this.router.navigate(['/tabs/home'], { replaceUrl: true })];
                                    case 11:
                                        //this.authService.allordersfree = await this.authService.getAllOrdersFree().toPromise();
                                        //this.authService.allmyordersprocessing = await this.authService.getAllMyOrdersProcessing().toPromise();
                                        _m.sent();
                                        this.geolocation.getCurrentPosition().then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                            var get;
                                            var _this = this;
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        this.authService.geolocationCheck = true;
                                                        return [4 /*yield*/, this.authService.updateLocation(resp.coords.latitude.toString(), resp.coords.longitude.toString()).toPromise()];
                                                    case 1:
                                                        _b.sent();
                                                        get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + resp.coords.longitude.toString() + "," + resp.coords.latitude.toString() + "&apikey=" + ((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.config.key_api_maps) + "&lang=ru-RU";
                                                        axios_1["default"].get(get)
                                                            .then(function (res) {
                                                            if (res.status) {
                                                                _this.authService.geolocationCheck = true;
                                                                _this.authService.cityinfo = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
                                                            }
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [3 /*break*/, 14];
                                    case 12:
                                        console.log('here');
                                        return [4 /*yield*/, this.router.navigate(['/name'], { replaceUrl: true })];
                                    case 13:
                                        _m.sent();
                                        _m.label = 14;
                                    case 14: return [3 /*break*/, 17];
                                    case 15:
                                        this.authService.authenticationState.next(false);
                                        return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 16:
                                        _m.sent();
                                        _m.label = 17;
                                    case 17: return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.authService.authenticationState.next(false);
                                        return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        // this.initGeolocation();
        this.initPushNotifications();
        // this.checkSession();
        this.platform.ready().then(function () {
            _this.network.onDisconnect().subscribe(function () {
                console.log('onDisconnect');
                _this.router.navigate(['noconnect'], { replaceUrl: true });
            });
            _this.network.onConnect().subscribe(function () {
                console.log('onConnect');
                if (_this.authService.isAuthenticated()) {
                    _this.router.navigate(['tabs', 'home'], { replaceUrl: true });
                }
                else {
                    _this.router.navigate(['selectlanguage'], { replaceUrl: true });
                }
            });
            _this.themeService.restore();
        });
    };
    // Запускается при запуске приложения
    AppComponent.prototype.initGeolocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.geolocation.getCurrentPosition()];
            });
        });
    };
    //Push уведомлеения
    AppComponent.prototype.initPushNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
