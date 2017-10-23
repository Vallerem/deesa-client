import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsWrapperComponent } from './designs-wrapper.component';

describe('DesignsWrapperComponent', () => {
  let component: DesignsWrapperComponent;
  let fixture: ComponentFixture<DesignsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
