import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { IconLoaderModule } from '@sph-loader/icon-loader';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LOADER_CONFIG } from '../config';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    BrowserModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,

    IconLoaderModule.forRoot(LOADER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
