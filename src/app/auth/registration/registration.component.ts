import { Component, OnInit,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router'





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthService]
})
export class RegistrationComponent implements OnInit{
  registerForm: FormGroup;
    submitted = false;

    


  constructor(private service:AuthService,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  // convenience getter for easy access to form fields
  get registration() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      var data = {
        "name" : this.registerForm.value['name'],
        "email" : this.registerForm.value['email'],
        "password" : this.registerForm.value['password']
      }
      var sent_res = this.service.signupForm(data).subscribe((res:any) => this.onSuccess(res));
      console.log(sent_res)
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')
  }
  onSuccess(res){
    if(res != undefined){
      console.log(res)
      this.router.navigateByUrl('/login');
    }
  }

}
