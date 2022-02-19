import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVacanciesComponent } from './delete-vacancies.component';

describe('DeleteVacanciesComponent', () => {
  let component: DeleteVacanciesComponent;
  let fixture: ComponentFixture<DeleteVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
