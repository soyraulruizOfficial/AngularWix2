import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HombresComponent } from './hombres.component';

describe('HombresComponent', () => {
  let component: HombresComponent;
  let fixture: ComponentFixture<HombresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HombresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
