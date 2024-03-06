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
exports.AuthenticationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var camera_1 = require("@capacitor/camera");
var TOKEN_KEY = 'jwttirgotoken';
var API_URL = 'https://admin.tirgo.io/api';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, alertController, iab, storage, transfer, geolocation, diagnostic, platform, router, loadingCtrl) {
        this.http = http;
        this.alertController = alertController;
        this.iab = iab;
        this.storage = storage;
        this.transfer = transfer;
        this.geolocation = geolocation;
        this.diagnostic = diagnostic;
        this.platform = platform;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.authenticationState = new rxjs_1.BehaviorSubject({});
        this.API_URL = 'https://admin.tirgo.io/api';
        this.viewintro = false;
        this.language = "ru";
        this.addresses = [];
        this.mytruck = [];
        this.contacts = [];
        this.typetruck = [];
        this.myorders = [];
        this.myAllorders = [];
        this.myarchiveorders = [];
        this.currency = [];
        this.statuses = [];
        this.typecargo = [];
        this.notifications = [];
        this.messages = [];
        this.allordersfree = [];
        this.allmyordersprocessing = [];
        this.cityinfo = '';
        this.optionsCamera = {
            quality: 100,
            allowEditing: false,
            resultType: camera_1.CameraResultType.Base64,
            source: camera_1.CameraSource.Camera
        };
    }
    AuthenticationService_1 = AuthenticationService;
    AuthenticationService.prototype.uploadFile = function (fileName, base64Data, type) {
        return __awaiter(this, void 0, Promise, function () {
            var _a, byteCharacters, byteNumbers, i, byteArray, blob, formData, headers, url, response, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Отгружаем фото',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        byteCharacters = atob(base64Data);
                        byteNumbers = new Array(byteCharacters.length);
                        for (i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        byteArray = new Uint8Array(byteNumbers);
                        blob = new Blob([byteArray], { type: 'image/jpeg' });
                        formData = new FormData();
                        formData.append('file', blob, fileName);
                        formData.append('typeImage', type);
                        headers = new http_1.HttpHeaders({
                            'Access-Control-Allow-Origin': '*',
                            'Authorization': 'Bearer ' + AuthenticationService_1.jwt
                        });
                        url = this.API_URL + "/users/uploadImage";
                        return [4 /*yield*/, this.http.post(url, formData).toPromise()];
                    case 4:
                        response = _b.sent();
                        console.log(response);
                        if (response.status) {
                            this.loading.dismiss();
                            return [2 /*return*/, response];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        this.alert('Ошибка:', error_1.message);
                        this.loading.dismiss();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.goToSupport = function () {
        this.iab.create('https://t.me/tirgosupportbot', '_system');
    };
    AuthenticationService.prototype.goToSupportAdmin = function () {
        if (!this.currentUser.to_subscription) {
            this.alertSubscription('Необходимо подключить подписку для этой услуги', '');
        }
        else {
            this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
        }
    };
    AuthenticationService.prototype.addLeadingZeros = function (num) {
        return String(num).padStart(6, '0');
    };
    AuthenticationService.prototype.loginUser = function (phone, country_code) {
        var sUrl = API_URL + '/users/login';
        var body = JSON.stringify({
            phone: phone, country_code: country_code
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.driverVerification = function (phone, country_code) {
        var sUrl = API_URL + '/users/sms-verification';
        var body = JSON.stringify({
            phone: phone, country_code: country_code
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.verifyCode = function (phone, code) {
        var sUrl = API_URL + '/users/codeverify';
        var body = JSON.stringify({
            phone: phone, code: code
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.verifyCodeDriver = function (phone, code) {
        var sUrl = API_URL + '/users/codeverifycation';
        var body = JSON.stringify({
            phone: phone, code: code
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.regUser = function (name) {
        var sUrl = API_URL + '/users/regUser';
        var body = JSON.stringify({
            name: name
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.checkSession = function () {
        var sUrl = API_URL + '/users/checkSession';
        return this.http.get(sUrl);
    };
    AuthenticationService.prototype.verifiedDriver = function () {
        var sUrl = API_URL + '/users/verified-driver';
        return this.http.get(sUrl);
    };
    AuthenticationService.prototype.updateLocation = function (lat, lng) {
        var sUrl = API_URL + '/users/updateLocationDriver';
        var body = JSON.stringify({
            lat: lat, lng: lng
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.setBusy = function (busy) {
        var sUrl = API_URL + '/users/setBusy';
        var body = JSON.stringify({
            busy: busy
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.findCity = function (query) {
        var sUrl = API_URL + '/users/findCity';
        var body = JSON.stringify({
            query: query
        });
        return this.http.post(sUrl, body)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data.suggestions;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.acceptOrder = function (orderid, price, dates, isMerchant) {
        var sUrl = API_URL + '/users/acceptOrderDriver';
        var body = JSON.stringify({
            orderid: orderid, price: price, dates: dates, isMerchant: isMerchant
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.cancelOrder = function (item) {
        var sUrl = API_URL + '/users/cancelOrderDriver';
        var body = JSON.stringify({
            item: item
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.finishOrder = function (id, lat, lng) {
        var sUrl = API_URL + '/users/fonishOrderDriver';
        var body = JSON.stringify({
            id: id, lat: lat, lng: lng
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.finishMerchantOrder = function (id, lat, lng, toCity) {
        var sUrl = API_URL + '/users/finishMerchantOrderDriver';
        var body = JSON.stringify({
            id: id, lat: lat, lng: lng, toCity: toCity
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.saveCityInfo = function (city) {
        var sUrl = API_URL + '/users/saveCityInfo';
        var body = JSON.stringify({
            city: city
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.setAdrUser = function (enable) {
        var sUrl = API_URL + '/users/setAdrUser';
        var body = JSON.stringify({
            enable: enable
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.setDateBirthday = function (date) {
        var sUrl = API_URL + '/users/setDateBirthday';
        var body = JSON.stringify({
            date: date
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.addContact = function (phone, telegram, whatsapp, viber) {
        var sUrl = API_URL + '/users/addContact';
        var body = JSON.stringify({
            phone: phone, telegram: telegram, whatsapp: whatsapp, viber: viber
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.verifyNewContact = function (phone, code) {
        var sUrl = API_URL + '/users/verifyNewContact';
        var body = JSON.stringify({
            phone: phone, code: code
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.delContact = function (id) {
        var sUrl = API_URL + '/users/delContact';
        var body = JSON.stringify({
            id: id
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.saveDeviceToken = function (token) {
        var sUrl = API_URL + '/users/saveDeviceToken';
        var body = JSON.stringify({
            token_device: token
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.delTransport = function (id) {
        var sUrl = API_URL + '/users/delTransport';
        var body = JSON.stringify({
            id: id
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.addTransport = function (name, description, maxweight, type, car_photos, license_files, tech_passport_files, adr, cubature, state_number) {
        var sUrl = API_URL + '/users/addTransport';
        var body = JSON.stringify({
            name: name, description: description, maxweight: maxweight, type: type, car_photos: car_photos, license_files: license_files, tech_passport_files: tech_passport_files, adr: adr, cubature: cubature, state_number: state_number
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.editTransport = function (name, description, maxweight, type, adr, id, car_photos, license_files, tech_passport_files, cubature, state_number) {
        var sUrl = API_URL + '/users/editTransport';
        var body = JSON.stringify({
            name: name, description: description, maxweight: maxweight, type: type, adr: adr, id: id, car_photos: car_photos, license_files: license_files, tech_passport_files: tech_passport_files, cubature: cubature, state_number: state_number
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.Verification = function (full_name, phone, selfies_with_passport, bank_card, bank_cardname, transport_front_photo, transport_back_photo, transport_side_photo, adr_photo, transport_registration_country, state_registration_truckNumber, driver_license, transportation_license_photo, techpassport_photo1, techpassport_photo2, type, brand_name) {
        var sUrl = API_URL + '/users/verification';
        var body = JSON.stringify({
            full_name: full_name, phone: phone, selfies_with_passport: selfies_with_passport, bank_card: bank_card, bank_cardname: bank_cardname, transport_front_photo: transport_front_photo, transport_back_photo: transport_back_photo, transport_side_photo: transport_side_photo, adr_photo: adr_photo, transport_registration_country: transport_registration_country, state_registration_truckNumber: state_registration_truckNumber, driver_license: driver_license, transportation_license_photo: transportation_license_photo, techpassport_photo1: techpassport_photo1, techpassport_photo2: techpassport_photo2, type: type, brand_name: brand_name
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.getTruck = function () {
        var sUrl = API_URL + '/users/getMyTrack';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.data) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getMessages = function () {
        var sUrl = API_URL + '/users/getAllMessages';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.data) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.sendMessage = function (message) {
        var sUrl = API_URL + '/users/sendMessageSupport';
        var body = JSON.stringify({
            message: message
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.delPhotoUser = function (file) {
        var sUrl = API_URL + '/users/delPhotoUser';
        var body = JSON.stringify({
            filename: file
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.delUser = function (userid) {
        var sUrl = API_URL + '/users/delUser';
        var body = JSON.stringify({
            userid: userid
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.getContacts = function () {
        var sUrl = API_URL + '/users/getContacts';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getTypeCargo = function () {
        var sUrl = API_URL + '/users/getTypeCargo';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getTypeTruck = function () {
        var sUrl = API_URL + '/users/getTypeTruck';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getMyOrders = function () {
        var sUrl = API_URL + '/users/getMyOrdersDriver';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getMyArchiveOrders = function () {
        var sUrl = API_URL + '/users/getMyArchiveOrdersDriver';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getCurrency = function () {
        var sUrl = API_URL + '/users/getCurrency';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getStatuses = function () {
        var sUrl = API_URL + '/users/getStatuses';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getNotification = function () {
        var sUrl = API_URL + '/users/getNotifyDriver';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.status) {
                return res.data;
            }
            else {
                return [];
            }
        }));
    };
    AuthenticationService.prototype.getAllOrdersFree = function () {
        var sUrl = API_URL + '/truck-booking/orders';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.data) {
                return res.data;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getAllMyOrdersProcessing = function () {
        var sUrl = API_URL + '/truck-booking?status=processing';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.data) {
                return res.data;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getAllMyOrdersDone = function () {
        var sUrl = API_URL + '/truck-booking?status=done';
        return this.http.get(sUrl)
            .pipe(operators_1.map(function (res) {
            if (res.data) {
                return res.data;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.setJwt = function (jwt) {
        AuthenticationService_1.jwt = jwt;
        this.storage.set(TOKEN_KEY, jwt);
        this.authenticationState.next(true);
    };
    AuthenticationService.prototype.alert = function (header, text) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: text,
                            cssClass: 'customAlert',
                            buttons: [{
                                    text: 'Хорошо',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.alertSubscription = function (header, text) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: text,
                            cssClass: 'customAlert',
                            buttons: [{
                                    text: 'Подключить',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            // this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
                                            this.router.navigate(['/addsubscribe']);
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.alertLocation = function (header, text) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: text,
                            cssClass: 'customAlert',
                            buttons: [
                                {
                                    text: 'Настройки',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            cordova.plugins.diagnostic.switchToLocationSettings();
                                            return [2 /*return*/];
                                        });
                                    }); }
                                },
                                {
                                    text: 'Закрыть',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.alertController.dismiss();
                                            return [2 /*return*/];
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationService.prototype.checkToken = function () {
        var _this = this;
        return this.storage.get(TOKEN_KEY).then(function (res) {
            if (res) {
                AuthenticationService_1.jwt = res;
                _this.authenticationState.next(true);
                return true;
            }
            else {
                _this.authenticationState.next(false);
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.authenticationState.next(false);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.authenticationState.value;
    };
    AuthenticationService.prototype.sendNum = function (phone) {
        var sUrl = API_URL + 'users/login';
        var body = JSON.stringify({
            phone: phone
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.addBalance = function (amount) {
        var sUrl = API_URL + '/users/addBalance';
        var body = JSON.stringify({
            amount: amount
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.setRaiting = function (orderid, star, comment, userid) {
        var sUrl = API_URL + '/users/setRaitingUser';
        var body = JSON.stringify({
            orderid: orderid, star: star, comment: comment, userid: userid
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.codeNum = function (code, phone) {
        var sUrl = API_URL + 'users/codeverify';
        var body = JSON.stringify({
            code: code,
            phone: phone
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.checkGeolocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.geolocationCheck = true;
            }, function (error) {
                _this.geolocationCheck = false;
            });
            return this.geolocationCheck;
        }
        else {
            return false; // or provide a default value based on your requirements
        }
    };
    AuthenticationService.prototype.withdrawBalance = function (userId) {
        var sUrl = API_URL + '/users/driver-balance/withdraw';
        var body = JSON.stringify({
            userId: userId
        });
        return this.http.post(sUrl, body);
    };
    AuthenticationService.prototype.locationIsAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.diagnostic.getLocationAuthorizationStatus().then(function (status) {
                    if ((_this.platform.is("android") && status !== "GRANTED") || (_this.platform.is("ios") && status !== "authorized")) {
                        // this.setLocation(status)
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    AuthenticationService.prototype.setLocation = function (val) {
        var _this = this;
        this.alertController.create({
            header: "Использование вашей геопозиции",
            mode: 'md',
            message: "<p> собирает данные о вашем местоположении,чтобы обеспечить работу курьерской доставки , даже если приложение закрыто или когда приложение не используется.</p",
            backdropDismiss: false,
            buttons: [{
                    text: 'Разрешаю',
                    handler: function () {
                        _this.diagnostic.getLocationAuthorizationStatus().then(function (value) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                console.log(value + 'this.diagnostic.getLocationAuthorizationStatus()');
                                this.diagnostic.requestLocationAuthorization(cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS).then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                    var alert;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!((this.platform.is("android") && resp !== "GRANTED") || (this.platform.is("ios") && resp !== "authorized"))) return [3 /*break*/, 2];
                                                alert = this.alertController.create({
                                                    header: "Необходимо изменить уровень доступа к геопозиции",
                                                    message: "Закройте приложение, зайдите в настройки приложения Tirgo и выберите доступ к геопозиции - 'Разрешить в любом режиме'"
                                                });
                                                return [4 /*yield*/, alert];
                                            case 1:
                                                (_a.sent()).present();
                                                return [3 /*break*/, 3];
                                            case 2:
                                                console.log('i have permission');
                                                _a.label = 3;
                                            case 3: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); });
                    }
                },
            ]
        }).then(function (res) { return res.present(); });
    };
    AuthenticationService.prototype.getSubscribtionsPrice = function () {
        var sUrl = API_URL + '/users/subscription';
        return this.http.get(sUrl);
    };
    AuthenticationService.prototype.addSubscription = function (data) {
        return this.http.post(API_URL + '/users/addDriverSubscription', data);
    };
    AuthenticationService.prototype.getServicesList = function () {
        var sUrl = API_URL + '/users/services';
        return this.http.get(sUrl);
    };
    AuthenticationService.prototype.getAlhpaBalance = function (userId) {
        var sUrl = API_URL + '/users/alpha-payment/' + userId;
        return this.http.get(sUrl);
    };
    AuthenticationService.prototype.freeService = function (data) {
        return this.http.post(API_URL + '/users/addDriverServices', data);
    };
    AuthenticationService.prototype.serviceHistory = function (user_id) {
        var sUrl = API_URL + '/users/services-transaction/user';
        var body = { from: 0, limit: 50, userid: user_id };
        return this.http.post(sUrl, body);
    };
    var AuthenticationService_1;
    AuthenticationService = AuthenticationService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
