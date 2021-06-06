import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idUsuario: string;

  constructor(protected http: HttpClient, protected route: ActivatedRoute, protected router: Router) { }

  returnLocalStorage() {
    return localStorage.getItem('idUsuario')
  }

  ngOnInit(): void {
    /* this.idUsuario = localStorage.getItem('idUsuario') */
    /*if(idUsuario) {
      this.router.navigate([`/perfil/${idUsuario}`]);
    } */
  }

}
