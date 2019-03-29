import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindericonComponent } from './remindericon.component';

describe('RemindericonComponent', () => {
  let component: RemindericonComponent;
  let fixture: ComponentFixture<RemindericonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemindericonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
