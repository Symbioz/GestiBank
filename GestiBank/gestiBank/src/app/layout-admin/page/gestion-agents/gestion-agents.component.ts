import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gestion-agents',
  templateUrl: './gestion-agents.component.html',
  styleUrls: ['./gestion-agents.component.scss']
})
export class GestionAgentsComponent implements OnInit {

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
