import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-releves',
    templateUrl: './releves.component.html',
    styleUrls: ['./releves.component.scss'],
    animations: [routerTransition()]
})
export class RelevesComponent implements OnInit {

  	constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'fr']);
        this.translate.setDefaultLang('fr');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
    }

  	ngOnInit() {
  	}

}
