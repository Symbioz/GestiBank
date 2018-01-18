import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-editer-agents',
  templateUrl: './editer-agents.component.html',
  styleUrls: ['./editer-agents.component.scss']
})
export class EditerAgentsComponent implements OnInit {

  constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('fr');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    }

  ngOnInit() {
  }

  changeLang(language: string) {
        this.translate.use(language);
    }

}
