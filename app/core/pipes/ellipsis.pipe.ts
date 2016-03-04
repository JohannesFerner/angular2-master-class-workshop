import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe {
    transform(val, args) {
        if (args[0] === -1) {
            return val;
        }

        if (val.length > args[0]) {
            return val.substring(0, args[0]) + '...';
        } else {
            return val;
        }
    }
}
