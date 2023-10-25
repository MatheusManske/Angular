import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiretorComponent } from './form-diretor.component';

describe('FormDiretorComponent', () => {
  let component: FormDiretorComponent;
  let fixture: ComponentFixture<FormDiretorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDiretorComponent]
    });
    fixture = TestBed.createComponent(FormDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
