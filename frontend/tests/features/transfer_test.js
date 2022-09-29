Feature('송금');

function numberFormat(number) {
  return Intl.NumberFormat().format(number);
}

const amount = 1000000;

// Given
Before(({ I }) => {
  I.setupDatabase();
  I.changeAmount({ userId: 1, amount });

  I.login('1234');

  I.amOnPage('/');

  I.click('송금');
});

Scenario('올바르게 송금이 된 경우', ({ I }) => {
  const transferAmount = 500000;
  // when
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', transferAmount);
  I.fillField('받는 분께 표시할 이름', '테스트');
  I.click('보내기');

  // then
  I.see('계좌 이체 성공');

  // 잔액 확인
  I.click('잔액 확인');
  I.see(`잔액: ${numberFormat(amount - transferAmount)}원`);
});

Scenario('잔액이 부족한 경우', ({ I }) => {
  // when
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', amount + 10000);

  // then
  I.see('잔액이 부족합니다');
});

Scenario('계좌번호가 잘못된 경우', ({ I }) => {
  // when
  I.fillField('받을 분 계좌 번호', '이런 건 틀렸지');
  I.fillField('보낼 금액', '3000');
  I.fillField('받는 분께 표시할 이름', '테스트');
  I.click('보내기');

  // then
  I.see('계좌 번호가 잘못 됐습니다');
});
