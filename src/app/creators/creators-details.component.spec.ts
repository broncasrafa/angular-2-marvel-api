import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsDetailsComponent } from './creators-details.component';

describe('CreatorsDetailsComponent', () => {
  let component: CreatorsDetailsComponent;
  let fixture: ComponentFixture<CreatorsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
