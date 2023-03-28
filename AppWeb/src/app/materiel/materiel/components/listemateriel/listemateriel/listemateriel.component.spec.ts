import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListematerielComponent } from './listemateriel.component';

describe('ListematerielComponent', () => {
  let component: ListematerielComponent;
  let fixture: ComponentFixture<ListematerielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListematerielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
