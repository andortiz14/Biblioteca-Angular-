import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCrearComponent } from './editorial-crear.component';

describe('EditorialCrearComponent', () => {
  let component: EditorialCrearComponent;
  let fixture: ComponentFixture<EditorialCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorialCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
