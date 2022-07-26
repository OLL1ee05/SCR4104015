import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postaddSCR4104015(data : any){
    return this.http.post<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/",data)
  }
  getaddSCR4104015(){
    return this.http.get<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/");
  }
  putDataSCR4104015(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/"+id, data);
  }

  deleteDataSCR4104015(id:number){
    return this.http.delete<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/"+id);
  }
}
