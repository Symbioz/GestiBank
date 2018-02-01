import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators} from"@angular/forms";
import { UserService} from "../../service/user.service";
import { User} from "../../modele/user";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  
   id:number;
   user: User;

   userForm: FormGroup;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
  	          private userService: UserService) { }

  ngOnInit() {

  	this.userForm = new FormGroup({
  		username: new FormControl ('', Validators.required),
  		address:  new FormControl ('', Validators.required),
  		email: new FormControl('', Validators.required)
  			//Validators.pattern("[^ @]*@[^ @]*")])
  	}

  		)
  }

  ngOnDestroy(): void{
  }

  onSubmit(){
      
    if (this.userForm.valid){
        this.id = Math.random();
         
      let user: User = new User(this.id,
          this.userForm.controls['username'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value);

          this.userService.saveUser(user).subscribe();
    }

    this.userForm.reset();
    this.router.navigate(['/user']);
  }

  redirectUserPage(){
    this.router.navigate(['/user']);
  }

}
