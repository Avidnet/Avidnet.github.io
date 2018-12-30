import { Component, OnInit, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Member {
  name: string;
  nameFa?: string;
  roles: string[];
  bio: string;
  bioFa?: string;
  avatar: string;
  url: string;
  socials: { [key: string]: string; };
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
    nameFa: 'علی پرتو',
    roles: ['CF', 'HE'],
    bio: 'The hardware man',
    bioFa: 'مرد سخت‌افزار',
    avatar: 'https://github.com/aliparto.png',
    url: '',
    socials: {
      github: 'https://github.com/aliparto'
    }
  }, {
    name: 'Taha Mehrabbeygi',
    nameFa: 'طه محراب بیگی',
    roles: ['SE'],
    bio: 'The man of everything',
    bioFa: 'مرد همه‌کاره',
    avatar: 'https://github.com/mtaha1996.png',
    url: '',
    socials: {
      github: 'https://github.com/mtaha1996'
    }
  }, /*{
    name: 'Parham Alvani',
    nameFa: 'پرهام الوانی',
    roles: ['CF', 'SE'],
    bio: 'The software man',
    bioFa: 'مرد نرم‌افزار',
    avatar: 'https://github.com/1995parham.png',
    url: 'https://1995parham.github.io/',
    socials: {
      github: 'https://github.com/1995parham',
    }
  }*/];

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit() {
  }

}
