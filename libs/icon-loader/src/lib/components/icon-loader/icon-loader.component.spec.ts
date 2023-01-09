import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLoaderComponent } from './icon-loader.component';

describe('IconLoaderComponent', () => {
  let component: IconLoaderComponent;
  let fixture: ComponentFixture<IconLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
