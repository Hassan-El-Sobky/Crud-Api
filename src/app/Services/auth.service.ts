import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) {

   }

URL="https://routeegypt.herokuapp.com/";


signUp(data):Observable<any>
{
  return this._httpClient.post(this.URL +'signup',data)
}
signIn(data):Observable<any>
{
 return this._httpClient.post(this.URL +'signin',data)
}
signOut(data):Observable<any>
{
  return this._httpClient.post(this.URL +'signOut',data)
}

}
