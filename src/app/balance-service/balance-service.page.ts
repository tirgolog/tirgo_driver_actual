import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {InAppBrowser} from "@ionic-native/in-app-browser/ngx";
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-balance-service',
  templateUrl: './balance-service.page.html',
  styleUrls: ['./balance-service.page.scss'],
})
export class BalanceServicePage implements OnInit {
  selectmethodpay: string = 'click'
  amount:string = '';
  payConfirm: boolean = false;
  priceCards
  selectedPrice
  subscriptionId:any
  constructor(
    private iab: InAppBrowser,
    private navCtrl: NavController,
    public authService:AuthenticationService,
    public socketService: SocketService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateDriverBalance();
    this.getPrice();
    this.route.queryParamMap.subscribe(params => {
      if(params) {
        this.subscriptionId = params.get('subscription_id');
      }
    });
  }
  
  getPrice() {
    this.authService.getSubscribtionsPrice().subscribe((res: any) => {
      if (res.status) {
        this.priceCards = res.data;
        if (this.subscriptionId) {
          this.priceCards = this.priceCards.filter(card => card.id == +this.subscriptionId);
        }
        if (this.priceCards.length > 0) {
          this.selectedPrice = this.priceCards[0];
          this.priceCards[0].selected = true;
        }
      }
    });
  }
  selectPrice(selectedPriceCard: any) {
    this.priceCards.forEach(priceCard => priceCard.selected = false);
    selectedPriceCard.selected = true;
    this.selectedPrice = selectedPriceCard
  }
  getPriceText(value: number): string {
    if (value === 7) {
      this.amount = '80000'
      return 'Цена: 80 000 сум';
    } else if (value === 15) {
      this.amount = '180000'
      return 'Цена: 180 000 сум';
    } else if (value === 47) {
      this.amount = '570000'
      return 'Цена: 570 000 сум';
    } else {
      return 'Unknown Price';
    }
  }
  back(){
    this.navCtrl.back()
  }
  async pay(){
    if (this.amount){
      if (this.selectmethodpay === 'click'){
        this.iab.create('https://my.click.uz/services/pay?service_id=24721&merchant_id=17235&amount='+this.amount+'&transaction_param='+this.authService.currentUser!.id,'_system');
      }else if(this.selectmethodpay === 'apelsin'){
        /*if (this.expiry_date_card && this.card_number){
          const res = await this.authService.getTokenCardApelsin(this.expiry_date_card,this.card_number).toPromise()
          console.log(res)
        } else {
          const alert = await this.alertController.create({
            header: 'Ошибка',
            message: 'Введите данные карты',
            buttons: ['OK']
          });
          await alert.present();
        }*/
      }else if(this.selectmethodpay === 'payme'){
        let base64 = btoa("m=636ca5172cfb25761a99e6af;ac.UserID="+this.authService.currentUser.id+";a="+this.amount+"00");
        this.iab.create('https://checkout.paycom.uz/'+base64,'_system');
      }
    }else {
      await this.authService.alert('Ошибка','Минимальная сумма оплаты 1000 UZS')
    }
  }
  async withdrawFromActivebalance() {
    if(this.authService.currentUser.balance > 0) {
      this.authService.withdrawBalance(this.authService.currentUser.id).subscribe((res: any) => {
        if(res.status) {
          this.payConfirm = true;
        }
        else if(!res.status && res.error == 'No enough balance') {
           this.authService.alert('Ошибка','У вас нет активного баланса')
        }
        else if(!res.status && res.error == 'No enough balance') {
          this.authService.alert('Ошибка',res.error.toString());
       }
      });
    } else {
      await this.authService.alert('Ошибка','У вас нет активного баланса')
    }
  }
  updateDriverBalance() {
    this.socketService.updateDriverBalance().subscribe((res:any) => {
      if(res) {
        const data = JSON.parse(res);
        this.authService.currentUser.balance = data.balance;
        this.authService.currentUser.balance_off = data.balance_off;
        this.authService.currentUser.balance_in_proccess = data.balance_in_proccess;
      }
    })
  }
}
