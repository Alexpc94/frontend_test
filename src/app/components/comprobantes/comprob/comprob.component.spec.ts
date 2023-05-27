import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobComponent } from './comprob.component';

describe('ComprobComponent', () => {
  let component: ComprobComponent;
  let fixture: ComponentFixture<ComprobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprobComponent]
    });
    fixture = TestBed.createComponent(ComprobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
