Feature('로그아웃');

// Given
Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그아웃', ({ I }) => {
  // given
  I.login('1234');

  I.amOnPage('/');

  I.click('잔액 확인');

  I.see('계좌번호: 1234');

  I.click('로그아웃');

  // when

  // then
  I.dontSee('잔액 확인');
  I.dontSee('계좌번호: 1234');
});
