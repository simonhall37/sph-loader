import { Component } from '@angular/core';
import { LoaderService } from '@sph-loader/icon-loader';

@Component({
  selector: 'sph-loader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    public loaderService: LoaderService
  ) {}
}
