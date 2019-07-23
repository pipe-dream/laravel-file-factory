import LaravelFileFactory from 'LaravelFileFactory';

describe("LaravelFileFactory", () => {

  test('it should expose a version following pattern 0.1.2', () => {
    expect.stringMatching(
        LaravelFileFactory.version(),
        /^[\d]*\.[\d]*\.[\d]*$/
    )    
  });
});