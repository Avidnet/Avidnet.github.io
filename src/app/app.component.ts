import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    renderer: Renderer2,
    translate: TranslateService,
    route: ActivatedRoute,
  ) {
    translate.setDefaultLang('en');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang === 'fa') {
        renderer.addClass(document.body, 'farsi');
        renderer.setAttribute(document.body.parentNode, 'dir', 'rtl');
        renderer.setAttribute(document.body.parentNode, 'lang', 'fa');
      } else {
        renderer.removeClass(document.body, 'farsi');
        renderer.setAttribute(document.body.parentNode, 'dir', 'ltr');
        renderer.setAttribute(document.body.parentNode, 'lang', 'en');
      }
    });

    route.paramMap.subscribe((params: ParamMap) => {
      const locale = params.get('locale');
      console.log(locale);
      if (locale && locale === 'fa') {
        translate.use('fa');
      } else {
        translate.use('en');
      }
    });
  }
}
