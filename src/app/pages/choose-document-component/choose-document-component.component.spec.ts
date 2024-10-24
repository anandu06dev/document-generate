import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDocumentComponentComponent } from './choose-document-component.component';

describe('ChooseDocumentComponentComponent', () => {
  let component: ChooseDocumentComponentComponent;
  let fixture: ComponentFixture<ChooseDocumentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseDocumentComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseDocumentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
