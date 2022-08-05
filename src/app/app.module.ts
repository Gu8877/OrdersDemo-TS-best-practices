import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './pages/order/order.component';
import { DeliveryOrderComponent } from './pages/delivery-order/delivery-order.component';
import { ShipOrderComponent } from './pages/ship-order/ship-order.component';
import { InProgressOrderComponent } from './pages/in-progress-order/in-progress-order.component';
import { DraftOrderComponent } from './pages/draft-order/draft-order.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './utils/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderComponent,
    DeliveryOrderComponent,
    ShipOrderComponent,
    InProgressOrderComponent,
    DraftOrderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
