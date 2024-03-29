import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, Platform, } from "@ionic/angular";
import { FileTransfer, } from "@ionic-native/file-transfer/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const TOKEN_KEY = 'jwttirgotoken';
const API_URL = 'https://admin.tirgo.io/api';

declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject({});
  geolocationCheck: boolean;
  public API_URL: string = 'https://admin.tirgo.io/api';
  public currentUser: User | undefined;
  public viewintro: boolean = false
  static jwt: any;
  public language: string = "ru";
  public addresses: any[] = [];
  public mytruck: any[] = [];
  public contacts: any[] = [];
  public typetruck: any[] = [];
  public myorders: any[] = [];
  public myAllorders: any[] = [];
  public myarchiveorders: any[] = [];
  public currency: any[] = [];
  public statuses: any[] = [];
  public activeorder: any;
  public typecargo: any[] = [];
  public notifications: any[] = [];
  public messages: any[] = [];
  public allordersfree: any[] = [];
  public allmyordersprocessing: any[] = [];
  public cityinfo: string = '';
  loading;
  public optionsCamera = {
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera
  };

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private iab: InAppBrowser,
    private storage: Storage,
    public transfer: FileTransfer,
    private geolocation: Geolocation,
    public diagnostic: Diagnostic,
    public platform: Platform,
    public router: Router,
    private loadingCtrl: LoadingController
  ) {
  }

  async uploadFile(fileName: string, base64Data: string, type: string): Promise<any> {
    this.loading = await this.loadingCtrl.create({
      message: 'Отгружаем фото',
      cssClass: 'custom-loading'
    });
    await this.loading.present();

    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob: any = new Blob([byteArray], { type: 'image/jpeg' });
      const formData = new FormData();
      formData.append('file', blob, fileName);
      formData.append('typeImage', type);

      const headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + AuthenticationService.jwt,
      });
      const url = `${this.API_URL}/users/uploadImage`;
      const response: any = await this.http.post(url, formData).toPromise();
      console.log(response);

      if (response.status) {
        this.loading.dismiss();
        return response;
      }
    }
    catch (error: any) {
      this.alert('Ошибка:', error.message);
      this.loading.dismiss();
    }
  }

  goToSupport() {
    this.iab.create('https://t.me/tirgosupportbot', '_system');
  }
  goToVerifyCodeTg() {
    this.iab.create('https://t.me/TIRGO_BOT', '_system');
  }
  goToSupportAdmin() {
    if (!this.currentUser.to_subscription) {
      this.alertSubscription('Необходимо подключить подписку для этой услуги', '')
    } else {
      this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
    }
  }
  addLeadingZeros(num: number) {
    return String(num).padStart(6, '0');
  }

  loginUser(phone: string, country_code: string,isTelegram:boolean) {
    const sUrl = API_URL + '/users/login';
    const body = JSON.stringify({
      phone, country_code,isTelegram
    });
    return this.http.post<any>(sUrl, body);
  }

  driverVerification(phone: string, country_code: string) {
    const sUrl = API_URL + '/users/sms-verification';
    const body = JSON.stringify({
      phone, country_code
    });
    return this.http.post<any>(sUrl, body);
  }

  verifyCode(phone: string, code: string) {
    const sUrl = API_URL + '/users/codeverify';
    const body = JSON.stringify({
      phone, code
    });
    return this.http.post<any>(sUrl, body);
  }

  verifyCodeDriver(phone: string, code: string) {
    const sUrl = API_URL + '/users/codeverifycation';
    const body = JSON.stringify({
      phone, code
    });
    return this.http.post<any>(sUrl, body);
  }

  regUser(name: string) {
    const sUrl = API_URL + '/users/regUser';
    const body = JSON.stringify({
      name
    });
    return this.http.post<any>(sUrl, body);
  }

  checkSession() {
    const sUrl = API_URL + '/users/checkSession';
    return this.http.get<any>(sUrl);
  }

  verifiedDriver() {
    const sUrl = API_URL + '/users/verified-driver';
    return this.http.get<any>(sUrl);
  }

  updateLocation(lat: string, lng: string) {
    const sUrl = API_URL + '/users/updateLocationDriver';
    const body = JSON.stringify({
      lat, lng
    });
    return this.http.post<any>(sUrl, body);
  }
  setBusy(busy: any) {
    const sUrl = API_URL + '/users/setBusy';
    const body = JSON.stringify({
      busy
    });
    return this.http.post<any>(sUrl, body);
  }

  findCity(query: any): Observable<any[]> {
    const sUrl = API_URL + '/users/findCity';
    const body = JSON.stringify({
      query
    });
    return this.http.post<any>(sUrl, body)
      .pipe(map(res => {
        if (res.status) {
          return res.data.suggestions;
        } else {
          return [];
        }
      }));
  }

  acceptOrder(orderid: number, price: string, dates: any, isMerchant: boolean) {
    const sUrl = API_URL + '/users/acceptOrderDriver';
    const body = JSON.stringify({
      orderid, price, dates, isMerchant
    });
    return this.http.post<any>(sUrl, body);
  }
  cancelOrder(item: any) {
    const sUrl = API_URL + '/users/cancelOrderDriver';
    const body = JSON.stringify({
      item
    });
    return this.http.post<any>(sUrl, body);
  }
  finishOrder(id: number, lat: string, lng: string) {
    const sUrl = API_URL + '/users/fonishOrderDriver';
    const body = JSON.stringify({
      id, lat, lng
    });
    return this.http.post<any>(sUrl, body);
  }

  finishMerchantOrder(id: number, lat: string, lng: string, toCity: any) {
    const sUrl = API_URL + '/users/finishMerchantOrderDriver';
    const body = JSON.stringify({
      id, lat, lng, toCity
    });
    return this.http.post<any>(sUrl, body);
  }

  saveCityInfo(city: any) {
    const sUrl = API_URL + '/users/saveCityInfo';
    const body = JSON.stringify({
      city
    });
    return this.http.post<any>(sUrl, body);
  }

  setAdrUser(enable: any) {
    const sUrl = API_URL + '/users/setAdrUser';
    const body = JSON.stringify({
      enable
    });
    return this.http.post<any>(sUrl, body);
  }

  setDateBirthday(date: any) {
    const sUrl = API_URL + '/users/setDateBirthday';
    const body = JSON.stringify({
      date
    });
    return this.http.post<any>(sUrl, body);
  }
  addContact(phone: string, telegram: boolean, whatsapp: boolean, viber: boolean) {
    const sUrl = API_URL + '/users/addContact';
    const body = JSON.stringify({
      phone, telegram, whatsapp, viber
    });
    return this.http.post<any>(sUrl, body);
  }
  verifyNewContact(phone: string, code: string) {
    const sUrl = API_URL + '/users/verifyNewContact';
    const body = JSON.stringify({
      phone, code
    });
    return this.http.post<any>(sUrl, body);
  }
  delContact(id: number) {
    const sUrl = API_URL + '/users/delContact';
    const body = JSON.stringify({
      id
    });
    return this.http.post<any>(sUrl, body);
  }
  saveDeviceToken(token: any) {
    const sUrl = API_URL + '/users/saveDeviceToken';
    const body = JSON.stringify({
      token_device: token
    });
    return this.http.post<any>(sUrl, body);
  }
  delTransport(id: number) {
    const sUrl = API_URL + '/users/delTransport';
    const body = JSON.stringify({
      id
    });
    return this.http.post<any>(sUrl, body);
  }
  addTransport(name: string, description: string, maxweight: number, type: number, car_photos: any, license_files: any, tech_passport_files: any, adr: boolean, cubature: string, state_number: string) {
    const sUrl = API_URL + '/users/addTransport';
    const body = JSON.stringify({
      name, description, maxweight, type, car_photos, license_files, tech_passport_files, adr, cubature, state_number
    });
    return this.http.post<any>(sUrl, body);
  }
  editTransport(name: string, description: string, maxweight: number, type: number, adr: boolean, id: number, car_photos: any, license_files: any, tech_passport_files: any, cubature: string, state_number: string) {
    const sUrl = API_URL + '/users/editTransport';
    const body = JSON.stringify({
      name, description, maxweight, type, adr, id, car_photos, license_files, tech_passport_files, cubature, state_number
    });
    return this.http.post<any>(sUrl, body);
  }
  Verification(full_name: string, phone: string, selfies_with_passport: string, bank_card: string, bank_cardname: string, transport_front_photo: string, transport_back_photo: string, transport_side_photo: string, adr_photo: string, transport_registration_country: string, state_registration_truckNumber: string, driver_license: string, transportation_license_photo: string, techpassport_photo1: string, techpassport_photo2: string, type: number, brand_name: string) {
    const sUrl = API_URL + '/users/verification';
    const body = JSON.stringify({
      full_name, phone, selfies_with_passport, bank_card, bank_cardname, transport_front_photo, transport_back_photo, transport_side_photo, adr_photo, transport_registration_country, state_registration_truckNumber, driver_license, transportation_license_photo, techpassport_photo1, techpassport_photo2, type, brand_name
    });
    return this.http.post<any>(sUrl, body);
  }

  getTruck() {
    const sUrl = API_URL + '/users/getMyTrack';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getMessages() {
    const sUrl = API_URL + '/users/getAllMessages';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return [];
        }
      }));
  }
  sendMessage(message: string) {
    const sUrl = API_URL + '/users/sendMessageSupport';
    const body = JSON.stringify({
      message
    });
    return this.http.post<any>(sUrl, body);
  }
  delPhotoUser(file: string) {
    const sUrl = API_URL + '/users/delPhotoUser';
    const body = JSON.stringify({
      filename: file
    });
    return this.http.post<any>(sUrl, body);
  }
  delUser(userid: number) {
    const sUrl = API_URL + '/users/delUser';
    const body = JSON.stringify({
      userid: userid
    });
    return this.http.post<any>(sUrl, body);
  }

  getContacts() {
    const sUrl = API_URL + '/users/getContacts';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getTypeCargo() {
    const sUrl = API_URL + '/users/getTypeCargo';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }
  getTypeTruck() {
    const sUrl = API_URL + '/users/getTypeTruck';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getMyOrders() {
    const sUrl = API_URL + '/users/getMyOrdersDriver';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getMyArchiveOrders() {
    const sUrl = API_URL + '/users/getMyArchiveOrdersDriver';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getCurrency() {
    const sUrl = API_URL + '/users/getCurrency';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }
  getStatuses() {
    const sUrl = API_URL + '/users/getStatuses';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }


  getNotification() {
    const sUrl = API_URL + '/users/getNotifyDriver';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.status) {
          return res.data;
        } else {
          return [];
        }
      }));
  }

  getAllOrdersFree() {
    const sUrl = API_URL + '/truck-booking/orders';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }
  getAllMyOrdersProcessing() {
    const sUrl = API_URL + '/truck-booking?status=processing';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }
  getAllMyOrdersDone() {
    const sUrl = API_URL + '/truck-booking?status=done';
    return this.http.get<any>(sUrl)
      .pipe(map(res => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      }));
  }

  setJwt(jwt: string) {
    AuthenticationService.jwt = jwt;
    this.storage.set(TOKEN_KEY, jwt);
    this.authenticationState.next(true);
  }


  async alert(header: string, text: string) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'customAlert',
      buttons: [{
        text: 'Хорошо',
        handler: async () => {
        }
      }]
    });
    await alert.present();
  }

  async alertAcceptPayment(header: string, selectmethodpay:string,amount:number) {
    const alert = await this.alertController.create({
      header: header,
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Отмена',
          handler: async () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Ok',
          handler: async () => {
            if (selectmethodpay === 'click') {
              this.iab.create('https://my.click.uz/services/pay?service_id=32406&merchant_id=24561&amount=' + amount + '&transaction_param=' + this.currentUser!.id, '_system');
            }
            else if (selectmethodpay === 'payme') {
              let base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.currentUser.id + ";a=" + amount + "00");
              this.iab.create('https://checkout.paycom.uz/' + base64, '_system');
            }

          }
        }
      ]
    });
    await alert.present();
  }
  async alertPayAndRedirectTg() {
    const alert = await this.alertController.create({
      header: 'Теперь вы можете оформить услугу.',
      message: 'Перейдите Телеграм чтобы оформить документы.',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Отмена',
          handler: async () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Перейти',
          handler: async () => {
            this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
          }
        }
      ]
    });
    await alert.present();
  }

  async alertSubscription(header: string, text: string) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'customAlert',
      buttons: [{
        text: 'Подключить',
        handler: async () => {
          // this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
          this.router.navigate(['/addsubscribe']);
        }
      }]
    });
    await alert.present();
  }

  async alertLocation(header: string, text: string) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Настройки',
          handler: async () => {
            cordova.plugins.diagnostic.switchToLocationSettings();
          }
        },
        {
          text: 'Закрыть',
          handler: async () => {
            this.alertController.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        AuthenticationService.jwt = res;
        this.authenticationState.next(true);
        return true;
      } else {
        this.authenticationState.next(false);
        return false;
      }
    });
  }

  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  sendNum(phone: string) {
    const sUrl = API_URL + 'users/login';
    const body = JSON.stringify({
      phone: phone
    });
    return this.http.post<any>(sUrl, body);
  }

  addBalance(amount: string) {
    const sUrl = API_URL + '/users/addBalance';
    const body = JSON.stringify({
      amount
    });
    return this.http.post<any>(sUrl, body);
  }
  setRaiting(orderid: string, star: number, comment: string, userid: string) {
    const sUrl = API_URL + '/users/setRaitingUser';
    const body = JSON.stringify({
      orderid, star, comment, userid
    });
    return this.http.post<any>(sUrl, body);
  }

  codeNum(code: string, phone: string) {
    const sUrl = API_URL + 'users/codeverify';
    const body = JSON.stringify({
      code: code,
      phone: phone
    });
    return this.http.post<any>(sUrl, body);
  }

  checkGeolocation(): boolean {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.geolocationCheck = true;
        },
        (error) => {
          this.geolocationCheck = false;
        }
      );
      return this.geolocationCheck;
    } else {
      return false; // or provide a default value based on your requirements
    }
  }

  withdrawBalance(userId: number) {
    const sUrl = API_URL + '/users/driver-balance/withdraw';
    const body = JSON.stringify({
      userId
    });
    return this.http.post<any>(sUrl, body);
  }

  async locationIsAvailable() {
    this.diagnostic.getLocationAuthorizationStatus().then((status: any) => {
      if ((this.platform.is("android") && status !== "GRANTED") || (this.platform.is("ios") && status !== "authorized")) {
        // this.setLocation(status)
      }

    })
  }

  setLocation(val: string) {
    this.alertController.create({
      header: "Использование вашей геопозиции",
      mode: 'md',
      message: "<p> собирает данные о вашем местоположении,чтобы обеспечить работу курьерской доставки , даже если приложение закрыто или когда приложение не используется.</p",
      backdropDismiss: false,
      buttons: [{
        text: 'Разрешаю', handler: () => {
          this.diagnostic.getLocationAuthorizationStatus().then(async (value: any) => {
            console.log(value + 'this.diagnostic.getLocationAuthorizationStatus()')
            this.diagnostic.requestLocationAuthorization(cordova.plugins.diagnostic.locationAuthorizationMode.ALWAYS).then(async (resp: string) => {
              if ((this.platform.is("android") && resp !== "GRANTED") || (this.platform.is("ios") && resp !== "authorized")) {
                const alert = this.alertController.create({
                  header: "Необходимо изменить уровень доступа к геопозиции",
                  message: "Закройте приложение, зайдите в настройки приложения Tirgo и выберите доступ к геопозиции - 'Разрешить в любом режиме'",
                });
                (await alert).present()
              } else {
                console.log('i have permission')
                // this.sys.lsSet('initBackgroundLocation', true)
                // this.backgroundPositionService.initBackgroundPosition();
              }
            })

          })
        }
      },
      ]
    }).then(res => res.present())
  }

  getSubscribtionsPrice() {
    const sUrl = API_URL + '/users/subscription';
    return this.http.get<any>(sUrl);
  }
  addSubscription(data) {
    return this.http.post(API_URL + '/users/addDriverSubscription', data)
  }

  getServicesList() {
    const sUrl = API_URL + '/users/services';
    return this.http.get<any>(sUrl);
  }

  getAlhpaBalance(userId) {
    const sUrl = API_URL + '/users/alpha-payment/' + userId;
    return this.http.get<any>(sUrl);
  }
  freeService(data) {
    return this.http.post(API_URL + '/users/addDriverServices', data)
  }
  serviceHistory(user_id) {
    const sUrl = API_URL + '/users/services-transaction/user';
    const body = { from: 0, limit: 50, userid: user_id }
    return this.http.post<any>(sUrl, body);
  }
  checkService(user_id) {
    const sUrl = API_URL + '/users/services-transaction/user/days';
    const body = { from: 0, limit: 50, userid: user_id }
    return this.http.post<any>(sUrl, body);
  }
  getTirgoBalance(user) {
    const sUrl = API_URL + '/users/services-transaction/user/balanse';
    const body= {userid: user.id, phone: user.phone}
    return this.http.post<any>(sUrl,body);
  }
}