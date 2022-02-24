import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSessionRequestComponent } from './delete-session-request.component';

describe('DeleteSessionRequestComponent', () => {
  let component: DeleteSessionRequestComponent;
  let fixture: ComponentFixture<DeleteSessionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSessionRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSessionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
