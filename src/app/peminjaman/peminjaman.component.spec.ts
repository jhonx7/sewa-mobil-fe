import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeminjamanComponent } from './peminjaman.component';

describe('PeminjamanComponent', () => {
  let component: PeminjamanComponent;
  let fixture: ComponentFixture<PeminjamanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeminjamanComponent]
    });
    fixture = TestBed.createComponent(PeminjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
