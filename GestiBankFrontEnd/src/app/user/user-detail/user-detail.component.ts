import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../modele/user";
import { UserService } from "../../service/user.service";
import { ActivatedRoute, Router } from  '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy {

	id: number;
	user: User;
	userForm: FormGroup;
	private sub: any;

  	constructor(private route: ActivatedRoute,
  				private router: Router,
  				private userService: UserService) { }

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
	  			this.userService.saveUser(user).subscribe(
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
}
