import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSindComponent } from './perfil-sind.component';

describe('PerfilSindComponent', () => {
  let component: PerfilSindComponent;
  let fixture: ComponentFixture<PerfilSindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilSindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilSindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
