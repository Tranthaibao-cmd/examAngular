import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiChildGroupComponent } from './di-child-group.component';

describe('DiChildGroupComponent', () => {
  let component: DiChildGroupComponent;
  let fixture: ComponentFixture<DiChildGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiChildGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiChildGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
