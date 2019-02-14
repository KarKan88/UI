import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message = 'you do not have permission';
  action = 'exit';
  userForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      uName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login() {
    const userName = this.userForm.controls['uName'].value;
    const password = this.userForm.controls['password'].value;
    console.log('user name is ' + userName + ' password is  ' + password);
    if (userName === 'admin' && password === 'admin') {
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
      localStorage.setItem('status', 'true');
      localStorage.setItem('role', 'admin');
      this.router.navigate(['auth/dashboard']);
    } else {
      console.log('inside');
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
    }
  }
}
