import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  constructor() { }

  @Input() pessoa;

  ngOnInit(): void {
  }

  
  pessoas = [
    { nome: "", idade: 18 },
    { nome: "", idade: 22 }
 ];

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }

}
