import { Component, OnInit,Input } from '@angular/core';
import {InfoClient} from '../infoClients';

@Component({
  selector: 'app-tableau-clients',
  templateUrl: './tableau-clients.component.html',
  styleUrls: ['./tableau-clients.component.scss']
})
export class TableauClientsComponent implements OnInit {

   @Input() maListe:InfoClient[];
   



  constructor() { }

  ngOnInit() {
  }

}
