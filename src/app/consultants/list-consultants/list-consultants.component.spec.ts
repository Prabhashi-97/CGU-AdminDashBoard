import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsultantsComponent } from './list-consultants.component';

describe('ListConsultantsComponent', () => {
  let component: ListConsultantsComponent;
  let fixture: ComponentFixture<ListConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsultantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
