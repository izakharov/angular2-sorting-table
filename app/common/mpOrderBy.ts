import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mpOrderBy' })
export class MpOrderByPipe implements PipeTransform {
    orderBy;
    transform(input: any, args): any {
        let values = [...input],
            desc = args.desc;

        this.orderBy = args.columnName;

        return !desc ? values.sort(this.sortBy) : values.sort(this.sortBy).reverse();
    }

    private sortBy = (a, b) => {
        if ((isNaN(parseFloat(a[this.orderBy])) || !isFinite(a[this.orderBy])) ||
            (isNaN(parseFloat(b[this.orderBy])) || !isFinite(b[this.orderBy]))) {

            if (a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()) {
                return -1;
            }
            if (a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()) {
                return 1;
            }
        } else {
            if (parseFloat(a[this.orderBy]) < parseFloat(b[this.orderBy])) {
                return -1;
            }
            if (parseFloat(a[this.orderBy]) > parseFloat(b[this.orderBy])) {
                return 1;
            }
        }

        return 0;
    }

}
