import { environment } from './../../../environment/environment.dev';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  get(endpoint : string ) {
    return this.http.get(`${environment.BASE_URL}${endpoint}`,{headers : this.httpHeader()});
  }

  post(parameter : Required<{endpoint : string , data : any}> ) {
    return this.http.post(`${environment.BASE_URL}${parameter.endpoint}`,parameter.data, {headers : this.httpHeader()} );
  }

  put(parameter : Required<{endpoint : string , data : any}>) {
    return this.http.put(`${environment.BASE_URL}${parameter.endpoint}`, parameter.data,{headers : this.httpHeader()});
  }

  delete(endpoint : String) {
    return this.http.delete(`${environment.BASE_URL}${endpoint}`,{headers : this.httpHeader()});
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT,DELETE',
      'Accept': 'application/json',
    });
  }

}
