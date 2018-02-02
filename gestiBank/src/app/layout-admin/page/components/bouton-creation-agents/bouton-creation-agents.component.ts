import { Component,OnInit,Input,Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Agent} from '../../../../../models/agent';


@Component({
  selector: 'app-bouton-creation-agents',
  templateUrl: './bouton-creation-agents.component.html',
  styleUrls: ['./bouton-creation-agents.component.scss']
})
export class BoutonCreationAgentsComponent implements OnInit  {

      
    agent: Agent;

    agentform: FormGroup;
    
    closeResult: string;
    constructor(private modalService: NgbModal) { }
    
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

   @Input() agentModal:Agent; 


    formCreationAgent :FormGroup;

    

    addUser(){
      alert ('test');
       
    }

    onSubmit(addMountForm: NgForm){
      alert ('test');
      console.log("adding form values ");
      console.log(addMountForm.value);
    }

    ngOnInit() {

      

      this.agentform = new FormGroup({
          matricule: new FormControl ('', Validators.required),
      } );
  }


}
