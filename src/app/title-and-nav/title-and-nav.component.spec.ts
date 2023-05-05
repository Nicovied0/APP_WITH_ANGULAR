import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndNavComponent } from './title-and-nav.component';

describe('TitleAndNavComponent', () => {
  let component: TitleAndNavComponent;
  let fixture: ComponentFixture<TitleAndNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAndNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAndNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
