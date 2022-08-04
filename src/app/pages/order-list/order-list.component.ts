import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderModel } from 'src/app/utils/models';
import { setErrorMap } from 'zod';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders : OrderModel[] = [];

  constructor(
   private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getOrders()
    .then((orders) => {
      this.setOrders(orders);
    })
    .catch((err: Error) => {
      this.setError(err);
    })
  }

  setOrders(orders: OrderModel[]) {
    this.orders = orders;
  }

  setError(err: Error) {

  }

}
