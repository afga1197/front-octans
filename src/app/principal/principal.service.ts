import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(public http: HttpClient) { }

  getListUsers(){
    return this.http.get(`http://localhost:8080/usuario/listUsers`);
  }

  getListRoles(){
    return this.http.get(`http://localhost:8080/rol/listRol`);
  }

  postSaveUser(body:any){
    return this.http.post(`http://localhost:8080/usuario/saveUser`,body, {responseType: 'text'});
  }

  putUpdateUser(body:any){
    return this.http.put(`http://localhost:8080/usuario/updateUser`,body, {responseType: 'text'});
  }


  deleteUser(id:any){
    return this.http.delete(`http://localhost:8080/usuario/deleteUser?id=`+ id, {responseType:'text'});
  }
}
