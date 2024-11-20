import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarunoComponent } from './consultaruno.component';

describe('ConsultarunoComponent', () => {
  let component: ConsultarunoComponent;
  let fixture: ComponentFixture<ConsultarunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
