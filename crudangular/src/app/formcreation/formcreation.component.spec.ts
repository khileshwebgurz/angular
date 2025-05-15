import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreationComponent } from './formcreation.component';

describe('FormcreationComponent', () => {
  let component: FormcreationComponent;
  let fixture: ComponentFixture<FormcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormcreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
