import { User } from './model/user';
import { UserInfo } from './model/userinfo';
import { UserInformation } from './model/userinformation';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'http-post-request-angular';
  userInfo!: UserInformation;
  user!: User;
  users: User[] = [];

  addUserForm: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    job: new FormControl('', [Validators.required]),
  });
  usersTyped: any;

  constructor(public userService: UserService) {
    this.userInfo = {} as UserInformation;
  }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe(response => {
    //   this.userInfo.page = response?.page;
    //   this.userInfo.per_page = response?.per_page;
    //   this.userInfo.support = response?.support;
    //   this.userInfo.total = response?.total;
    //   this.userInfo.total_pages = response?.total_pages;
    //   this.userInfo.data = response?.data?.map(item => {
    //     var user = {} as User;
    //     user.avatar = item?.avatar;
    //     user.email = item?.email;
    //     user.first_name = item?.first_name;
    //     user.last_name = item?.last_name;
    //     user.id = item?.id;
    //     return user;
    //   });
    // });


    //If you are sure about the data returned from API, you can directly assign the response object to the variable in the component ts file.

    this.userService.getUsers().subscribe((response: UserInformation) => {
      this.userInfo = response;
    });
  }

  saveUser() {
    this.user = this.addUserForm.value;
    this.userService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);
      this.users.push({
        name: response.name, job: response.job,
        avatar: '',
        email: '',
        first_name: '',
        id: 0,
        last_name: ''
      });
    });
  }


  saveUserTyped() {
    this.user = this.addUserForm.value;
    this.userService
      .saveUserTyped(this.user)
      .subscribe((response: UserInfo) => {
        console.log(response);

        this.users.push({
          name: response.name, job: response.job,
          avatar: '',
          email: '',
          first_name: '',
          id: 0,
          last_name: ''
        });
        this.usersTyped.push({
          name: response.name,
          job: response.job,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }
}
