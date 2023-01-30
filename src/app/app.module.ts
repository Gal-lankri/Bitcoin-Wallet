import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { SignupComponent } from './views/signup/signup.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { MobileMenuComponent } from './cmps/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactIndexComponent,
    AppHeaderComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    ContactEditComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
    StatisticsComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
