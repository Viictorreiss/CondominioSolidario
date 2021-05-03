import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.css']
})
export class NovoComponent implements OnInit {

  @Output() pessoaAdicionada = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  adicionar(nome, idade) {
    const pessoa = {
    nome: nome,
    idade: idade
    };
    this.pessoaAdicionada.emit(pessoa);
  }


}
