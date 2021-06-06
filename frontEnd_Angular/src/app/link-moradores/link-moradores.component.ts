import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-link-moradores',
  templateUrl: './link-moradores.component.html',
  styleUrls: ['./link-moradores.component.css']
})
export class LinkMoradoresComponent implements OnInit {
  public link: string;
  
  constructor(protected route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.link = `http://localhost:4200/condominio/${id}/cadastro`;
  }
}
