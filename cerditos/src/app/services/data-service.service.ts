import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user, pig, food } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  CreateUser(user: user){
    return this.http.post('http://localhost:1999/user', user);
  }

  CreatePig(pig: pig){
    return this.http.post('http://localhost:1999/pig', pig);
  }

  CreateFood(food: food){
    return this.http.post('http://localhost:1999/food', food);
  }

  GetUsers(){
    return this.http.get('http://localhost:1999/user');
  }

  DeleteUser(id: string){
    return this.http.delete('http://localhost:1999/user/' + id);
  }

  CreateAdmin( user: user){
    return this.http.post('http://localhost:1999/user', user);
  }

  searchUser(cc: string){
    return this.http.get('http://localhost:1999/user/' + cc);
  }

  getPigs(){
    return this.http.get('http://localhost:1999/pig');
  }
}
