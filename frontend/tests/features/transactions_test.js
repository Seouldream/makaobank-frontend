Feature('거래 내역 확인 - 고객은 소비 계획을 세울 수 있도록 거래 내역을 확인할 수 있다');

Before(({ I }) => {
  I.setupDatabase();
  I.changeAmount({ userId: 1, amount: 1000000 });

  // ToDo: 계좌 설정

  // ToDo: 로그인
});

Scenario('거래 내역이 없는 경우', ({ I }) => {
  // when
  I.click('거래 내역 확인');

  // then
  I.see('거래 내역이 없습니다');
});

Scenario('거래 내역이 있는 경우', ({ I }) => {
  // given
  I.transfer({ to: '1234567890', amount: 3000, name: '테스트' });
  // when
  I.amOnPage('/');
  I.click('거래 내역 확인');

  I.see('송금\t1234567890\t3,000원');
});
