import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengembalianComponent } from './pengembalian.component';

describe('PengembalianComponent', () => {
  let component: PengembalianComponent;
  let fixture: ComponentFixture<PengembalianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PengembalianComponent]
    });
    fixture = TestBed.createComponent(PengembalianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
