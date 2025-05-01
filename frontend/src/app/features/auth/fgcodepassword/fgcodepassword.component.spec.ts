import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FgcodepasswordComponent } from './fgcodepassword.component';

describe('FgcodepasswordComponent', () => {
  let component: FgcodepasswordComponent;
  let fixture: ComponentFixture<FgcodepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FgcodepasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FgcodepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
