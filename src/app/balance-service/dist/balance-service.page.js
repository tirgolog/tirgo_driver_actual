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
exports.BalanceServicePage = void 0;
var core_1 = require("@angular/core");
var BalanceServicePage = /** @class */ (function () {
    function BalanceServicePage(iab, navCtrl, authService, socketService, route, router) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.socketService = socketService;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.selectmethodpay = 'click';
        this.amount = '';
        this.payConfirm = false;
        this.selectedServices = [];
        this.amount_sum = 0;
        this.formattedData = [];
        this.alpha_balance = 0;
    }
    BalanceServicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDriverBalance();
        this.getPrice();
        this.route.queryParamMap.subscribe(function (params) {
            if (params) {
                _this.subscriptionId = params.get('subscription_id');
            }
        });
        this.getHistory();
    };
    BalanceServicePage.prototype.getHistory = function () {
        var _this = this;
        this.authService.serviceHistory(this.authService.currentUser.id).subscribe(function (res) {
            if (res.status) {
                _this.history = res.data;
            }
        });
    };
    BalanceServicePage.prototype.getAlphaBalance = function () {
        var _this = this;
        this.authService.getAlhpaBalance(this.authService.currentUser.id).subscribe(function (res) {
            if (res.status) {
                _this.alpha_balance = res.total_balance;
            }
        });
    };
    BalanceServicePage.prototype.getPrice = function () {
        var _this = this;
        this.authService.getServicesList().subscribe(function (res) {
            if (res.status) {
                _this.services = res.data;
                // this.selectedPrice = this.services[0];
                // this.services[0].selected = true;
            }
        });
    };
    BalanceServicePage.prototype.selectPrice = function (selectedPriceCard) {
        selectedPriceCard.selected = !selectedPriceCard.selected;
        this.selectedServices = this.services.filter(function (service) { return service.selected; });
    };
    BalanceServicePage.prototype.back = function () {
        this.navCtrl.back();
    };
    BalanceServicePage.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64, dataSend;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.authService.currentUser.issubscription) {
                    this.loading = false;
                    this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
                    this.router.navigate(['/addsubscribe']);
                }
                else {
                    this.amount_sum = this.selectedServices.reduce(function (acc, service) { return acc + Number(service.price_uzs); }, 0);
                    if (this.amount_sum > this.alpha_balance) {
                        this.loading = false;
                        if (this.selectmethodpay === 'click') {
                            this.iab.create('https://my.click.uz/services/pay?service_id=32406&merchant_id=24561&amount=' + (this.amount_sum - +this.alpha_balance) + '&transaction_param=' + this.authService.currentUser.id, '_system');
                            this.amount_sum = 0;
                        }
                        else if (this.selectmethodpay === 'payme') {
                            base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.authService.currentUser.id + ";a=" + (+this.amount_sum - +this.alpha_balance) + "00");
                            this.iab.create('https://checkout.paycom.uz/' + base64, '_system');
                            this.amount_sum = 0;
                        }
                    }
                    else {
                        this.formattedData = [];
                        this.selectedServices.forEach(function (service) {
                            var formattedService = {
                                services_id: service.id,
                                price_uzs: service.price_uzs,
                                price_kzs: service.price_kzs,
                                rate: service.rate
                            };
                            _this.formattedData.push(formattedService);
                        });
                        dataSend = {
                            phone: this.authService.currentUser.phone,
                            user_id: this.authService.currentUser.id,
                            services: this.formattedData
                        };
                        this.authService.freeService(dataSend).subscribe(function (res) {
                            if (res.status) {
                                _this.loading = false;
                                _this.authService.alert('Подписка успешно оформлена !', '');
                                _this.router.navigate(['/tabs/home']);
                            }
                        }, function (error) {
                            _this.loading = false;
                            _this.authService.alert('Ошибка', error.error.error);
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    BalanceServicePage.prototype.withdrawFromActivebalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.authService.currentUser.balance > 0)) return [3 /*break*/, 1];
                        this.authService.withdrawBalance(this.authService.currentUser.id).subscribe(function (res) {
                            if (res.status) {
                                _this.payConfirm = true;
                            }
                            else if (!res.status && res.error == 'No enough balance') {
                                _this.authService.alert('Ошибка', 'У вас нет активного баланса');
                            }
                            else if (!res.status && res.error == 'No enough balance') {
                                _this.authService.alert('Ошибка', res.error.toString());
                            }
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.authService.alert('Ошибка', 'У вас нет активного баланса')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BalanceServicePage.prototype.updateDriverBalance = function () {
        var _this = this;
        this.socketService.updateDriverBalance().subscribe(function (res) {
            if (res) {
                var data = JSON.parse(res);
                _this.authService.currentUser.balance = data.balance;
                _this.authService.currentUser.balance_off = data.balance_off;
                _this.authService.currentUser.balance_in_proccess = data.balance_in_proccess;
            }
        });
    };
    BalanceServicePage = __decorate([
        core_1.Component({
            selector: 'app-balance',
            templateUrl: './balance-service.page.html',
            styleUrls: ['./balance-service.page.scss']
        })
    ], BalanceServicePage);
    return BalanceServicePage;
}());
exports.BalanceServicePage = BalanceServicePage;
