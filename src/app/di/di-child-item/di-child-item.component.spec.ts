import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiChildItemComponent } from './di-child-item.component';

describe('DiChildItemComponent', () => {
  let component: DiChildItemComponent;
  let fixture: ComponentFixture<DiChildItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiChildItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiChildItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
