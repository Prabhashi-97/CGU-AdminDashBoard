import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSessionRequestComponent } from './update-session-request.component';

describe('UpdateSessionRequestComponent', () => {
  let component: UpdateSessionRequestComponent;
  let fixture: ComponentFixture<UpdateSessionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSessionRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSessionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
