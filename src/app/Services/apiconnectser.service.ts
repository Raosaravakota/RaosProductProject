import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectserService {

  constructor(private http: HttpClient) { }

  baseUrl="https://localhost:7049/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postData(MethodName: string, formData: any) {
    return this.http.post(`${this.baseUrl}${MethodName}`, formData);
  };

  getData(MethodName: string) {
    return this.http.get('/api/'+MethodName);
  };

  deleteData(MethodName: string,id: any) {
    return this.http.delete('/api/'+MethodName + id);
  };
}
