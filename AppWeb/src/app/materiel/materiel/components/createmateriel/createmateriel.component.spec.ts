import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatematerielComponent } from './createmateriel.component';

describe('CreatematerielComponent', () => {
  let component: CreatematerielComponent;
  let fixture: ComponentFixture<CreatematerielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatematerielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatematerielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
