import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSessionRequestComponent } from './view-session-request.component';

describe('ViewSessionRequestComponent', () => {
  let component: ViewSessionRequestComponent;
  let fixture: ComponentFixture<ViewSessionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSessionRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSessionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
