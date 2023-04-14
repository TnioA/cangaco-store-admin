import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private dataService: DataService, private loadingService: LoadingService) { }

  async handleLogout() {
    this.loadingService.show();
    const result = await this.dataService.logout('email@teste.com');
    if (!result.success) 
      return;

    localStorage.removeItem("erabizaileak");
    this.router.navigate(["/login"]);
    this.loadingService.hide();
  }
}
