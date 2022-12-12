import { AlphanumericPipe } from './alphanumeric.pipe';

describe('AlphanumericPipe', () => {
  it('create an instance', () => {
    const pipe = new AlphanumericPipe();
    expect(pipe).toBeTruthy();
  });
});
