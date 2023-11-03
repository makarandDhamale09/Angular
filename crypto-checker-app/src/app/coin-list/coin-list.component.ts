import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css'],
})
export class CoinListComponent implements OnInit {
  bannerData: any = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
  }

  getBannerData() {
    this.api.getTrendingCurrency('INR').subscribe((res) => {
      console.log(res);
      this.bannerData = res;
    });
  }

  getAllData() {
    this.api.getCurrency('INR').subscribe((res) => {
      console.log(res);
    });
  }
}
