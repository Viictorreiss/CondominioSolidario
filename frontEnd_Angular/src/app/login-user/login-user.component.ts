import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrudService } from './../services/crud.service'
import { Login } from './login'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent extends CrudService<Login> implements OnInit {

  private _url : string = `${environment.backendBaseUri}/usuario`;
  model: any = {};

  constructor(protected http: HttpClient,  private route: ActivatedRoute, protected router: Router) {
    super(http, `${environment.backendBaseUri}/usuario`);
  }

  login() {
    this.listWhereOther('login', this.model.telefone).subscribe(result => {
      if(this.model.senha == result[0].Senha) {
        console.log(result[0])
        localStorage.setItem('idUsuario', result[0].IdUsuario)
        this.router.navigate([`/perfil/${result[0].IdUsuario}`]);
      } else {
        alert('Usuário ou senha incorretos, tente novamente')
      }
    })
  }

  ngOnInit(): void {
  }

}
