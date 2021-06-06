import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CrudService } from './../services/crud.service'
import { Mural } from './../mural/mural'
import { Task } from './addTask'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-addTask',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.css']
})
export class AddTaskComponent extends CrudService<Task> implements OnInit {

  private _url : string = `${environment.backendBaseUri}/mural`;
  id: number;
  descricao: string;
  ID_SERVICO: number;
  nome: string;
  aptoBloco: string;

  constructor(protected http: HttpClient,  private route: ActivatedRoute, private router: Router) { 
    super(http, `${environment.backendBaseUri}/mural`);
    this.ID_SERVICO = 1    
  }

  selectTask(idServico) {
    this.ID_SERVICO = idServico
    this.loadByIdOther('servico', this.ID_SERVICO).subscribe(result => {
      this.descricao = result[0].Descricao
    })
  }

  saveTask() {
    this.createOther('task', new Task(1, this.ID_SERVICO, null, this.id)).subscribe(response => {
      console.log(response)
      this.router.navigate(['/mural'])
    }, error => {
      console.error(error)
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('idUsuario')) {
      this.route.params.subscribe(params => {
        this.id = params['id'];      
      });    
      this.loadByIdOther('user', this.id).subscribe(result => {
        this.nome = result[0].Nome
        this.aptoBloco = `${result[0].Apartamento} Bloco ${result[0].Bloco}`
      })
      this.selectTask(this.ID_SERVICO)
    } else {
      this.router.navigate(["/"])
    }
  }
}