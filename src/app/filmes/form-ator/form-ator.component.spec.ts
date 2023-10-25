import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtorComponent } from './form-ator.component';

describe('FormAtorComponent', () => {
  let component: FormAtorComponent;
  let fixture: ComponentFixture<FormAtorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAtorComponent]
    });
    fixture = TestBed.createComponent(FormAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
