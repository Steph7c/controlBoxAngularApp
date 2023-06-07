import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './Components/app.component';
import { ListUsuariosComponent } from './Components/list-usuarios/list-usuarios.component';

import { NavComponent } from './Components/nav/nav.component';
import { DetalleUsuarioComponent } from './Components/detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './Components/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    ListUsuariosComponent,
    DetalleUsuarioComponent,
    DetalleUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
