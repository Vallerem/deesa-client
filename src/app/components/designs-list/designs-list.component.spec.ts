import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsListComponent } from './designs-list.component';

describe('DesignsListComponent', () => {
  let component: DesignsListComponent;
  let fixture: ComponentFixture<DesignsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
