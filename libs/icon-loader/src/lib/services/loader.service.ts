import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { LoaderConfig } from '../model';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  showSpinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showSpinner$: Observable<boolean> = this.showSpinner.asObservable();
  isLoading$: Observable<boolean> = of(false);
  loadingStart?: number;
  stopRequested = false;
  cache: { key: string; viewbox: string; value: string }[] = [];

  constructor(@Inject('loaderConfig') private config: LoaderConfig) {}

  initLoader(): void {
    this.log('Start Loader Process');
    this.stopRequested = false;
    this.initSpinner();
  }

  getStyle(type: "STROKE-WIDTH" | "ANIMATION-DURATION" | "DASH_LENGTH" | "HEIGHT" | "WIDTH"): number {
    if (type === 'ANIMATION-DURATION') {
      return this.config.viewSettings.animationLength;
    }
    else if (type === 'DASH_LENGTH') {
      return this.config.viewSettings.iconDashLength;
    }
    else if (type === 'STROKE-WIDTH') {
      return this.config.viewSettings.iconStrokeWidth;
    }
    else if (type === 'HEIGHT') {
      return this.config.viewSettings.height;
    }
    else if (type === 'WIDTH') {
      return this.config.viewSettings.width;
    }
    else return -1;
  }

  initSpinner(): void {
    this.log('Waiting for initiation time...');
    this.isLoading$ = of(true);
    setTimeout(
      () => this.startLoading(),
      this.config.timingOptions.initialWaitTime
    );
  }

  startLoading(): void {
    if (!this.stopRequested) {
      this.showSpinner.next(true);
      this.log('Showing spinner');
      this.loadingStart = new Date().valueOf();
    } else {
      this.log('Not showing spinner as stop requested');
      this.stopRequested = false;
    }
  }

  terminateLoader(): void {
    this.log('Stop Loader');
    this.stopRequested = true;
    this.closeSpinner();
  }

  closeSpinner(): void {
    const spinTime = this.calcDifference();
    this.log('Spinning for ' + spinTime);
    const remSpinTime = this.config.timingOptions.minimumWaitTime - spinTime;
    if (spinTime > 0 && remSpinTime > 0) {
      this.log('Must keep spinning for ' + remSpinTime + ' milliseconds');
      setTimeout(() => this.stopLoading(), remSpinTime);
    } else {
      this.stopLoading();
    }
  }

  stopLoading(): void {
    this.showSpinner.next(false);
    this.loadingStart = undefined;
    this.log('Stopped spinning');
    this.showSpinner$ = of(false);
  }

  calcDifference(): number {
    if (this.loadingStart) {
      return new Date().valueOf() - this.loadingStart;
    } else return 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(output: any): void {
    const current = new Date();
    const dt =
      this.addZero(current.getHours().toString(), 2) +
      ':' +
      this.addZero(current.getMinutes().toString(), 2) +
      ':' +
      this.addZero(current.getSeconds().toString(), 2) +
      '.' +
      this.addZero(current.getMilliseconds().toString(), 3);
    console.log(dt + ' - ' + output);
  }

  addZero(input: string, len: number): string {
    while (input.toString().length < len) {
      input = '0' + input;
    }
    return input;
  }
}
