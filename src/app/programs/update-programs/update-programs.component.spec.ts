import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProgramsComponent } from './update-programs.component';

describe('UpdateProgramsComponent', () => {
  let component: UpdateProgramsComponent;
  let fixture: ComponentFixture<UpdateProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
