import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// import '@angular/router-deprecated';

// RxJS
import { BehaviorSubject, Observable, Subject, from, of, timer } from 'rxjs';
import { map, concatAll, concatMap, catchError, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

require('bootstrap/less/bootstrap.less');
import 'web-animations-js/web-animations.min';
