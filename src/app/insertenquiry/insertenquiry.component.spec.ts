import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertenquiryComponent } from './insertenquiry.component';

describe('InsertenquiryComponent', () => {
  let component: InsertenquiryComponent;
  let fixture: ComponentFixture<InsertenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
