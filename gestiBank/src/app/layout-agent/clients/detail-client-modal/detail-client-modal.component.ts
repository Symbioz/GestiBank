import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../../models';
import { UserService } from '../../../../service/userService';
import { ActivatedRoute, Router } from  '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-detail-client-modal',
  templateUrl: './detail-client-modal.component.html',
  styleUrls: ['./detail-client-modal.component.scss'],
  providers: [UserService]
})
export class DetailClientModalComponent implements OnInit, OnDestroy {

	id: number;
	user: User;
	userForm: FormGroup;
	private sub: any;
  closeResult: string;
  @Input() clientModal:User;


  constructor(private route: ActivatedRoute,
		private router: Router,
		private userService: UserService,
    private modalService: NgbModal) { }

	ngOnInit() { 
		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];
		});

		this.userForm = new FormGroup({
			username: new FormControl('', Validators.required),
			address: new FormControl('', Validators.required),
			email: new FormControl('', [
				Validators.required, 
				Validators.pattern("[^ @]*@[^ @]*")
			])

		});

		//si le param id est renseigné il faut cherche le User
		if (this.id) { //edit form
			this.userService.findById(this.id).subscribe(
				user => {
					this.id = user.id;
					this.userForm.patchValue({
						username: user.username,
						address: user.address,
						email: user.email,
					});
				},
				error => {
					console.log(error);
				}
			);
		}
	}

	ngOnDestroy(): void { //suppression de l'écouteur lors du déchargement du composant
		this.sub.unsubscribe();
	}

	onSubmit() {
		if (this.userForm.valid) {
			if (this.id) {
				let user: User = new User(this.id, 
  			this.userForm.controls['username'].value,
  			this.userForm.controls['address'].value,
  			this.userForm.controls['email'].value);
  			this.userService.updateUser(user).subscribe(
				user => {
					this.user = user;
					console.log("SAVE USER OK");
					this.refresh();

				},
				err => {
					console.log(err);
				}
  			);
			} else {
				let user: User = new User(0, 
  			this.userForm.controls['username'].value,
  			this.userForm.controls['address'].value,
  			this.userForm.controls['email'].value);
  			this.userService.saveUser(user).subscribe(
				user => {
					this.user = user;
					console.log("ADD USER OK");
					this.refresh();

				},
				err => {
					console.log(err);
				}
  			);
			}
		}
		this.userForm.reset();
		//this.router.navigate(['/user'])
	}

	redirectUserPage() {
		this.router.navigate(['/user']);
	}
	refresh() {
		this.userService.findAll().subscribe(
				users => {
					console.log ("GET ALL USER OK ");
					this.redirectUserPage();
				}
			);
	}
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
}
