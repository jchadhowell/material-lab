import { Demo\demoModule } from './demo\demo.module';

describe('Demo\demoModule', () => {
  let demo\demoModule: Demo\demoModule;

  beforeEach(() => {
    demo\demoModule = new Demo\demoModule();
  });

  it('should create an instance', () => {
    expect(demo\demoModule).toBeTruthy();
  });
});
