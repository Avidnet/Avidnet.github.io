import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.less']
})
export class MilestoneComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content bg-black-darker has-bg';

  constructor() { }

  ngOnInit() {
  }

}
