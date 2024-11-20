import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultartodoComponent } from './consultartodo.component';

describe('ConsultartodoComponent', () => {
  let component: ConsultartodoComponent;
  let fixture: ComponentFixture<ConsultartodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultartodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultartodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
