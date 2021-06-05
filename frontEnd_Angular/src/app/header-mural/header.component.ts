import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header-mural',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class HeaderMuralComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit(): void {
  }

}
