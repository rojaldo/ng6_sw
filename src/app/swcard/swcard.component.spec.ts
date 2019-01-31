import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwcardComponent } from './swcard.component';

describe('SwcardComponent', () => {
  let component: SwcardComponent;
  let fixture: ComponentFixture<SwcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
