import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { routing } from './app.routing';
import { CrudService } from './cadastro-condominio/crud.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';
import { HeaderComponent } from './header/header.component';
import { MuralComponent } from './mural/mural.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MuralComponent,
    CadastroCondominioComponent,
    CadastroUserComponent,
    LoginUserComponent,
    HomeComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    NgbModule    
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
