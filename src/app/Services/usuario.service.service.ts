import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/');    
  }

  obtenerUsuarioPorId(id:number): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);  
  }

  eliminarUsuario(id:number):Observable<any>{
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id)
  }

  actualizarUsuario(usuario?:Usuario):Observable<any>{
    return this.http.put('https://jsonplaceholder.typicode.com/users/',JSON.stringify(usuario));
  }


}
