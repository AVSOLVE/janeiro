import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { USERS } from './USERS';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users?: USERS[];
  title = 'httpGet Example';
  user = new Usuario();
  data: any;


  constructor(private userService: UserService) {
    this.getUsers();
   }

  ngOnInit(): void {}

  getUsers(): void {
    this.userService.getPeople().subscribe(data => {
      this.users = data
    });
  }
  addUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log(data);
      this.userService.getPeople().subscribe(data => {
        this.users = data
      });
    })
  }
}
