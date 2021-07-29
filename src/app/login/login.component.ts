import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 formName :string='login';
  onSubmit= ()=>{
    console.log("login successful")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
