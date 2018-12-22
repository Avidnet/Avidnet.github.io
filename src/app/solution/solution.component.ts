import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.less']
})
export class SolutionComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  constructor() { }

  ngOnInit() {
  }

}
