import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilmeComponent } from './form-filme.component';

describe('FormFilmeComponent', () => {
  let component: FormFilmeComponent;
  let fixture: ComponentFixture<FormFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFilmeComponent]
    });
    fixture = TestBed.createComponent(FormFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
