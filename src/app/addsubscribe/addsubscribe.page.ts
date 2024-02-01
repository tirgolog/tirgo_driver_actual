import { Component, OnInit, ViewChild } from '@angular/core';
import { log } from 'console';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsubscribe',
  templateUrl: './addsubscribe.page.html',
  styleUrls: ['./addsubscribe.page.scss']
})
export class AddSubscribePage implements OnInit {
  loading: boolean = false;
  priceCards = [];
  selectedPrice: any;
  constructor(private authService: AuthenticationService,private router: Router) { }
  ngOnInit(): void {
    this.getPrice();
  }
  getPrice() {
    this.authService.getSubscribtionsPrice().subscribe((res: any) => {
      if (res.status) {
        this.priceCards = res.data;
        this.selectedPrice = this.priceCards[0];
        this.priceCards[0].selected = true;
      }
    })
  }
  selectPrice(selectedPriceCard: any) {
    this.priceCards.forEach(priceCard => priceCard.selected = false);
    selectedPriceCard.selected = true;
    this.selectedPrice = selectedPriceCard
  }
  addSubscription() {
    this.loading = true;
    let data = {
      phone: this.authService.currentUser.phone,
      user_id: this.authService.currentUser.id,
      subscription_id: this.selectedPrice.id,
    }
    this.authService.addSubscription(data).subscribe((res: any) => {
      if (res.status) {
        this.loading = false;
        this.authService.alert('Подписка успешно оформлена !', '')
      }
      else {
        this.loading = false;
        this.authService.alert('Error', '');
      };
    },error => {
      if(error.error.error == 'Недостаточно средств на балансе') {
        this.loading = false;
        this.authService.alert('Недостаточно средств на балансе', 'Пополните пожалуйста баланс ');
        this.router.navigate(['/balance']);
      }else {
        this.loading = false;
        this.authService.alert('Error', '');
      }
    })
  }
  getPriceText(value: number): string {
    if (value === 7) {
      return 'Цена: 80 000 сум';
    } else if (value === 15) {
      return 'Цена: 180 000 сум';
    } else if (value === 47) {
      return 'Цена: 570 000 сум';
    } else {
      return 'Unknown Price';
    }
  }
}