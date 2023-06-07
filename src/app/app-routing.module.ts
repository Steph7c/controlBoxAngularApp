import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuariosComponent } from './Components/list-usuarios/list-usuarios.component';

import { NavComponent } from './Components/nav/nav.component';
import { DetalleUsuarioComponent } from './Components/detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './Components/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'usuarioListar', component: ListUsuariosComponent },
  { path: 'usuarioDetalle/:id', component:  DetalleUsuarioComponent},
  { path: 'usuarioEditar/:id', component:  EditarUsuarioComponent},
  { path: '**', redirectTo: 'nav' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
