import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getWeather(){
    return this.http.get('https://www.el-tiempo.net/api/json/v1/provincias');
  }
}
