import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClasseComponent } from './form-classe.component';

describe('FormClasseComponent', () => {
  let component: FormClasseComponent;
  let fixture: ComponentFixture<FormClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClasseComponent]
    });
    fixture = TestBed.createComponent(FormClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
