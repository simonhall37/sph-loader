import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderConfig } from './model';
import { LoaderService } from './services';
import { IconLoaderComponent } from './components/icon-loader/icon-loader.component';

@NgModule({
  imports: [CommonModule],
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
