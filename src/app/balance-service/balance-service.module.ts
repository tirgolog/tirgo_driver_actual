import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import {TranslateModule} from "@ngx-translate/core";
import { HeaderPageModule } from 'src/app/header/header.module';
import { BalanceServicePage } from './balance-service.page';
import { BalanceServicePageRoutingModule } from './balance-service-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderPageModule,
        TranslateModule,
        BalanceServicePageRoutingModule
    ],
  declarations: [BalanceServicePage]
})
export class BalanceServicePageModule {}
