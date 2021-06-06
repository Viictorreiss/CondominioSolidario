import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrudService } from './../services/crud.service'
import { Perfil } from './perfil'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent extends CrudService<Perfil> implements OnInit {
  
  private _url : string = `${environment.backendBaseUri}/usuario`;
  
  id: number;
  perfilUsuario: Perfil;
  qtdeApoiado: number;
  qtdeVoluntario: number;

  logout() {
    localStorage.removeItem('idUsuario')
    this.router.navigate(["/"])
  }

  constructor(protected http: HttpClient,  private route: ActivatedRoute, private router: Router) {
    super(http, `${environment.backendBaseUri}/usuario`);
  }

  ngOnInit(): void {
    if(localStorage.getItem('idUsuario')) {
      this.route.params.subscribe(params => {
        this.id = params.id;      
      });
      this.loadByID(this.id).subscribe(result => {
        this.perfilUsuario = result[0]
      })
      this.listWhereOther('apoiado', this.id).subscribe(result => {
        this.qtdeApoiado = result.length;
      })
      this.listWhereOther('voluntario', this.id).subscribe(result => {
        this.qtdeVoluntario = result.length;
      })
    } else {
      this.router.navigate(["/"])
    }


  }

}
