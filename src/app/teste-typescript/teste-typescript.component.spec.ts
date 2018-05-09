import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteTypescriptComponent } from './teste-typescript.component';

describe('TesteTypescriptComponent', () => {
  let component: TesteTypescriptComponent;
  let fixture: ComponentFixture<TesteTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
