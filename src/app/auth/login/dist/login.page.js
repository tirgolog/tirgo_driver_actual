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
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var LoginPage = /** @class */ (function () {
    function LoginPage(router, app, modalCtrl, httpClient, authService, navCtrl, alertController, platform) {
        var _this = this;
        this.router = router;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.platform = platform;
        this.phone = '';
        //phone:string = '(93) 542-13-24';
        this.code = '';
        this.timer = 59;
        this.codeon = false;
        this.error = false;
        this.policy = false;
        this.offer = false;
        this.prefix = '+998';
        this.flag = '🇺🇿';
        this.mask = ' (00) 000-00-00';
        this.country_code = 'UZ';
        this.phone_length = 0;
        this.searchinput = '';
        this.loading = false;
        this.authService.locationIsAvailable();
        console.log(this.authService.locationIsAvailable());
        this.platform.ready().then(function () {
            _this.setAutocompleteAttribute();
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getJSONFromLocal().subscribe(function (data) {
            _this.phonescodesOriginal = data;
            _this.phonescodes = _this.phonescodesOriginal;
        }, function (error) { return console.error("Failed because: " + error); });
        // this.getPermissionLocation();
    };
    LoginPage.prototype.setAutocompleteAttribute = function () {
        if (this.passInput) {
            var nativeInput = this.passInput.getInputElement();
            if (nativeInput) {
                nativeInput.then(function (input) {
                    input.autocomplete = 'one-time-code';
                });
            }
        }
    };
    LoginPage.prototype.getJSONFromLocal = function () {
        return this.httpClient.get("./assets/json/phone.json");
    };
    LoginPage.prototype.back = function () {
        this.navCtrl.back();
    };
    LoginPage.prototype.recoverLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.router.navigate(['recoverlogin'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signIn = function (isTelegram) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        if (!(this.phone.length < this.mask.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.alert('Ошибка', 'Введите корректный номер телефона')];
                    case 1:
                        _a.sent();
                        this.loading = false;
                        return [3 /*break*/, 8];
                    case 2:
                        if (!!this.offer) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.authService.alert('Ошибка', 'Требуется принять публичную оферту')];
                    case 3:
                        _a.sent();
                        this.loading = false;
                        return [3 /*break*/, 8];
                    case 4:
                        if (!!this.policy) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.authService.alert('Ошибка', 'Требуется принять политику конфиденциальности')];
                    case 5:
                        _a.sent();
                        this.loading = false;
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.authService.loginUser(this.prefix + '' + this.phone, this.country_code, isTelegram).toPromise()
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                if (res.status) {
                                    this.codeon = true;
                                    this.loading = false;
                                    this.timer = 59;
                                    setInterval(function () {
                                        if (_this.timer > 0) {
                                            _this.timer = _this.timer - 1;
                                        }
                                    }, 1000);
                                }
                                this.error = false;
                                return [2 /*return*/];
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.loading = false;
                                this.error = true;
                                return [2 /*return*/];
                            });
                        }); })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.verifyCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.authService.verifyCode(this.prefix + '' + this.phone, this.code).toPromise()
                                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!res.status) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.authService.setJwt(res.token)];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, this.app.checkSession()];
                                        case 2:
                                            _a.sent();
                                            this.loading = false;
                                            return [3 /*break*/, 5];
                                        case 3: return [4 /*yield*/, this.authService.alert('Ошибка', res.text)];
                                        case 4:
                                            _a.sent();
                                            this.loading = false;
                                            _a.label = 5;
                                        case 5:
                                            this.error = false;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.loading = false;
                                    this.error = true;
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.findPhoneCode = function (ev) {
        var _this = this;
        this.searchinput = ev.target.value;
        this.phonescodes = this.phonescodesOriginal.filter(function (row) {
            return !row.name ? row.name : row.name.toLowerCase().includes(_this.searchinput.toLowerCase()) ||
                !row.code ? row.code : row.code.toLowerCase().includes(_this.searchinput.toLowerCase()) ||
                !row.dial_code ? row.dial_code : row.dial_code.toLowerCase().includes(_this.searchinput.toLowerCase());
        });
    };
    LoginPage.prototype.selectCode = function (item) {
        this.modalCtrl.dismiss();
        this.prefix = item.dial_code;
        this.flag = item.flag;
        this.mask = item.mask ? item.mask : ' (00) 000-00-00';
        this.country_code = item.code;
    };
    __decorate([
        core_1.ViewChild('passInput')
    ], LoginPage.prototype, "passInput");
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
