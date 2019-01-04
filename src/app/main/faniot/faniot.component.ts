import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-faniot',
  templateUrl: './faniot.component.html',
  styleUrls: ['./faniot.component.less']
})
export class FaniotComponent implements OnInit {

  @HostBinding('style.height.px') elementWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.elementWidth = event.target.innerWidth;
  }

  constructor() { }

  ngOnInit() {
  }
}
