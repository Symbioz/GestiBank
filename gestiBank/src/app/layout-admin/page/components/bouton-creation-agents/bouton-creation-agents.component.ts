import { Component,OnInit,Input,OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpModule } from '@angular/http';

import { Agent} from '../../../../../models/agent';
import { AgentService} from '../../../../../services/agent.service';




@Component({
  selector: 'app-bouton-creation-agents',
  templateUrl: './bouton-creation-agents.component.html',
  styleUrls: ['./bouton-creation-agents.component.scss'],
  providers: [AgentService],
})
export class BoutonCreationAgentsComponent implements OnInit  {

      
    agent: Agent;
    id:number;
    agentForm: FormGroup;
    closeResult: string;
    
    private sub: any;
    
constructor(  private route: ActivatedRoute,
              private router: Router,
              private agentService: AgentService,
              private modalService: NgbModal) { }

    //Pour la modal 
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            this.refresh();
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            this.refresh();
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
   

    ngOnInit() {

      // validation des champs
      this.agentForm = new FormGroup({
          matricule: new FormControl ('', Validators.required),
          identifiant: new FormControl('', Validators.required),
          nom: new FormControl ('', Validators.required),
          prenom: new FormControl ('', Validators.required),
          email: new FormControl('', [
                            Validators.required, 
                            Validators.pattern("[^ @]*@[^ @]*")
          ]),
          numTel : new FormControl ('', Validators.required),
          adresse: new FormControl ('', Validators.required),
          motDePasse: new FormControl ('', Validators.required),
          dateDebutContrat: new FormControl ('', Validators.required)

      } );
  }

  //ngOnDestroy(): void{
  //}

  onSubmit(addAgentForm: NgForm){
    console.log(this.agentForm.valid);
    if (this.agentForm.valid){
      let agent: Agent = new Agent(
          0,
          this.agentForm.controls['nom'].value,
          this.agentForm.controls['prenom'].value,
          this.agentForm.controls['motDePasse'].value,
          this.agentForm.controls['email'].value,
          this.agentForm.controls['adresse'].value,
          this.agentForm.controls['identifiant'].value,
          this.agentForm.controls['numTel'].value,
          this.agentForm.controls['matricule'].value,
          this.agentForm.controls['dateDebutContrat'].value,
          null

          );
           console.log(this.agentForm.controls['dateDebutContrat'].value);
           console.log(addAgentForm.value);
           console.log(agent);
          this.agentService.creerAgent(agent).subscribe(
               agent => {
                this.agent = agent;
                  console.log(agent);
                  
                         },
                err => {
                  console.log(err);
              }
           );
    }

   //this.agentForm.reset();
   this.router.navigate(['/admin/gestionAgents']);
  }

  refresh() {
    
    window.location.reload();
  }

}
