import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactUsComponent } from './delete-contact-us.component';

describe('DeleteContactUsComponent', () => {
  let component: DeleteContactUsComponent;
  let fixture: ComponentFixture<DeleteContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
