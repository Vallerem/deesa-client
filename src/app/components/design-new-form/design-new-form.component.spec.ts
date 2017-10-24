import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNewFormComponent } from './design-new-form.component';

describe('DesignNewFormComponent', () => {
  let component: DesignNewFormComponent;
  let fixture: ComponentFixture<DesignNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
