import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Router } from '@angular/router';
import { log } from 'console';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss'],
})
export class ServicesListPage implements OnInit {
  loading: boolean = false;
  services: any[];
  selectedPrice: any;
  alpha_balance:number = 0
  constructor(
    private authService: AuthenticationService,
    private iab: InAppBrowser,
    private router: Router,
    private navCtrl: NavController
  ) { }
  ngOnInit(): void {
    this.getServiceList();
    this.getAlphaBalance();
  }
  getServiceList() {
    this.authService.getServicesList().subscribe((res: any) => {
      if (res.status) {
        this.services = res.data;
        this.selectedPrice = this.services[0];
        this.services[0].selected = true;
      }
    })
  }
  getAlphaBalance() {
    this.authService.getAlhpaBalance(this.authService.currentUser.id).subscribe((res:any) => {
      if(res.status) {
        this.alpha_balance = res.total_balance;
      }
    })
  }
  selectService(selectedPriceCard) {
    this.services.forEach(priceCard => priceCard.selected = false);
    selectedPriceCard.selected = true;
    this.selectedPrice = selectedPriceCard
  }
  submit() {
    this.loading = true;
    if(this.selectedPrice.price_uzs == 0) {
      this.loading = false;
      let data = {
        user_id: this.authService.currentUser.id,
        services_id: this.selectedPrice.id,
        price_uzs: this.selectedPrice.price_uzs,
        price_kzs: this.selectedPrice.price_kzs,
        rate: this.selectedPrice.rate
      }
      this.authService.freeService(data).subscribe((res:any) => {
        if(res.status) {
          this.loading = false;
          this.authService.alert('Подписка успешно оформлена !', '');
          this.router.navigate(['/tabs/home'])
        }
      }, error => {
        this.loading = false;
        this.authService.alert('Ошибка', error.error.error);
      })
    }
    else {
      this.loading = false;
      let base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.authService.currentUser.id + ";a=" + this.selectedPrice.price_uzs + "00");
      this.iab.create('https://checkout.paycom.uz/' + base64, '_system');
    }
  }
  back(){
    this.navCtrl.back()
  }
}