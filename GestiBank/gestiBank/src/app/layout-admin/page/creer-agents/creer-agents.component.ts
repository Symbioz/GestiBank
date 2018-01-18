import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
 	
@Component({
  selector: 'app-creer-agents',
  templateUrl: './creer-agents.component.html',
  styleUrls: ['./creer-agents.component.scss']
})
export class CreerAgentsComponent implements OnInit {

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
