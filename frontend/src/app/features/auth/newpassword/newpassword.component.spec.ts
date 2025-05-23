import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpasswordComponent } from './newpassword.component';

describe('NewpasswordComponent', () => {
  let component: NewpasswordComponent;
  let fixture: ComponentFixture<NewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
