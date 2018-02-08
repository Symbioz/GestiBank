import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models';
import { UserService } from '../../../../service/userService';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss'],
  providers: [UserService]
})
export class ListeClientsComponent implements OnInit {

	private users: User[];

  	constructor(private router: Router, private userService: UserService) { }

  	ngOnInit() { //when component loading get all users and set the users[]
  		this.getAllUsers();
  	}

	getAllUsers() {
		this.userService.findAll().subscribe(
			users => {
				this.users = users;
			},
			err => {
				console.log(err);
			}
		);
	}
	
    redirectNewUserPage() {
		this.router.navigate(['/user/create']);
	}

	editUserPage(user: User) {
		if (user) {
			this.router.navigate(['/user/edit', user.id]);
		}
	}

	deleteUser(user: User) {
		this.userService.deleteUserById(user.id).subscribe(
			res => {
				this.getAllUsers();
				this.router.navigate(['/user']);
				console.log('utilisateur supprimé')
			}
		);
	}

	/*ngAfterViewChecked(){
		console.log(">>>>>>>>>>>>>>>>>>>>>>>> ngAfterViewChecked");
	}*/
}
