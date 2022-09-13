$('.article').each(function () {
  let startDate = $(this).find('.startDate').text();
  // article을 총7번을 읽고 startDate를 찾아서 텍스트로출력 4개는 startDate가 없어서 빈값이들어옴
  // console.log(startDate); 
  //2021.07.01.
  //2021.01.01.
  //2020.01.01.
  // 4

  if (startDate != '') {
    // console.log(startDate); //빈값일경우 작동x
    let startDateArr = startDate.split('.'); //.을 기준으로 쪼갠다.
    let endDate = $(this).find('.endDate').text();
    let endDateArr;
    //  console.log(startDateArr, endDate); //시작하는날짜와 끝나는 날짜를 데이터로 
    if (endDate == 'today') {
      const now = new Date();
      endDateArr = [now.getFullYear(), now.getMonth() + 1, now.getDate()]; //두번선언하지않게 조심할것
      //getMonth index의 숫자가 0부터 시작해서 1월은0 2월은1 이기때문에 +1을해주어야함
      if (endDateArr[1] < 10) { //예외처리
        $(this).find('.endDate').text(`${endDateArr[0]}. 0${endDateArr[1]}. ${endDateArr[2]}.`);
        /*endDate를 찾고 text로 출력을하는데 endDateArr의 배열의순서에따라 10보다 작으면 앞에 0을 넣어서 표기*/
      } else if (endDateArr[2] < 10) {
        $(this).find('.endDate').text(`${endDateArr[0]}. ${endDateArr[1]}. 0${endDateArr[2]}.`);
      } else if (endDateArr[1] < 10 && endDateArr[2] < 10) {
        $(this).find('.endDate').text(`${endDateArr[0]}. 0${endDateArr[1]}. 0${endDateArr[2]}.`);
      } else {
        $(this).find('.endDate').text(`${endDateArr[0]}. ${endDateArr[1]}. ${endDateArr[2]}.`);
      }
      // console.log(endDateArr);
    } else {
      endDateArr = endDate.split('.');
    }//단위를 맞춰주기위해

    // console.log(startDateArr,endDateArr);

    const startDateCalc = new Date(startDateArr[0], startDateArr[1], startDateArr[2]);
    //console.log(startDateCalc);//날짜형식으로 바뀌게됨
    /*Sun Aug 01 2021 00:00:00 GMT+0900 (한국 표준시)
      Mon Feb 01 2021 00:00:00 GMT+0900 (한국 표준시)
      Sat Feb 01 2020 00:00:00 GMT+0900 (한국 표준시)
    */
    const endDateCalc = new Date(endDateArr[0], endDateArr[1], endDateArr[2]);
    // console.log(endDateCalc,'////',startDateCalc);
    const dateCalc = endDateCalc.getTime() - startDateCalc.getTime();
    const dateCalcResult = dateCalc / (1000 * 60 * 60 * 24); //1초 분 시 일
    // console.log(endDateCalc.getTime(),startDateCalc.getTime(),dateCalc,dateCalcResult);
    $(this).find('.periodResult').text(`(${dateCalcResult}일)`);
    // console.log(dateCalcResult);

    let dateResultText;
    const dateResultYear = Math.floor(dateCalcResult / 365); //Math.floor 소수점없앰
    const dateResultMonth = Math.round((dateCalcResult - (dateResultYear * 365)) / 30); //반올림
    // console.log(`${dateCalcResult}전체일 ${dateResultYear}년 ${dateResultMonth}개월`);

    if (dateResultYear == 0 && dateResultMonth == 0) {
      dateResultText = `-`;
    } else if (dateResultYear == 0) {
      dateResultText = `${dateResultMonth}개월`;
    } else if (dateResultMonth == 0) {
      dateResultText = `${dateResultYear}년`;
    } else {
      dateResultText = `${dateResultYear}년 ${dateResultMonth}개월`;
    }
    console.log(dateResultText);
    $(this).find('.periodResult').text(`(${dateResultText})`); //일수를 몇년 개월로 표시

  }
})

