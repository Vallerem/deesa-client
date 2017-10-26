import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignNewWrapperComponent } from './design-new-wrapper.component';

describe('DesignNewWrapperComponent', () => {
  let component: DesignNewWrapperComponent;
  let fixture: ComponentFixture<DesignNewWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignNewWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignNewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
