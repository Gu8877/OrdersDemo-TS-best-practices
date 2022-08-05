import { Component, Input, OnInit } from '@angular/core';
import { CurrencyFormat } from 'src/app/utils/currency';
import { DateFormat } from 'src/app/utils/date';
import { ShipOrderModel } from 'src/app/utils/models';

@Component({
  selector: 'app-ship-order',
  templateUrl: './ship-order.component.html',
  styleUrls: ['./ship-order.component.scss'],
  providers: [ CurrencyFormat, DateFormat ]
})
export class ShipOrderComponent implements OnInit {

  @Input() order!: ShipOrderModel;
  @Input() onView! :(order: ShipOrderModel) => void;

  constructor(
    public currency : CurrencyFormat,
    public date : DateFormat,
  ) { }

  ngOnInit(): void {
  }

}
