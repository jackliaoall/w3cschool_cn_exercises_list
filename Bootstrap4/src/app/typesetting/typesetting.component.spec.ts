import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesettingComponent } from './typesetting.component';

describe('TypesettingComponent', () => {
  let component: TypesettingComponent;
  let fixture: ComponentFixture<TypesettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
