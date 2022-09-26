Feature('Home page ');

Scenario('visit the home page', ({ I }) => {
  // when
  I.amOnPage('/');

  // then
  I.see('Hello, world!');
});
