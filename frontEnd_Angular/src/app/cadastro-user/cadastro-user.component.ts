import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CrudService } from '../cadastro-condominio/crud.service';
import { CadastroUsuario } from './cadastro-user';


@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent extends CrudService<CadastroUsuario> implements OnInit {
  idCondominio: number;
  model: any = {};

  constructor(protected http: HttpClient, protected route: ActivatedRoute) {
    super(http, `${environment.backendBaseUri}/usuario`);
  }

  ngOnInit(): void {
    this.idCondominio = Number(this.route.snapshot.paramMap.get('id'));
  }

  register() {
    let user = this.criarObjeto();
    this.create(user).subscribe(() => {
      console.log('sucesso!');
    });
  }

  criarObjeto() : any {

    return new CadastroUsuario(this.model.nome, this.model.bloco, this.model.apartamento, this.model.senha, this.model.telefone, this.idCondominio);
  }
}
