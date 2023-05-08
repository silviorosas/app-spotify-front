import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

//este service se conecta con signup(registro) components.ts

export class UserService {


constructor(private httpClient: HttpClient) { }
//baserUrl es traida de helper.ts donde se aloja la url del backend
    public añadirUsuario(user:any){
      return this.httpClient.post(`${baserUrl}/usuarios/`,user);
    }

}
