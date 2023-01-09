import { TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconLoaderComponent, LoaderService } from '@sph-loader/icon-loader';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const fakeLoaderService = {};

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ToolbarComponent, IconLoaderComponent],
      imports: [
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule
      ],
      providers: [
        {provide: LoaderService, useValue: fakeLoaderService}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
