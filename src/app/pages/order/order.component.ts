import { Component, Input, OnInit } from '@angular/core';
import { DeliveryOrderModel, DraftOrderModel, InProgressOrderModel, OrderModel, ShipOrderModel } from 'src/app/utils/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order! : OrderModel;
  draftOrder! : DraftOrderModel;
  inProgressOrder! : InProgressOrderModel;
  shipOrder! : ShipOrderModel;
  deliveryOrder! : DeliveryOrderModel;
  @Input() onView! : (order: OrderModel) => void;
  @Input() onDelete! : (order: OrderModel) => void;
  draft : boolean = false;
  inProgress : boolean = false;
  ship : boolean = false;
  delivery : boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.getType();
  }

  getType() {
    debugger;
    switch (this.order.type) {
      case 'draft':
            this.draftOrder = this.order;
            return this.draft = true;
      case 'progress':
            this.inProgressOrder = this.order;
            return this.inProgress = true;
      case 'ship':
          this.shipOrder = this.order;
          return this.ship = true;
      case 'delivery':
          this.deliveryOrder = this.order;
          return this.delivery = true;
  }
  }

}
