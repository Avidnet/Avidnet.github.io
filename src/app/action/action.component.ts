import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.less']
})
export class ActionComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content has-bg';

  constructor() { }

  ngOnInit() {
  }

}
