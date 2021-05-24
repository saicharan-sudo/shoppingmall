import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Creation } from './creation';

@Injectable({
  providedIn: 'root'
})
export class JsonserverService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  
  postData(employees:any):Observable<Creation>{
    return this.http.post<Creation>(this.url+'/employees/',
    JSON.stringify(employees),this.httpOptions
    )
  }
  getData():Observable<Creation>{
    return this.http.get<Creation>(this.url+'/employees',
    this.httpOptions)
  }
  getDataId(id:any):Observable<Creation>{
    return this.http.get<Creation>(this.url+'/employees/'+id,
    this.httpOptions
    )
  }
  
  deleteData(id:any):Observable<Creation>{
   return this.http.delete<Creation>(this.url+'/employees/'+id,
   this.httpOptions)
  }
  updateData(id:any,employees:any):Observable<Creation>{
   return this.http.put<Creation>(this.url+'/employees/'+id,
    JSON.stringify(employees),this.httpOptions
    )
  }}
