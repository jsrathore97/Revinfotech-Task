import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseExampleComponent } from './upper-case-example.component';

describe('UpperCaseExampleComponent', () => {
  let component: UpperCaseExampleComponent;
  let fixture: ComponentFixture<UpperCaseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperCaseExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperCaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
