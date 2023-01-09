import { Inject, Injectable } from '@angular/core';
import { LoaderConfig } from '../model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    @Inject('loaderConfig') private config: LoaderConfig,
  ) { 
    console.log(this.config);
  }
}
