import { Component, OnInit } from '@angular/core';

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
