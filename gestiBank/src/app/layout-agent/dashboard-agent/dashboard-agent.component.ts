import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',
  styleUrls: ['./dashboard-agent.component.scss']
})
export class DashboardAgentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
=======
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../../router.animations';

@Component({
  	selector: 'app-dashboard-agent',
  	templateUrl: './dashboard-agent.component.html',
  	styleUrls: ['./dashboard-agent.component.scss'],
    animations: [routerTransition()]
})


export class DashboardAgentComponent implements OnInit{
	 public sliders: Array<any> = [];
 		
	pushRightClass: string = 'push-right';

     ngOnInit() {
    // ...
      }

  	constructor(){
          this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
    }
>>>>>>> master

}
