import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { UserModel } from 'src/app/models/UserModel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      registration: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  handleLogin() {
    var loginData = this.loginForm.getRawValue() as LoginModel;
    // this.dataService.login(loginData).subscribe((user: UserModel) => {
    //   localStorage.setItem("erabizaileak", JSON.stringify(user));
    //   this.router.navigate(["/home"]);
    // });
  }
}
