import { Component, Input, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/utils/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order!: OrderModel;
  onView! :(order: OrderModel) => void;
  onDelete! :(order: OrderModel) => void;
  draft : boolean = false;
  inProgress : boolean = false;
  ship : boolean = false;
  delivery : boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.getType();
  }

  getType() {
    switch (this.order.type) {
      case 'draft':
             return this.draft = true;
      case 'progress':
          return this.inProgress = true;
      case 'ship':
          return this.ship = true;
      case 'delivery':
          return this.delivery = true;
      
      default: 
      return 'lillo';
  }
  }

}
