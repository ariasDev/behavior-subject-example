import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleContactComponent } from './simple-contact.component';

describe('SimpleContactComponent', () => {
  let component: SimpleContactComponent;
  let fixture: ComponentFixture<SimpleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
