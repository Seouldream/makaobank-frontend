Feature('송금');

Before(({ I }) => {
  // ToDo: 계좌 설정

  I.amOnPage('/');

  // ToDo: 로그인
  I.click('송금');
});

Scenario('올바르게 송금이 된 경우', ({ I }) => {
  // when
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', '3000');
  I.click('보내기');

  // then
  I.see('계좌 이체 성공');
});

Scenario('잔액이 부족한 경우', ({ I }) => {
  // when
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', '300000000');

  // then
  I.see('잔액이 부족합니다');
});

Scenario('계좌번호가 잘못된 경우', ({ I }) => {
  // when
  I.fillField('받을 분 계좌 번호', '이런 건 틀렸지');
  I.fillField('보낼 금액', '3000');

  // then
  I.see('계좌 번호가 틀립니다');
});
