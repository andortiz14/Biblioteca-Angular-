import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCrearComponent } from './autor-crear.component';

describe('AutorCrearComponent', () => {
  let component: AutorCrearComponent;
  let fixture: ComponentFixture<AutorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
