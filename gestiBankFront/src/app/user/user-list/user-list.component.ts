import { Component, OnInit } from '@angular/core';
import { User } from '../../modele/user';
import { UserService} from '../../service/user.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  private users : User[];
  constructor (private router: Router, private userService: UserService){}

 
  ngOnInit() {
  	this.getAllUsers();
  }

  getAllUsers(){
  		this.userService.findAll().subscribe(
  			 users => {
  			 	this.users = users;
  			 },
  			 err => {
  			 	console.log(err);
  			 }

  		);
  }

  redirectNewUserPage(){
       this.router.navigate(['user/create']);
  }

  editUserPage(user:User){
    if (user){
      this.router.navigate(['/user/edit', user.id]);
    }
  }

  deleteUser(user: User){
    console.log('delete User');
  }

}
