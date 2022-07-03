import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAcceptedvacanciesComponent } from './delete-acceptedvacancies.component';

describe('DeleteAcceptedvacanciesComponent', () => {
  let component: DeleteAcceptedvacanciesComponent;
  let fixture: ComponentFixture<DeleteAcceptedvacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAcceptedvacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAcceptedvacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
