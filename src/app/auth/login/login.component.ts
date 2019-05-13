import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Login } from  '../login';
import { AuthService } from  '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    var data = {
      "email" : this.loginForm.value['email'],
      "password" : this.loginForm.value['password']
    }
    if(this.loginForm.invalid){
      return;
    }
    this.authService.loginForm(data).subscribe((res:any) => this.onSuccess(res));
  }
  onSuccess(res){
    if(res != undefined){
      console.log(res)
      this.router.navigateByUrl('/blog');
    }
  }

}
