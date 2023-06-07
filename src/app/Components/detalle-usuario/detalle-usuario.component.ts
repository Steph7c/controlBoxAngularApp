import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario.model';
import { UsuarioServiceService } from 'src/app/Services/usuario.service.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html'
})
export class DetalleUsuarioComponent {
  id: number;
  usuario: any;

  constructor(private _route: ActivatedRoute, private _service: UsuarioServiceService) {
    this.usuario = new Usuario();
    this.id = parseInt(this._route.snapshot.paramMap.get('id')!.toString());
  }

  ngOnInit() {
    this.obtenerUsuarioPorId();
  }

  obtenerUsuarioPorId() {
    this._service.obtenerUsuarioPorId(this.id).subscribe((data) => {
      if (data !== undefined) {
        this.usuario = data;
        console.log(data);
      }
    })
  }
}
