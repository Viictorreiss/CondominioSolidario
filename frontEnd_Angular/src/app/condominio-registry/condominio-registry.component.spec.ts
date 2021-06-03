import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioRegistryComponent } from './condominio-registry.component';

describe('CondominioRegistryComponent', () => {
  let component: CondominioRegistryComponent;
  let fixture: ComponentFixture<CondominioRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominioRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominioRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
