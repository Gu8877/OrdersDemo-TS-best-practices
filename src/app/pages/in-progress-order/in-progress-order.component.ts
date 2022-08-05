import { Component, Input, OnInit } from '@angular/core';
import { CurrencyFormat } from 'src/app/utils/currency';
import { DateFormat } from 'src/app/utils/date';
import { InProgressOrderModel, OrderModel } from 'src/app/utils/models';

@Component({
  selector: 'app-in-progress-order',
  templateUrl: './in-progress-order.component.html',
  styleUrls: ['./in-progress-order.component.scss'],
  providers: [ CurrencyFormat, DateFormat ]
})
export class InProgressOrderComponent implements OnInit {

  @Input() order!: InProgressOrderModel;
  @Input() onView! :(order: InProgressOrderModel) => void;

  constructor(
    public currency : CurrencyFormat,
    public date : DateFormat,
  ) { }

  ngOnInit(): void {
  }

}
