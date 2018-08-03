import { AmbientModule } from './ambient.module';

describe('AmbientModule', () => {
  let ambientModule: AmbientModule;

  beforeEach(() => {
    ambientModule = new AmbientModule();
  });

  it('should create an instance', () => {
    expect(ambientModule).toBeTruthy();
  });
});
