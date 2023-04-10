import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }

  getUserData() {
    var userJsonData = localStorage.getItem("erabizaileak");
    if(!userJsonData){
      this.router.navigate(["/login"]);
      return;
    }
    
    var user = JSON.parse(userJsonData);
    if(!user || user === null){
      localStorage.removeItem("erabizaileak");
      this.router.navigate(["/login"]);
      return;
    }

    return user;
  }
}
