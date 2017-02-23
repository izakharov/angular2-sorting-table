import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'mpSearchFilter'
})
@Injectable()
export class MpSearchFilterPipe implements PipeTransform {
    datePipe: DatePipe = new DatePipe('medium');
    transform(items: any[], args: any[]): any {
        const searchKey = args[0] && args[0].toLowerCase();
        if (!searchKey) {
            return items;
        }
        
        const dataFields = args[1];

        return items.filter(item => {
            let anyMatches = false;
            for (let key in item) {
                if (item.hasOwnProperty(key)) {
                    let value;
                    if (dataFields.indexOf(key) !== -1) {
                        value = this.datePipe.transform(item[key], 'MMM d, y h:mm:ss a').toLowerCase();
                    } else {
                        value = item[key].toString().toLowerCase();
                    }
                    if (value.indexOf(searchKey) !== -1) {
                        anyMatches = true;
                    }
                }
            }

            return anyMatches;
        });
    }
}
