import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  
  
  constructor(private http: HttpClient) { 
    
  }

  getAllData(cityName:any){
    let apiurl= 'https://vast-shore-74260.herokuapp.com/banks?city=' + cityName;
    return this.http.get(apiurl);
  }

}
