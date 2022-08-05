import { Currency } from "./models";

type Currencies = Currency['currency'];

export class CurrencyFormat {

    FORMATS: Record<Currencies, Intl.NumberFormat> = {
    USD: new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }),
    EUR: new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }),
  };

    format(currency: Currency): string {
    return this.FORMATS[currency.currency].format(currency.amount);
  }
}


// const format = (currency: Currency): string =>
//   FORMATS[currency.currency].format(currency.amount);

