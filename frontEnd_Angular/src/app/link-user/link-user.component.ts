import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-link-user',
  templateUrl: './link-user.component.html',
  styleUrls: ['./link-user.component.css']
})
export class LinkUserComponent implements OnInit {
  public link: string;
  constructor(protected route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.link = `http://localhost:4200/usuario/${id}/cadastro`;
  }

}
