import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasGastosComponent } from './listas-gastos.component';

describe('ListasGastosComponent', () => {
  let component: ListasGastosComponent;
  let fixture: ComponentFixture<ListasGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasGastosComponent]
    });
    fixture = TestBed.createComponent(ListasGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
