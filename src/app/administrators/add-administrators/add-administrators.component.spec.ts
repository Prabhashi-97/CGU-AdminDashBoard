import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministratorsComponent } from './add-administrators.component';

describe('AddAdministratorsComponent', () => {
  let component: AddAdministratorsComponent;
  let fixture: ComponentFixture<AddAdministratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdministratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
