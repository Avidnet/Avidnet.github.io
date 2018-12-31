import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-faniot',
  templateUrl: './faniot.component.html',
  styleUrls: ['./faniot.component.less']
})
export class FaniotComponent implements OnInit {

  public innerWidth: number;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

}
