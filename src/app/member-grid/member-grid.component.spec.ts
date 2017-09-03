import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberGridComponent} from './member-grid.component';

describe('MemberGridComponent', () => {
  let component: MemberGridComponent;
  let fixture: ComponentFixture<MemberGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberGridComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
