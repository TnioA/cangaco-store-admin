import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

declare const Chart: any;

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

    var salesChartData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
      datasets: [
        {
          label: 'Digital Goods',
          backgroundColor: 'rgba(60,141,188,0.9)',
          borderColor: 'rgba(60,141,188,0.8)',
          pointRadius: false,
          pointColor: '#3b8bba',
          pointStrokeColor: 'rgba(60,141,188,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        },
        {
          label: 'Electronics',
          backgroundColor: 'rgba(210, 214, 222, 1)',
          borderColor: 'rgba(210, 214, 222, 1)',
          pointRadius: false,
          pointColor: 'rgba(210, 214, 222, 1)',
          pointStrokeColor: '#c1c7d1',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }

    var salesChartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    }

    const chartElement = document.querySelector("#revenue-chart-canvas");
    var salesChart = new Chart(chartElement, { // lgtm[js/unused-local-variable]
      type: 'line',
      data: salesChartData,
      options: salesChartOptions
    })
  }

}
