import { Injectable } from "@angular/core";

@Injectable()
export class YearsService {

    getYears() {
        let years = [];
        let currentYear: number = new Date().getFullYear();
        for (let year = currentYear; year > currentYear - 7; year--) {
            years.push(year);
        }
        return years;
    }

    getYearsRange() {
        let years = [];
        let currentYear: number = new Date().getFullYear();
        currentYear = currentYear + 10;
        while (currentYear > 1940) {
            let decade = Math.floor(currentYear / 10) * 10;
            let fromDecade = decade - 10;
            years.push(fromDecade + "-" + decade);
            currentYear = currentYear - 10;
        }
        return years;
    }
}