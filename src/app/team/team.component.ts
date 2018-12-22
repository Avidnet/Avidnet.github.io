import { Component, OnInit, HostBinding } from '@angular/core';

interface Member {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  url: string;
  socials: { [key:string]:string; };
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  @HostBinding('attr.class') elementClasses = 'content';

  public members: Member[] = [{
    name: 'Ali Parto',
    role: 'Co-Founder',
    bio: '',
    avatar: 'https://github.com/aliparto.png',
    url: '',
    socials: {
      github: 'https://github.com/aliparto'
    }
  }, {
    name: 'Taha Mehrabbeygi',
    role: 'Software Engineer',
    bio: '',
    avatar: 'https://github.com/mtaha1996.png',
    url: '',
    socials: {
      github: 'https://github.com/mtaha1996'
    }
  }, {
    name: 'Parham Alvani',
    role: 'Software Engineer',
    bio: '',
    avatar: 'https://github.com/1995parham.png',
    url: 'https://1995parham.github.io/',
    socials: {
      github: 'https://github.com/1995parham'
    }
  }];

  constructor() { }

  ngOnInit() {
  }

}
