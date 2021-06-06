import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrudService } from './../services/crud.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(protected http: HttpClient,  private route: ActivatedRoute, protected router: Router) { }

  idUsuario: string;

  openLink(rota) {
    this.router.navigate([`/${rota}/${localStorage.getItem('idUsuario')}`]);
  }

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario')
  }

}
