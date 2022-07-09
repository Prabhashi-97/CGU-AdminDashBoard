import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactUsComponent } from './update-contact-us.component';

describe('UpdateContactUsComponent', () => {
  let component: UpdateContactUsComponent;
  let fixture: ComponentFixture<UpdateContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
