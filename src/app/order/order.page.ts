import { Component, Input, OnInit } from '@angular/core';
import { addDays } from 'date-fns';
import { formatDate } from "@angular/common";
import { AuthenticationService } from "../services/authentication.service";
import { AlertController, LoadingController, ModalController, Platform } from "@ionic/angular";
import axios from "axios";
import { Geolocation } from "@awesome-cordova-plugins/geolocation/ngx";
import { AddtransportPage } from '../addtransport/addtransport.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  @Input('item') item: any;
  loadingAccept: boolean = false;
  price: string = '';
  selecteddays: any[] = [];
  loading: any;
  constructor(
    public authService: AuthenticationService,
    private loadingCtrl: LoadingController,
    public alertController: AlertController,
    private geolocation: Geolocation,
    private modalController: ModalController,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.authService.checkGeolocation()
  }
  addDays(date: any, num: number) {
    return formatDate(new Date(addDays(date, num).toISOString()), 'dd MMMM', 'ru');
  }
  async acceptOrderFinalAccept() {
    this.loadingAccept = true;
    let cityOrder = '';
    let cityUser = '';

    this.loading = await this.loadingCtrl.create({
      message: 'Проверяем геопозицию',
    });

    this.loading.present();
    this.geolocation.getCurrentPosition(
      {
        maximumAge: 1000, timeout: 5000,
        enableHighAccuracy: true
      }
    )
      .then((res: any) => {
        this.loadingAccept = true;
        const get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + res.coords.longitude.toString() + "," + res.coords.latitude.toString() + "&apikey=" + this.authService.currentUser?.config.key_api_maps + "&lang=ru-RU";
        axios.get(get)
          .then(async res => {
            if (res.status) {
              this.loading.dismiss();
              cityUser = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description.split(',')[res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description.split(',').length - 1].replace(' ', '');
              cityOrder = this.item.route.from_city.split(',')[1].replace(' ', '');

              if (cityUser === cityOrder) {
                if (this.item.isMerchant) {
                  this.item.id = +this.item.id.split('M')[1];
                }
                const acceptRes = await this.authService.acceptOrder(this.item.id, this.price, this.selecteddays, this.item.isMerchant).toPromise();

                if (acceptRes.status) {
                  this.authService.myorders = await this.authService.getMyOrders().toPromise();
                  await this.modalController.dismiss({
                    accepted: true,
                  });
                }
              } else {
                await this.authService.alert('Ошибка', 'К сожалению Вы не можете принять заказ. Вы не находитесь в городе отправки груза.');
                await this.modalController.dismiss({
                  accepted: false,
                });
              }
            }
          })
      }, (error) => {
        if (error.message == 'User denied Geolocation') {
          this.loading.dismiss();
          this.loadingAccept = false;
          this.authService.alertLocation('Упс', 'Для получения заказов нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver');
        } else {
          this.loading.dismiss();
          this.loadingAccept = false;
          this.authService.alertLocation('Упс', 'Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver')
        }
      })
  }

  async acceptOrderFinal() {
    if (this.item.secure_transaction && !this.authService.currentUser?.driver_verification && !this.authService.currentUser?.send_verification) {
      const actionSheet = await this.alertController.create({
        header: 'Вы должны идентифицироваться чтобы иметь возможность  совершать “Безопасеые сделки',
        cssClass: 'custom-alert',
        buttons: [
          {
            text: 'OK',
            cssClass: 'icon-alert-button',
            handler: async () => {
              await this.router.navigate(['/notify']);
              await this.modalController.dismiss({
                accepted: true,
              });
            }
          }
        ]
      });
      await actionSheet.present();
    }
    else {
      this.loadingAccept = true;
      if (this.price) {
        const alert = await this.alertController.create({
          header: 'Внимание',
          message: 'Вы действительно хотите отправить предложение?',
          cssClass: 'customAlert',
          buttons: [
            {
              text: 'Нет',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                this.loadingAccept = false;
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Да',
              handler: () => {
                this.acceptOrderFinalAccept();
              }
            }
          ]
        });
        await alert.present();
      } else {
        await this.authService.alert('Упс', 'Требуется указать цену Ваше предложение по цене.');
        this.loadingAccept = false;
      }
    }
  }
  findDay(num: number) {
    const index = this.selecteddays.findIndex(e => e === num)
    return index >= 0;
  }
  selectDay(num: number) {
    const index = this.selecteddays.findIndex(e => e === num)
    if (index >= 0) {
      this.selecteddays.splice(index, 1)
    } else {
      this.selecteddays.push(num)
    }
  }
  async addTransport() {
    const modal = await this.modalController.create({
      component: AddtransportPage,
      swipeToClose: true,
      showBackdrop: true,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
}
