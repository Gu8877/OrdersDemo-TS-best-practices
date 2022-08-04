import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderModel } from '../utils/models';
import * as responseUtils from '../utils/response';
import { OrderArraySchema } from '../utils/schemas';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  async getOrders(): Promise<OrderModel[]> {
    const response = await fetch('../../assets/orders.json');
    const data: unknown = await response.json();
    const orders = responseUtils.parseSafe(data, OrderArraySchema);
    if (orders.type === 'error') {
      throw orders.error;
    }
    return orders.value;
    // responseUtils.validate(data, OrderArraySchema);
    // return responseUtils.parse(data, OrderArraySchema);
  }
  
}
