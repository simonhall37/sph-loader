import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { LoaderConfig, SVGObject } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LoaderUtilsService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject('loaderConfig') private config: LoaderConfig
  ) { }


  loadSVG(): Observable<SVGObject> {
    return this.iconRegistry
      .getSvgIconFromUrl(
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.config.iconPath)
      )
      .pipe(
        map(res => this.buildSVGObject(res))
      );
  }

  buildSVGObject(raw: SVGElement): SVGObject {
    return {
      viewbox: this.findViewbox(raw),
      paths: this.findPath(raw.childNodes,[])
    }
  }

  findViewbox(el: SVGElement): number[] {
    const textContent =  el.getAttribute('viewBox')?.split(' ');
    if (textContent != undefined) {
      return textContent.map(t=> Number(t));
    } else {
      return [];
    }
  }

  findPath(
    nodes: NodeListOf<ChildNode> | undefined,
    paths: string[]
  ): string[] {
    const out = paths;
    if (nodes != undefined) {
      nodes.forEach((node) => {
        if (node.nodeName === 'path') {
          out.push((node as HTMLElement).getAttribute('d') || '');
        } else this.findPath(node.childNodes, out);
      });
    }
    return out;
  }

}
