import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAboutUSComponent } from './delete-about-us.component';

describe('DeleteAboutUSComponent', () => {
  let component: DeleteAboutUSComponent;
  let fixture: ComponentFixture<DeleteAboutUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAboutUSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAboutUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
