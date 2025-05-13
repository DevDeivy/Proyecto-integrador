import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgpasswordComponent } from './fgpassword.component';

describe('FgpasswordComponent', () => {
  let component: FgpasswordComponent;
  let fixture: ComponentFixture<FgpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
