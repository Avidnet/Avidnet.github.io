import { Component, OnInit, HostBinding } from '@angular/core';

interface Work {
  title: string;
  description: string;
  href: string;
  image: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  public works: Work[] = [
    {
      href: 'http://www.jovainco.com/',
      title: 'Jovain Industrial &amp; Agricultural Co.',
      description: '',
      image: 'assets/img/works/w1.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
