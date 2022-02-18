import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsultantComponent } from './delete-consultant.component';

describe('DeleteConsultantComponent', () => {
  let component: DeleteConsultantComponent;
  let fixture: ComponentFixture<DeleteConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
