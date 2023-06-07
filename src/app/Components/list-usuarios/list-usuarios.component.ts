import { Component } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario.model';
import { UsuarioServiceService } from 'src/app/Services/usuario.service.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html'
})
export class ListUsuariosComponent {
  listado: Usuario[] = [];

  constructor(private _service:UsuarioServiceService){ }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._service.obtenerUsuarios().subscribe(data => {
      if(data != undefined){
        this.listado = data;
      }
    })
  }

  borrarUsuario(usuario:Usuario, id: number)
  {
    this._service.eliminarUsuario(id);
  }

}
