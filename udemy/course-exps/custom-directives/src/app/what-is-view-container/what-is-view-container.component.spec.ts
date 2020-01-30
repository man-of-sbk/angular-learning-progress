import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsViewContainerComponent } from './what-is-view-container.component';

describe('WhatIsViewContainerComponent', () => {
  let component: WhatIsViewContainerComponent;
  let fixture: ComponentFixture<WhatIsViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
