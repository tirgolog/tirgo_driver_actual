import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SocketService } from '../services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance-service.page.html',
  styleUrls: ['./balance-service.page.scss'],
})
export class BalanceServicePage implements OnInit {
  loading: boolean = false;
  services
  selectmethodpay: string = 'click'
  amount: string = '';
  payConfirm: boolean = false;
  priceCards
  selectedPrice
  selectedServices: any[] = [];
  subscriptionId: any;
  amount_sum: number = 0;
  formattedData: any[] = [];
  alpha_balance: number = 0;
  history: any;
  showTgButton:boolean = false;

  constructor(
    private iab: InAppBrowser,
    private navCtrl: NavController,
    public authService: AuthenticationService,
    public socketService: SocketService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (params) {
        this.subscriptionId = params.get('subscription_id');
      }
    });
    this.getHistory();
    this.checkShowButton();
    this.getAlphaBalance();
    this.updateDriverBalance();
    this.getPrice();
    this.socketService.updateTirgoServiceBalance().subscribe((res:any) => {
      this.getAlphaBalance();
      this.getPrice();
      this.getHistory();
      this.checkShowButton();
      this.getAlphaBalance();
      this.updateDriverBalance();
      this.cdr.detectChanges();
    })
    this.socketService.updateTirgoServices().subscribe((res:any) => {
      this.getPrice();
      this.cdr.detectChanges();
    })
  }
  getHistory() {
    this.authService.serviceHistory(this.authService.currentUser.id).subscribe((res: any) => {
      if (res.status) {
        if (Array.isArray(res.data)) {
          this.history = res.data.slice(0, 10);
        } else {
          this.history = [];
        }
      }
    });
  }
  getAlphaBalance() {
    this.authService.getTirgoBalance(this.authService.currentUser).subscribe((res: any) => {
      if (res.status) {
        this.alpha_balance = res.data.balance;
      }
    })
  }
  getPrice() {
    this.authService.getServicesList().subscribe((res: any) => {
      if (res.status) {
        this.services = res.data;
        // this.selectedPrice = this.services[0];
        // this.services[0].selected = true;
      }
    })
  }
  selectPrice(selectedPriceCard: any) {
    selectedPriceCard.selected = !selectedPriceCard.selected;
    this.selectedServices = this.services.filter(service => service.selected);
  }
  back() {
    this.router.navigate(['/tabs/home']);
    this.services.forEach((v,k) => {
      if(v.selected) {
        v.selected = false;
      }
    })
  }
  async pay() {
    if (!this.authService.currentUser.issubscription) {
      this.loading = false;
      this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
      this.router.navigate(['/addsubscribe'])
    }
    else {
      this.amount_sum = this.selectedServices.reduce((acc, service) => acc + Number(service.price_uzs), 0);
      if (this.amount_sum > this.alpha_balance) {
        this.authService.alertAcceptPayment('Пополните свой баланс чтобы оформить услугу',this.selectmethodpay,this.amount_sum - +this.alpha_balance);
        this.loading = false;
        this.amount_sum = 0;
        // if (this.selectmethodpay === 'click') {
        //   this.iab.create('https://my.click.uz/services/pay?service_id=32406&merchant_id=24561&amount=' + (this.amount_sum - +this.alpha_balance) + '&transaction_param=' + this.authService.currentUser!.id, '_system');
        //   this.amount_sum = 0;
        // }
        // else if (this.selectmethodpay === 'payme') {
        //   let base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.authService.currentUser.id + ";a=" + (+this.amount_sum - +this.alpha_balance) + "00");
        //   this.iab.create('https://checkout.paycom.uz/' + base64, '_system');
        // }
      }
      else {
        this.formattedData = [];
        this.selectedServices.forEach(service => {
          const formattedService = {
            services_id: service.id,
            price_uzs: service.price_uzs,
            price_kzs: service.price_kzs,
            rate: service.rate,
          };
          this.formattedData.push(formattedService);
        });

        let dataSend = {
          phone: this.authService.currentUser.phone,
          user_id: this.authService.currentUser.id,
          services: this.formattedData
        };
        this.authService.freeService(dataSend).subscribe((res: any) => {
          if (res.status) {
            this.loading = false;
            this.authService.alertPayAndRedirectTg();
          }
        }, error => {
          if (error.error.error = 'Недостаточно средств на балансе') {
            this.authService.alert('Ошибка', error.error.error);
          }
          else {
            this.loading = false;
            this.authService.alert('Ошибка', error.error.error);
          }
        })
      }
    }
  }
  async withdrawFromActivebalance() {
    if (this.authService.currentUser.balance > 0) {
      this.authService.withdrawBalance(this.authService.currentUser.id).subscribe((res: any) => {
        if (res.status) {
          this.payConfirm = true;
        }
        else if (!res.status && res.error == 'No enough balance') {
          this.authService.alert('Ошибка', 'У вас нет активного баланса')
        }
        else if (!res.status && res.error == 'No enough balance') {
          this.authService.alert('Ошибка', res.error.toString());
        }
      });
    } else {
      await this.authService.alert('Ошибка', 'У вас нет активного баланса')
    }
  }
  updateDriverBalance() {
    this.socketService.updateDriverBalance().subscribe((res: any) => {
      if (res) {
        const data = JSON.parse(res);
        this.authService.currentUser.balance = data.balance;
        this.authService.currentUser.balance_off = data.balance_off;
        this.authService.currentUser.balance_in_proccess = data.balance_in_proccess;
      }
    })
  }
  checkShowButton() {
    this.authService.checkService(this.authService.currentUser.id).subscribe((res:any) => {
      if(res.status) {
        res.data?.length > 0 ? this.showTgButton = true :  this.showTgButton = false;
      }
    })
  }
  goToSupportAdmin() {
    this.iab.create('https://t.me/TIRGO_STOL_USLUG', '_system');
  }
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.getHistory();
      this.getPrice();
    }, 1000);
  }
}
