import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected allProducts: any[] = [];

  constructor(private http: HttpClient) {
    this.getDataFromAPI().subscribe();
  }

  getDataFromAPI() {
    return this.http.get('https://dummyjson.com/products');
  }
}
