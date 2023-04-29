import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoaderConfig } from './model';
import { LoaderService } from './services';
import { IconLoaderComponent } from './components';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [IconLoaderComponent],
  exports: [IconLoaderComponent],
  providers: [LoaderService]
})
export class IconLoaderModule {
  static forRoot(
    loaderConfig: LoaderConfig
  ): ModuleWithProviders<IconLoaderModule> {
    return {
      ngModule: IconLoaderModule,
      providers: [
        LoaderService,
        { provide: 'loaderConfig', useValue: loaderConfig },
      ],
    };
  }
}
