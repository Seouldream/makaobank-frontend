Feature('Account detail');

Before(({ I }) => {
  // ToDo: 계좌 설정

  I.amOnPage('/');

  // ToDo: 로그인
});

// ToDo: 잔액 없는 경우 처리 필요함.
// Scenario('I have no money', ({ I }) => {
//   // when
//   I.click('잔액 확인');

//   // then
//   I.see('잔액이 없습니다');
// });

Scenario('I have money', ({ I }) => {
  // when

  I.click('잔액 확인');
  // then
  I.waitForText('잔액: 123,000원');
});
