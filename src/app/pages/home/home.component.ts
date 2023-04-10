import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: UserModel;

  constructor(private router: Router, private dataService: DataService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserData();
    if (!this.user) return;
  }

}
