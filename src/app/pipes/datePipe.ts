import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "Date"
})
export class DateFormat implements PipeTransform {
    transform(value: Date) {
        return "dd/MM/yyyy";
    }
}