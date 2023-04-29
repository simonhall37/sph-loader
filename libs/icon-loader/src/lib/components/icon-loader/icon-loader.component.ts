import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { SVGObject } from '../../model';

import { LoaderService } from '../../services';
import { LoaderUtilsService } from '../../services/loader-utils.service';

@Component({
  selector: 'sph-loader-icon-loader',
  templateUrl: './icon-loader.component.html',
  styleUrls: ['./icon-loader.component.scss'],
})
export class IconLoaderComponent {
  pathText: SafeHtml[] = [];
  viewbox = '';
  svgObject$: Observable<SVGObject | undefined> = of(undefined);

  constructor(
    public loaderService: LoaderService,
    public loaderUtils: LoaderUtilsService,
    ) {}

  getStatus(): Observable<boolean> {
    return this.loaderService.showSpinner.pipe(
      tap((show) =>show ? this.svgObject$ = this.loaderUtils.loadSVG(): this.svgObject$ = of(undefined))
    );
  }

  getHeight(): string {
    return this.loaderService.getStyle('HEIGHT') + "px";
  }

  getWidth(): string {
    return this.loaderService.getStyle('WIDTH') + "px";
  }
  

  getStrokeWidth(): number {
    return this.loaderService.getStyle('STROKE-WIDTH');
  }

  getAnimationDuration(): string {
    return this.loaderService.getStyle('ANIMATION-DURATION') + "ms";
  }

  getDashLength(): number {
    return this.loaderService.getStyle('DASH_LENGTH');
  }

  setValues(input: SVGObject): void {
    this.pathText = input.paths;
    this.viewbox = this.viewboxToString(input.viewbox);
  }

  viewboxToString(raw: number[]): string {
    let out = "";
    raw.forEach(r=> out = out + " " + r);
    return out;
  }
}
