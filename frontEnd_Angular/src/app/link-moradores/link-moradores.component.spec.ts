import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkMoradoresComponent } from './link-moradores.component';

describe('LinkMoradoresComponent', () => {
  let component: LinkMoradoresComponent;
  let fixture: ComponentFixture<LinkMoradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkMoradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkMoradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
