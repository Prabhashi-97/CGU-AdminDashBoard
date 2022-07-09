import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfactionResComponent } from './satisfaction-res.component';

describe('SatisfactionResComponent', () => {
  let component: SatisfactionResComponent;
  let fixture: ComponentFixture<SatisfactionResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfactionResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfactionResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
