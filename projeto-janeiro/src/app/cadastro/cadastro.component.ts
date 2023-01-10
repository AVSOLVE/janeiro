import { Component, Injectable, OnInit, Input } from '@angular/core';
import { interfaceCliente } from 'src/interfaceCliente';
import { ManagerService } from 'src/manager.service';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { JsonFormData } from 'src/JsonFormData';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit{
//@Input() jsonFormData: JsonFormData;

  // id:number = 0;
  // first_name: string = '';
  // last_name: string = '';
  // birthdate: number = 0;
  // city: string = '';
  // gender: string = '';
  // whatsapp: number = 0;
  // email: string = '';
  // password: string = '';

   users:interfaceCliente[] = [];

  // private apiUrl = 'http://localhost:3000/users';

  // constructor(
  //   private managerService: ManagerService,
  //   private formBuilder: FormBuilder
  //   ) {
  //   this.getAll();
  // }
  ngOnInit() {}

  // getAll(): void {
  //   this.managerService.getAll().subscribe((users) => (this.users = users))
  // }
  // addUser(): void {
  //   this.managerService.addUser()
  // }
}
