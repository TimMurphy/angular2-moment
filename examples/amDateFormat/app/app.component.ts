import {Component} from 'angular2/core';
import {DateFormatPipe} from 'angular2-moment';

@Component({
    selector: 'app',
    pipes: [DateFormatPipe],
    template: `
      Last updated: <b>{{myDate | amDateFormat:'LL'}}</b>
    `
})
export class AppComponent {
    myDate: Date;

    constructor() {
        this.myDate = new Date();
    }
}