import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { UserModel } from 'src/app/models/UserModel';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loadingService: LoadingService, private dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      registration: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async handleLogin() {
    var loginData = this.loginForm.getRawValue() as LoginModel;
    // this.dataService.login(loginData).subscribe((user: UserModel) => {
    //   localStorage.setItem("erabizaileak", JSON.stringify(user));
    //   this.router.navigate(["/home"]);
    // });

    this.loadingService.show();
    const result = await this.dataService.login();
    console.log(result);
    localStorage.setItem("erabizaileak", JSON.stringify(result));
      this.router.navigate(["/home"]);
    this.loadingService.hide();
  }
}
