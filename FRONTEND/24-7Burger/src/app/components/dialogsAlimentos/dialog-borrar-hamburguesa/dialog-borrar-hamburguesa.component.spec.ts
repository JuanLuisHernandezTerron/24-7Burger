import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBorrarHamburguesaComponent } from './dialog-borrar-hamburguesa.component';

describe('DialogBorrarHamburguesaComponent', () => {
  let component: DialogBorrarHamburguesaComponent;
  let fixture: ComponentFixture<DialogBorrarHamburguesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBorrarHamburguesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBorrarHamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
