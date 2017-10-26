import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDesignsWrapperComponent } from './all-designs-wrapper.component';

describe('AllDesignsWrapperComponent', () => {
  let component: AllDesignsWrapperComponent;
  let fixture: ComponentFixture<AllDesignsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDesignsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDesignsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
