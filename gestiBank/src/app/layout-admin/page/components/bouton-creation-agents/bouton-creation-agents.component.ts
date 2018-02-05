import { Component,OnInit,Input,OnDestroy } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgForm, FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

import { Agent} from '../../../../../models/agent';
import { AgentService} from '../../../../../services/agent.service';

import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-bouton-creation-agents',
  templateUrl: './bouton-creation-agents.component.html',
  styleUrls: ['./bouton-creation-agents.component.scss'],
  providers: [AgentService],
})
export class BoutonCreationAgentsComponent implements OnInit  {

      
    agent: Agent;
    agentForm: FormGroup;
    closeResult: string;

constructor(  private route: ActivatedRoute,
              private router: Router,
              private agentService: AgentService,
              private modalService: NgbModal) { }



    
    //Pour la modal 
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

    

    ngOnInit() {

      // validation des champs
      this.agentForm = new FormGroup({
          matricule: new FormControl ('', Validators.required),
          nom: new FormControl ('', Validators.required),
          prenom: new FormControl ('', Validators.required),
          voie: new FormControl ('', Validators.required),
          codePostal: new FormControl ('', Validators.required),
          ville: new FormControl ('', Validators.required),
          telephone: new FormControl ('', Validators.required),
          motDePasse: new FormControl ('', Validators.required),
          dateDebutContrat: new FormControl ('', Validators.required)

      } );
  }

  ngOnDestroy(): void{
  }

  onSubmit(addAgentForm: NgForm){
    if (this.agentForm.valid){
        
        
      let agent: Agent = new Agent(
          this.agentForm.controls['matricule'].value,
          this.agentForm.controls['nom'].value,
          this.agentForm.controls['prenom'].value,
          this.agentForm.controls['voie'].value,
          this.agentForm.controls['telephone'].value,
          this.agentForm.controls['motDePasse'].value,
          this.agentForm.controls['dateDebutContrat'].value
          );
      console.log(addAgentForm.value);

          this.agentService.saveAgent(agent).subscribe();
    }

    this.agentForm.reset();
    this.router.navigate(['/admin/gestionAgents']);
  }



}
