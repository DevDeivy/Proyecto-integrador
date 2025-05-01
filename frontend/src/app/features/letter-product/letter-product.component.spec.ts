import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterProductComponent } from './letter-product.component';

describe('LetterProductComponent', () => {
  let component: LetterProductComponent;
  let fixture: ComponentFixture<LetterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
