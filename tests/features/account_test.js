Feature('Account detail');

Before(({ I }) => {
  I.setupDatabase();

  I.login('1234');

  I.amOnPage('/');
});

Scenario('잔액이 없는 경우', ({ I }) => {
  // given

  // GET /backdoor/change-amount?userId=1&amount=0
  I.changeAmount({ userId: 1, amount: 0 });

  I.amOnPage('/');

  // when
  I.click('잔액 확인');

  // then
  I.see('잔액이 없습니다');
});

Scenario('잔액이 있는 경우', ({ I }) => {
  // given
  I.changeAmount({ userId: 1, amount: 123000 });
  // when
  I.amOnPage('/');

  I.click('잔액 확인');
  // then
  I.waitForText('잔액: 123,000원');
});
