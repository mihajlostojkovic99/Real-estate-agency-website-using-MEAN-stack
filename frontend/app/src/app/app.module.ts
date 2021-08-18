import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { WorkerComponent } from './worker/worker.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminRegistracijeComponent } from './admin-registracije/admin-registracije.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { LotComponent } from './lot/lot.component';
import { UserAddLotComponent } from './user-add-lot/user-add-lot.component';
import { UserMyLotsComponent } from './user-my-lots/user-my-lots.component';
import { UserRequestsComponent } from './user-requests/user-requests.component';
import { WorkerLotsComponent } from './worker-lots/worker-lots.component';
import { WorkerAllLotsComponent } from './worker-all-lots/worker-all-lots.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PercentsComponent } from './percents/percents.component';
import { ImagesComponent } from './images/images.component';
import { PromotedLotsComponent } from './promoted-lots/promoted-lots.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    WorkerComponent,
    AdminRegistracijeComponent,
    AdminUsersComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LotComponent,
    UserAddLotComponent,
    UserMyLotsComponent,
    UserRequestsComponent,
    WorkerLotsComponent,
    WorkerAllLotsComponent,
    ContractsComponent,
    PercentsComponent,
    ImagesComponent,
    PromotedLotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
