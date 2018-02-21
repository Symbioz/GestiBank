import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../typescripts/pro/alerts' 
@Component({
  selector: 'app-layout-agent',
  templateUrl: './layout-agent.component.html',
  styleUrls: ['./layout-agent.component.scss']
})
export class LayoutAgentComponent implements OnInit {

  constructor(private toast: ToastService) { }

  ngOnInit() {
    setTimeout(
    () => this.toast.info("It works!")
    );
  }

}

