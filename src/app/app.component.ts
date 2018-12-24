import { Component, Renderer2 } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(renderer: Renderer2, translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.use('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fa/) ? browserLang : 'en');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'fa') {
        renderer.addClass(document.body, 'farsi');
      } else {
        renderer.removeClass(document.body, 'farsi');
      }
    });
  }
}
