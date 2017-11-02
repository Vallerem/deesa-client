import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemWrapperComponent } from './buy-item-wrapper.component';

describe('BuyItemWrapperComponent', () => {
  let component: BuyItemWrapperComponent;
  let fixture: ComponentFixture<BuyItemWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyItemWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
