import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios?: User[];
  usuario = new User();
  avatar = [null];
  deleteId!: Number;
  fileName = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    return this.userService.getData().subscribe((data) => this.usuarios = data)
  }
  setData() {
    this.userService.setData(this.usuario).subscribe((data) => this.usuarios?.push(data))
    return this.getData()
  }
  deleteData() {
    this.userService.deleteData(this.deleteId).subscribe((data) => console.log(data));
    return this.getData()
  }
}
