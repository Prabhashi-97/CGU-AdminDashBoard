import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultationRequestsComponent } from './list-consultation-requests.component';

describe('ListConsultationRequestsComponent', () => {
  let component: ListConsultationRequestsComponent;
  let fixture: ComponentFixture<ListConsultationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
