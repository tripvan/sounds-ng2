import { Directive, HostListener, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
const distanceFromBottomThreshold: number = 500;
const minDistanceFromBottom: number = 120;

@Directive({
    selector: '[tcInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {
    private scrollStream = new Subject();
    private lowestDistanceFromBottom: number = distanceFromBottomThreshold;
    private scrollObservable = this.scrollStream
                                    .pipe(
                                      debounceTime(200)
                                    )
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
    @HostListener('window:scroll', ['$event'])
    onScrolled(event) {
        this.scrollStream.next({});
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}