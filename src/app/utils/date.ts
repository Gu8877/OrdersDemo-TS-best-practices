import { Currency } from "./models";

const intDateTime = new Intl.DateTimeFormat();

export class DateFormat {
    
    format(date: Date): string {
        return intDateTime.format(date);
    }
}

