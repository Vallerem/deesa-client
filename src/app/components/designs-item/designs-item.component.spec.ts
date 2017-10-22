import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsItemComponent } from './designs-item.component';

describe('DesignsItemComponent', () => {
  let component: DesignsItemComponent;
  let fixture: ComponentFixture<DesignsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
