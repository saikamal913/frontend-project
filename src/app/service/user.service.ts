import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  persons = [
    {name:'kamal',id:1},
    {name:'navya',id:2},
    {name:'bhaveth',id:3},
    {name:'srujana',id:4},
    {name:'ramana',id:5},
   ]
private baseUrl ='https://jsonplaceholder.typicode.com/users'
  constructor(private httpService:HttpClient) { }

  getUsers():Observable<User[]> {
   return this.httpService.get<User[]>(`${this.baseUrl}`)
  }
  getUser():Observable<User> {
    return this.httpService.get<User>(`${this.baseUrl}/1`)
   }
}
