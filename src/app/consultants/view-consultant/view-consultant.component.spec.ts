import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsultantComponent } from './view-consultant.component';

describe('ViewConsultantComponent', () => {
  let component: ViewConsultantComponent;
  let fixture: ComponentFixture<ViewConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
