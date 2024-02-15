import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shop3Page } from './shop3.page';

describe('Shop3Page', () => {
  let component: Shop3Page;
  let fixture: ComponentFixture<Shop3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shop3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
