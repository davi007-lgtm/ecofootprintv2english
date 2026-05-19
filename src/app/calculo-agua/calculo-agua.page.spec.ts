import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculoAguaPage } from './calculo-agua.page';

describe('CalculoAguaPage', () => {
  let component: CalculoAguaPage;
  let fixture: ComponentFixture<CalculoAguaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoAguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
