import { Component, OnInit } from '@angular/core';
import { CrudService } from './../services/crud.service'
import { Mural } from './mural'
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MuralComponent extends CrudService<Mural> implements OnInit {

  private _url : string = `${environment.backendBaseUri}/mural`;
  muralUrgente: any[];
  muralImportante: any[];
  muralPendente: any[];
  muralExecucao: any[];
  muralCancelado: any[];
  muralConcluido: any[];
  
  constructor(protected http: HttpClient, config: NgbModalConfig, private modalService: NgbModal, private router: Router, activatedRoute: ActivatedRoute) {
    super(http, `${environment.backendBaseUri}/mural`);
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }

  taskToExec(idTarefa, idEstado, idVoluntario) {
      this.update(new Mural(idTarefa, idEstado,idVoluntario)).subscribe(response => {
        console.log(response)
        console.log(this.router.url)
        window.location.reload();
    }, error => {
      console.error(error)
    })
  }

  ngOnInit(): void {
    this.list().subscribe(result => {
      this.muralUrgente = result.filter((mural) => {
        return mural.IdPrioridade == 1 && mural.ID_ESTADO == 1
      });
      this.muralImportante = result.filter((mural) => {
        return mural.IdPrioridade == 2 && mural.ID_ESTADO == 1
      });
      this.muralPendente = result.filter((mural) => {
        return mural.IdPrioridade == 3 && mural.ID_ESTADO == 1
      });
      this.muralExecucao = result.filter((mural) => {
        return mural.ID_ESTADO == 2
      });
      this.muralCancelado = result.filter((mural) => {
        return mural.ID_ESTADO == 4
      });
      this.muralConcluido = result.filter((mural) => {
        return mural.ID_ESTADO == 3
      });
    });
  }
 
}