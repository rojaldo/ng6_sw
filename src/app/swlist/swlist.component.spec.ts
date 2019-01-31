import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwlistComponent } from './swlist.component';

describe('SwlistComponent', () => {
  let component: SwlistComponent;
  let fixture: ComponentFixture<SwlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
