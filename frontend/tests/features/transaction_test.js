Feature('거래 내역 확인 - 고객은 소비 계획을 세울 수 있도록 거래 내역을 확인할 수 있다');

Before(({ I }) => {
  // ToDo: 계좌 설정

  I.amOnPage('/');

  // ToDo: 로그인

  I.click('거래 내역 확인');
});

// TODO: 거래내역이 없는 경우
// Scenario('거래 내역이 없는 경우', ({ I }) => {
//   // when
//   I.click('거래 내역 확인');

//   // then
//   I.see('거래 내역이 없습니다');
// });

Scenario('거래 내역이 있는 경우', ({ I }) => {
  // given
  I.click('송금');
  I.fillField('받을 분 계좌 번호', '1234567890');
  I.fillField('보낼 금액', '3000');
  I.fillField('받는 분께 표시할 이름', '테스트');
  I.click('보내기');

  // then
  I.waitForText('계좌 이체 성공');

  // when
  I.amOnPage('/');
  I.click('거래 내역 확인');

  I.see('송금\t1234567890\t3,000원');
});
