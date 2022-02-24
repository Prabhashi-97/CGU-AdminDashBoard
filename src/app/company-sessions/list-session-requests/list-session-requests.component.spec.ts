import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSessionRequestsComponent } from './list-session-requests.component';

describe('ListSessionRequestsComponent', () => {
  let component: ListSessionRequestsComponent;
  let fixture: ComponentFixture<ListSessionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSessionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSessionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
