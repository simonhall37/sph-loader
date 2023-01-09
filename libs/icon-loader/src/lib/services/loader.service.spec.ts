import { LoaderConfig } from '../model';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;
  const fakeConfig: LoaderConfig = {
    timingOptions: {
      initialWaitTime: 2000,
      minimumWaitTime: 3000
    }
  }

  beforeEach(() => {
    service = new LoaderService(fakeConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
