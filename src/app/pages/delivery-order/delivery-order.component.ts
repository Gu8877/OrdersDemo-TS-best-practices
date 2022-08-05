import { Component, Input, OnInit } from '@angular/core';
import { CurrencyFormat } from 'src/app/utils/currency';
import { DateFormat } from 'src/app/utils/date';
import { DeliveryOrderModel } from 'src/app/utils/models';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.scss'],
  providers: [ CurrencyFormat, DateFormat ]

})
export class DeliveryOrderComponent implements OnInit {

  @Input() order!: DeliveryOrderModel;
  @Input() onView! :(order: DeliveryOrderModel) => void;
  
  constructor(
    public currency : CurrencyFormat,
    public date : DateFormat,
  ) { }

  ngOnInit(): void {
  }

}
