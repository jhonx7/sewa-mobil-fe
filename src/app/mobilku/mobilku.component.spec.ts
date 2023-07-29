import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilkuComponent } from './mobilku.component';

describe('MobilkuComponent', () => {
  let component: MobilkuComponent;
  let fixture: ComponentFixture<MobilkuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilkuComponent]
    });
    fixture = TestBed.createComponent(MobilkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
