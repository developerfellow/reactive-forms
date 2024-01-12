import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signupForm:FormGroup;
  constructor(){
    this.signupForm = new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email])
    })
  }
  onSubmitHandler(){
    console.log(this.signupForm.value);
  }
}
