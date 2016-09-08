import { Directive, HostListener, EventEmitter, Output, OnInit, OnDestroy } from "@angular/core";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
const distanceFromBottomThreshold: number = 500;
const minDistanceFromBottom: number = 120;

@Directive({
    selector: "[infinite-scroll]",
})
export class InfiniteScrollComponent implements OnInit, OnDestroy {
    private scrollStream = new Subject();
    private lowestDistanceFromBottom: number = distanceFromBottomThreshold;
    private scrollObservable = this.scrollStream
        .debounceTime(200)
        .subscribe(() => {
            let distanceFromBottom = Math.max(document.body.offsetHeight - (window.pageYOffset + window.innerHeight), 0);
            if (distanceFromBottom >= distanceFromBottomThreshold) {
                this.lowestDistanceFromBottom = distanceFromBottom;
                return;
            }
            if (distanceFromBottom <= this.lowestDistanceFromBottom) {
                this.lowestDistanceFromBottom = Math.max(distanceFromBottom, minDistanceFromBottom);
                this.scroll.emit({});
            }
        });
    @Output() scroll = new EventEmitter();
    @HostListener("window:scroll", ["$event"])
    onScrolled(event) {
        this.scrollStream.next({});
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}