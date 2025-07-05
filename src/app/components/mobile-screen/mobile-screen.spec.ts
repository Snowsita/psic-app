import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileScreen } from './mobile-screen';

describe('MobileScreen', () => {
  let component: MobileScreen;
  let fixture: ComponentFixture<MobileScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
