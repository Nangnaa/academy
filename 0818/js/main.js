const data = [
  {
    category:'이탈리아',
    name:'Buon giorno',
    address:'서울 서초구 잠원동',
    phone:'02-5431-2678',
    website:'italia001.net'
  },
  {
    category: '이탈리아',
    name: 'Buonasera',
    address: '서울 강남구 역삼동',
    phone: '02-9523-1793',
    website: 'italia002.net',
  },
  {
      category: '프랑스',
      name: 'Bonjour',
      address: '서울 서초구 반포동',
      phone: '02-3856-2859',
      website: 'france001.net',
  },
  {
      category: '프랑스',
      name: 'PARIS, Bonsoir.',
      address: '서울 서초구 반포동',
      phone: '02-1157-4962',
      website: 'france002.net',
  },
  {
      category: '스페인',
      name: 'HOLA',
      address: '서울 강남구 논현동',
      phone: '02-4822-3795',
      website: 'spain.net',
  },
  {
      category: '일본',
      name: 'めしや [飯屋]',
      address: '서울 강남구 도곡동',
      phone: '02-2848-1683',
      website: 'japan.net',
  },
  {
      category: '한국',
      name: '아데정',
      address: '서울 강서구 화곡동',
      phone: '02-2848-1683',
      website: 'korea.net',
  },
  {
    category: '중국',
    name: '[飯屋]',
    address: '서울 강남구 곡동',
    phone: '02-1243-2734',
    website: 'china.net',
},
  {
      category: '데이터 없음',
      name: '데이터 없음',
      address: '-',
      phone: '-',
      website: '-',
  },
]

// console.log(data[2].name);

// $('table tbody')는 변하지 않기 때문에 한 번만 참조
// 반복해서 $() 함수 호출할 필요가 없이 반복문 밖에 있는 게 더 효율적
const tableBody = $('table tbody') // 비어있는 tbody에 변수를넣어 활요

for (let i = 0; i < data.length; i++) { //data의 갯수만큼 반복문돌린다.
  // console.log(data[i]); 데이터를 모두 출력
  // console.log(data[i].name);
  // console.log(data[i].category, data[i].name, data[i].address);

  let flag, imageURL;
  if(data[i].category =='이탈리아'){ //해당하는국가의 국기넣기
    flag= 'Italy';
  } else if (data[i].category == '프랑스') {
    flag = 'France';
  } else if (data[i].category == '스페인') {
      flag = 'Spain';
  } else if (data[i].category == '일본') {
      flag = 'Japan';
  } else if (data[i].category == '한국') {
    flag = 'Korea';
  } else if (data[i].category == '중국') {
    flag = 'China';
  } 
  else {
      flag = 'Unknown';//default
  }

  //imageURL = 'http://hwangsunsoo.cdn3.cafe24.com/home/img/flag/' + flag + '.png';
    imageURL = `http://hwangsunsoo.cdn3.cafe24.com/home/img/flag/${flag}.png`;

  tableBody.append(`
    <tr>
      <td>${i}</td> 
      <td>
      <img src="${imageURL}" alt="${data[i].category} 국기 이미지">
        ${data[i].category}</td> 
      <td>${data[i].name}</td>
      <td>${data[i].address}</td>
      <td>${data[i].phone}</td>
      <td>
        <a href="https://${data[i].website}" target="_blank">${data[i].website}</a>
      </td>

      
    </tr>
  `)
}
// append  Node의 마지막 자식 뒤에 개체 집합 또는 문자열 개체를 삽입합니다 Element. 
//문자열 개체는 동등한 Text노드로 삽입됩니다.