import { Component } from '@angular/core';
import { LoaderService } from '@sph-loader/icon-loader';

@Component({
  selector: 'sph-loader-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  timerText = "Start";
  showSpinner = false;

  constructor(
    public loaderService: LoaderService
  ) {
  }

  toggleTimer(): void {
    if (this.timerText === "Start") {
      this.timerText = "Stop";
      this.loaderService.initLoader();
    }
    else {
      this.timerText = "Start";
      this.loaderService.terminateLoader();
    }
  }

}
