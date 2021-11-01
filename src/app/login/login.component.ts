import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http:HttpClient) { }

  formValid:boolean=true;
  formName :string='login';

  onSubmit(form:NgForm){
    console.log(form);
    if(form.invalid){
      this.formValid=false;
      return
    }
    console.log('before post')
    this.http.post('http://127.0.0.1:3000/api/users/login',form.value).subscribe();
  }

  ngOnInit(): void {
  }

}
