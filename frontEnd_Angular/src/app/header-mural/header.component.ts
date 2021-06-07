import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header-mural',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderMuralComponent implements OnInit {

  constructor(protected http: HttpClient,  private route: ActivatedRoute, protected router: Router) { }
  
  openLink(rota) {
    let url = `/${rota}/${localStorage.getItem('idUsuario')}`
    this.router.navigate([url]);
  }

  ngOnInit(): void {
  }

}
