import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { routing } from './app.routing';
import { CrudService } from './cadastro-condominio/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';

import {FormsModule} from "@angular/forms";
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { CondominioRegistryComponent } from './condominio-registry/condominio-registry.component';
import { LinkMoradoresComponent } from './link-moradores/link-moradores.component';
import { LinkUserComponent } from './link-user/link-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroUserComponent,
    LoginUserComponent,
    HomeComponent,
    CondominioRegistryComponent,
    LinkMoradoresComponent,
    LinkUserComponent
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
