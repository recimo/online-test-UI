import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAoiComponent } from './dialog-aoi.component';

describe('DialogAoiComponent', () => {
  let component: DialogAoiComponent;
  let fixture: ComponentFixture<DialogAoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
