import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetoriaPage } from './trajetoria.page';

describe('TrajetoriaPage', () => {
  let component: TrajetoriaPage;
  let fixture: ComponentFixture<TrajetoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
