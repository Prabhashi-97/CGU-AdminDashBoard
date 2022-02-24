import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcceptedRequestsComponent } from './list-accepted-requests.component';

describe('ListAcceptedRequestsComponent', () => {
  let component: ListAcceptedRequestsComponent;
  let fixture: ComponentFixture<ListAcceptedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAcceptedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcceptedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
