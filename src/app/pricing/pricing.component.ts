import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.less']
})
export class PricingComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  constructor() { }

  ngOnInit() {
  }

}
