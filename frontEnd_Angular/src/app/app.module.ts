import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';
import { routing } from './app.routing';
import { CrudService } from './cadastro-condominio/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';

import {FormsModule} from "@angular/forms";
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { PerfilUsuComponent } from './perfil-usu/perfil-usu.component';
import { PerfilSindComponent } from './perfil-sind/perfil-sind.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroCondominioComponent,
    CadastroUserComponent,
    LoginUserComponent,
    HomeComponent,
    PerfilUsuComponent,
    PerfilSindComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule    
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
