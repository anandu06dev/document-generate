import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseEmployeeComponentComponent } from './choose-employee-component.component';

describe('ChooseEmployeeComponentComponent', () => {
  let component: ChooseEmployeeComponentComponent;
  let fixture: ComponentFixture<ChooseEmployeeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseEmployeeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseEmployeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
