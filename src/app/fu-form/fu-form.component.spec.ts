import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuFormComponent } from './fu-form.component';

describe('FuFormComponent', () => {
  let component: FuFormComponent;
  let fixture: ComponentFixture<FuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
