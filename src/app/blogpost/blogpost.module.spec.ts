import { BlogpostModule } from './blogpost.module';

describe('BlogpostModule', () => {
  let blogpostModule: BlogpostModule;

  beforeEach(() => {
    blogpostModule = new BlogpostModule();
  });

  it('should create an instance', () => {
    expect(blogpostModule).toBeTruthy();
  });
});
