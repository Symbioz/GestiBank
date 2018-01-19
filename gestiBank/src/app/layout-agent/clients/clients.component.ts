import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {InfoClient} from './infoClients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {


clients=[  new InfoClient(1,"sdjkhqdklfugh","Guilaume","blabla@gmail.com","1rue machin Lille","0606060606",0,"celibataire"),
      new InfoClient(2, "Le Gaulois","Provençal","Kaamelott@gmail","1 rue C'est pas faux 59000 Sloubi324","060000000",0,"On en a gros")];


 constructor(){}

  ngOnInit() {
  }

}
