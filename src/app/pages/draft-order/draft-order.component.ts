import { Component, Input, OnInit } from '@angular/core';
import { CurrencyFormat } from 'src/app/utils/currency';
import { DateFormat } from 'src/app/utils/date';
import { DraftOrderModel } from 'src/app/utils/models';
@Component({
  selector: 'app-draft-order',
  templateUrl: './draft-order.component.html',
  styleUrls: ['./draft-order.component.scss'],
  providers: [ CurrencyFormat, DateFormat ]
})
export class DraftOrderComponent implements OnInit {

  @Input() order!: DraftOrderModel;
  @Input() onView! :(order: DraftOrderModel) => void;
  @Input() onDelete! :(order: DraftOrderModel) => void;

  constructor(
    public currency : CurrencyFormat,
    public date : DateFormat,
    ) { }

  ngOnInit(): void {
  }

}
