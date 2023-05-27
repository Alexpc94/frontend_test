import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnoexisteComponent } from './pagnoexiste.component';

describe('PagnoexisteComponent', () => {
  let component: PagnoexisteComponent;
  let fixture: ComponentFixture<PagnoexisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagnoexisteComponent]
    });
    fixture = TestBed.createComponent(PagnoexisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
