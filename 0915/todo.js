/* 이미 추가된 할일항목 (예 : 세탁소에서 빨래 찾아오기) 을 터치하면 input 으로 변경되면서, 내용을 수정할 수 있어야 합니다.  */
$('.item_todo .update').hide();

/* 그림 1의 상단, '할일을 추가하세요' 는 input 영역이며, 
텍스트 입력 후 추가시 하단 리스트에 항목이 추가됩니다. */
$('#buttonAdd').click(function() {
  const addItem = $(this).parents('.area_additem'); //기존의 할일들을 읽어주는역할
  const valueInputTodo = addItem.find('#inputTodo').val(); //할일을 입력할때의 값을 가져오는 역할(예외처리 필수 한글자라도 있을때 추가)
  if(valueInputTodo != '') {
    const listTodoItem = $('.list_todo li');//할일을 listTodoItem에 넣어둠
		const itemNum = listTodoItem.length + 1; //기존에 있던 리스트갯수에 +1해서 저장
    const valueSelectImportant = addItem.find('#selectImportant option:selected').val(); //중요도에서 선택이된 메뉴를 읽어드림
		const textSelectImportant = addItem.find('#selectImportant option:selected').text(); 
    
    let textSelectImportantArray = [];
    switch (textSelectImportant) {
			case '매우 중요': textSelectImportantArray = ['selected','','']; break; //배열안의 내용을 재선언
			case '중요': textSelectImportantArray = ['','selected','']; break; 
			case '보통': textSelectImportantArray = ['','','selected']; break;
		}
		let textSelectImportantCheckBox = `
			<option value="veryimportant" ${textSelectImportantArray[0]}>매우 중요</option>
			<option value="important" ${textSelectImportantArray[1]}>중요</option>
			<option value="normal" ${textSelectImportantArray[2]}>보통</option>
		`;
    //? 수정?할때 사용하는것인지 확인 필요

    /* 이미 추가된 할일항목 (예 : 세탁소에서 빨래 찾아오기) 을 터치하면 input 으로 변경되면서, 내용을 수정할 수 있어야 합니다. (수정하는 경우 추가일은 오늘 날짜로 변경됩니다.) */
		const nowDate = new Date();
		const valueNowDate = nowDate.getFullYear()+'.'+(nowDate.getMonth()+1)+'.'+nowDate.getDate()+'.';
		const htmlSource = `
			<li id="todo_${itemNum}" class="item_todo" data-status="view" data-important="${valueSelectImportant}" data-finish="no">
				<div class="view">
					<h3 class="blind">TO-DO 확인하기</h3>
					<span class="info">중요도: <em class="important">${textSelectImportant}</em></span>
					<span class="info">추가일: <em class="date">${valueNowDate}</em></span>
					<p class="text">${valueInputTodo}</p><!-- [D] 텍스트를 클릭하면 수정 가능 -->
					<button class="blind">수정하기</button><!-- [D] 대체 버튼 제공 -->
				</div>
				<div class="update" style="display:none">
					<h3 class="blind">TO-DO 수정하기</h3>
					<div class="update_important">
						<label for="updateImportant_${itemNum}" class="label_important">중요도<span class="blind">를 선택하세요.</span>:</label>
						<select id="updateImportant_${itemNum}" class="select_update_important">
							${textSelectImportantCheckBox}
						</select>
					</div>
					<div class="update_text">
						<label for="inputUpdate_${itemNum}" class="blind">수정할 내용을 입력하세요.</label>
						<input type="text" id="inputUpdate_${itemNum}" class="input_update" value="${valueInputTodo}">
						<button class="button_update">수정<span class="blind">한 내용 저장하기</span></button>
					</div>
				</div>
				<div class="check">
					<h3 class="blind">TO-DO 상태 변경하기</h3>
					<input type="checkbox" id="checkTodo_${itemNum}" class="checkbox_todo">
					<label for="checkTodo_${itemNum}" class="label_todo"><span class="blind">이 TO-DO를 상태(완료/미완료)를 변경하려면 클릭 또는 터치하세요.</span></label>
				</div>
				<div class="position">
					<h3 class="blind">TO-DO 위치 변경하기</h3>
					<em class="button_position"><span class="blind">TO-DO의 위치를 변경하려면 이 버튼을 드래그 앤 드랍 하세요.</span></em>
				</div>
			</li>
		`;
    $('.list_todo').append(htmlSource);
//todo에 목록이 추가가된다.
  }else{
    	/* 할 일 추가 input 이 비어있는 상태에서 추가버튼을 누르면 입력되지 않아야 합니다. */
		alert('등록불가: 내용을 입력하세요.');
  }
})


// $('.item_todo .text').click(function() {
	$('.list_todo').on('click','.item_todo .text',function(){
    const thisItem = $(this).parents('.item_todo'); //부모요소인 item_fodo가 잡히게된다
    thisItem.attr('data-status','update'); 
    thisItem.find('.view').hide(); //ui 변경
    thisItem.find('.update').show(); //처음에 숨긴애 나옴 클릭한요소만 수정할수있게 보여짐
  });

  /* 이미 추가된 할일항목 (예 : 세탁소에서 빨래 찾아오기) 을 터치하면 input 으로 변경되면서, 내용을 수정할 수 있어야 합니다. (수정하는 경우 추가일은 오늘 날짜로 변경됩니다.) */
$('.item_todo .button_update').click(function() {
  const thisItem = $(this).parents('.item_todo');
	const nowDate = new Date();
	const valueNowDate = nowDate.getFullYear()+'.'+(nowDate.getMonth()+1)+'.'+nowDate.getDate()+'.';
	const valueUpdateImportant = thisItem.find('.select_update_important option:selected').val();
	const textUpdateImportant = thisItem.find('.select_update_important option:selected').text();
	const valueInputUpdate = thisItem.find('.input_update').val();
	thisItem.attr('data-status','view');
	thisItem.attr('data-important',valueUpdateImportant);
	thisItem.find('.view').show();
	thisItem.find('.update').hide();
	thisItem.find('.view .important').html(textUpdateImportant);
	thisItem.find('.view .date').html(valueNowDate);
	thisItem.find('.view .text').html(valueInputUpdate);
});

/* 그림 1의 리스트는 To do list 입니다. 좌측의 체크박스는 완료버튼이며, 완료시 To do 가 완료되었다는 의미로 텍스트에 line through 가 생겨야 합니다. */
// $('.item_todo .label_todo').click(function() {
  $('.list_todo').on('click','.item_todo .label_todo',function(){
    const thisItem = $(this).parents('.item_todo');
    if(thisItem.find('input:checkbox[class="checkbox_todo"]').is(":checked") != false) {
      thisItem.attr('data-finish','no');
    } else {
      thisItem.attr('data-finish','yes');
    }
  });
  
  /* 추가영역 하단의 '모두', '매우 중요', '중요', '보통' 영역은 중요도 필터링 버튼입니다. 매우 중요, 중요, 보통 선택 시 선택된 할일 목록만 화면에 노출되고, 나머지는 숨겨져야 합니다. 모두를 활성화할 경우 모든 할 일이 노출됩니다. */
  $('.button_sort').click(function() {
    const thisButton = $(this);
    const thisList = thisButton.parents('.list_sort');
    thisList.find('.button_sort').attr('aria-selected','false');
    thisButton.attr('aria-selected','true');
  });
  
  $('#buttonSortAllimportant').click(function() {
    $('.item_todo').show();
  });
  
  $('#buttonSortVeryimportant').click(function() {
    $('.item_todo').hide();
    $('.item_todo[data-important="veryimportant"]').show();
    //data 속성 활용해보기 
    //매우 중요인것만 보여지도록
  });
  
  $('#buttonSortImportant').click(function() {
    $('.item_todo').hide();
    $('.item_todo[data-important="important"]').show();
  });
  
  $('#buttonSortNoimportant').click(function() {
    $('.item_todo').hide();
    $('.item_todo[data-important="normal"]').show();
  });
  
  /* 추가영역 하단의 '모두', '완료', '미완료' 영역은 완료여부 필터링 버튼입니다. 완료, 미완료 선택 시 선택된 할일 목록만 화면에 노출되고, 나머지는 숨겨져야 합니다. 모두를 활성화할 모든 할 일이 노출됩니다. */
  $('#buttonSortAllfinish').click(function() {
    $('.item_todo').show();
  });
  
  $('#buttonSortFinish').click(function() {
    $('.item_todo').hide();
    $('.item_todo[data-finish="yes"]').show();
  });
  
  $('#buttonSortNofinish').click(function() {
    $('.item_todo').hide();
    $('.item_todo[data-finish="no"]').show();
  });
  
  /* 그림 2과 같이, 스크롤을 내렸을때 상단 input 영역은 상단에 고정된 상태로 유지되어야 합니다. */
  $(window).scroll(function() {
    if($(window).scrollTop() <= 0){
      $('.wrap').removeClass('is_fixed');
    } else {
      $('.wrap').addClass('is_fixed');
    }
  });
  
  /* 드래그 앤 드랍 (회색 영역을 터치했을 때만 동작) 으로 할 일의 순서를 바꿀 수 있어야 합니다. */
  /* [참고] https://jqueryui.com/sortable/#default */
  $('.list_todo').sortable({
    items: '> li', //li 들을 이동
    handle: '.button_position', //회색영역
    axis: 'y', //y축으로만 이동
    cursor: 'move', //커서이동할때 마우스 모양 변하는것
    opacity: 0.5, 
  }); 