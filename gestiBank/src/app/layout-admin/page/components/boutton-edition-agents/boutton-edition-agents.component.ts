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
  selector: 'app-boutton-edition-agents',
  templateUrl: './boutton-edition-agents.component.html',
  styleUrls: ['./boutton-edition-agents.component.scss'],
  providers: [AgentService],
})
export class BouttonEditionAgentsComponent implements OnInit {

    agent: Agent;
    id: number;
    agentForm: FormGroup;
    closeResult: string;
    
    private sub: any;
   @Input() agentModal:Agent;

    constructor(  private route: ActivatedRoute,
              private router: Router,
              private agentService: AgentService,
              private modalService: NgbModal) { }


    
    
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

  ngOnInit() {
     // on initialise l'id de l agent
     this.id=this.agentModal.id;
    
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

      //si le param id est renseigné il faut chercher le Utilisateur
    if (this.id) { //edit form
      this.agentService.getAgentById(this.id).subscribe(
        agent => {
          console.log(agent);
          this.id;
          this.agentForm.patchValue({
          matricule: agent.matricule,
          identifiant: agent.identifiant,
          nom: agent.nom,
          prenom: agent.prenom,
          email: agent.email,
          numTel : agent.numTel,
          adresse: agent.adresse,
          motDePasse: agent.mdp,
          dateDebutContrat: agent.dateDebutContrat

          });
        },
        error => {
          console.log(error);
        }
      );
    }
}
 
  


  onSubmit(updateagentForm: NgForm){
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
          );
           console.log(updateagentForm.value);
           console.log(agent);
          this.agentService.modifierAgent(agent).subscribe(
               agent => {
                this.agent = agent;
                  console.log(agent);
                  //  this.refresh();
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
