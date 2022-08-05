import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/app/services/order.service';
import { ModalComponent } from 'src/app/utils/modal/modal.component';
import { OrderModel } from 'src/app/utils/models';
import * as orderUtils from '../../utils/order'

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders : OrderModel[] = [];

  constructor(
   private orderService: OrderService,
   private modalService: NgbModal
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
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.title = 'Error';
    modalRef.componentInstance.content = `error: ${err}`;

  }

  readonly onView = (order: OrderModel): void => {
    debugger;
    if (orderUtils.isOrderWithView(order)) {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = 'View Order';
      modalRef.componentInstance.content = `Order with id: ${order.id} in viewing`;
        return;
    }
    if (orderUtils.isOrderWithEdit(order)) {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.title = 'Edit Order';
      modalRef.componentInstance.content = `Order with id: ${order.id} in editing`;
    }
}

  readonly onDelete = (order: OrderModel) => {
    if (orderUtils.isOrderWithDelete(order)) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = 'Delete Order';
        modalRef.componentInstance.content = `Order with id: ${order.id} in deleting`;
    }
}

}
