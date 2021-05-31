import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCondominioComponent } from './cadastro-condominio.component';


describe('CadastroCondominioComponent', () => {
  let component: CadastroCondominioComponent;
  let fixture: ComponentFixture<CadastroCondominioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCondominioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCondominioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
