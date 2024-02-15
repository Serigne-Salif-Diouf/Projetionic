import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shop2Page } from './shop2.page';

describe('Shop2Page', () => {
  let component: Shop2Page;
  let fixture: ComponentFixture<Shop2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Shop2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
