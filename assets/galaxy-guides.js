(function(){
  var source = 'https://www.samsungsvc.co.kr/solution/4614296';
  var photos = {'gemini-open':[230,422], 'gemini-plus':[230,422], 'gemini-gallery':[230,422], 'gemini-attached':[223,422]};
  // 각 항목은 제목, 지금 할 동작, 성공 확인, 화면 자료, 강조할 위치, 입력 예문이다.
  function photoSteps(photo,prompt){
    return [
      ['제미나이를 여세요','휴대전화에서 Gemini를 실행하세요.','아래쪽에 “Gemini에게 물어보기” 입력칸이 보이나요?','gemini-open',[24,349,184,44]],
      ['왼쪽 아래 ＋를 누르세요','입력칸 왼쪽의 ＋를 한 번 누르세요.','카메라·갤러리 메뉴가 나타나면 성공이에요.','gemini-plus',[10,350,44,43]],
      ['갤러리를 누르세요','펼쳐진 메뉴에서 “갤러리”를 누르세요.','휴대전화에 저장된 사진들이 보여야 해요.','gemini-gallery',[13,267,101,34]],
      ['사진 한 장을 누르세요',photo+' 한 장을 누르세요.','선택 표시가 생기거나 제미나이 화면으로 돌아와요.','picker',[10,230,108,109]],
      ['추가가 보이면 누르세요','사진 선택창에 “추가” 버튼이 보이면 누르세요.','이미 제미나이로 돌아왔다면 이 장은 건너뛰세요.','picker-add',[238,600,110,50]],
      ['사진이 붙었는지 확인해요','입력칸 위에 내가 고른 작은 사진이 있는지 보세요.','사진이 작게 붙어 있으면 성공이에요. 꽃 사진은 화면 예시예요.','gemini-attached',[8,309,77,43]],
      ['글 쓰는 칸을 누르세요','“Gemini에게 물어보기”라고 적힌 곳을 누르세요.','화면 아래에 키보드가 나타나야 해요.','gemini-attached',[51,351,105,39]],
      ['이 문장을 입력하세요','아래 문장을 글 쓰는 칸에 그대로 입력하세요.','다 적었으면 아직 보내지 말고 문장을 읽어보세요.','gemini-type',[66,472,227,43],prompt],
      ['보내기 화살표를 누르세요','입력칸 오른쪽의 보내기 화살표를 한 번 누르세요.','요청이 올라가고 제미나이가 작업을 시작해요.','gemini-type',[299,474,42,42]],
      ['새 그림을 기다리세요','제미나이가 만든 그림이 나타날 때까지 기다리세요.','오류나 이용 한도가 나오면 강사님께 보여주세요.','gemini-result',[24,153,312,284]],
      ['그림을 길게 누르세요','마음에 드는 그림 위에 손가락을 잠깐 누르고 계세요.','“저장” 메뉴가 보이면 손을 떼세요.','gemini-result',[24,153,312,284]],
      ['저장을 누르세요','펼쳐진 메뉴에서 “저장”을 누르세요.','새 사진이 휴대전화에 저장돼요.','gemini-save',[25,485,307,58]],
      ['갤러리에서 결과를 확인해요','갤러리 앱을 열어 방금 저장한 사진을 찾아보세요.','원본 사진도 남아 있는지 함께 확인해요.','gallery-grid',[10,230,108,109]]
    ];
  }
  var lessons = {
    13:photoSteps('내 얼굴이 잘 보이는 사진','인물은 그대로 두고 배경만 밝은 단색으로 바꿔줘.'),
    14:[
      ['옛날 사진을 카메라에 비춰요','카메라 앱을 열고 종이 사진을 화면 안에 맞추세요.','빛 반사 없이 사진 전체가 보여야 해요.','camera',[0,122,360,324]],
      ['하얀 촬영 버튼을 누르세요','아래 가운데의 하얀 동그라미를 한 번 누르세요.','방금 찍은 사진이 왼쪽 아래에 작게 보여요.','camera',[140,534,80,80]]
    ].concat(photoSteps('방금 찍은 옛날 사진','이 사진의 흠집과 바랜 색을 복원해줘. 원래 얼굴과 모습은 유지해줘.')),
    15:photoSteps('풍경 사진','이 사진을 따뜻한 만화 그림으로 바꿔줘.'),
    16:photoSteps('내 얼굴 사진','이 얼굴을 닮은 밝고 친근한 캐리커처를 만들어줘.'),
    17:[
      ['제미나이를 여세요','Gemini를 실행하세요.','입력칸이 보이면 준비됐어요.','gemini-open',[24,349,184,44]],
      ['입력칸을 누르세요','“Gemini에게 물어보기” 칸을 누르세요.','키보드가 나타나야 해요.','gemini-plus',[54,352,105,36]],
      ['그리고 싶은 장면을 입력해요','아래 문장을 그대로 입력하세요.','장면을 설명한 말 뒤에 “그려줘”를 붙여요.','gemini-blank',[66,472,227,43],'노을 지는 바닷가 그림을 그려줘.'],
      ['보내기 화살표를 누르세요','입력칸 오른쪽 화살표를 누르세요.','내 문장이 대화에 올라가요.','gemini-blank',[299,474,42,42]],
      ['완성된 그림을 살펴봐요','노을과 바다가 있는 그림이 나왔는지 보세요.','생성 결과는 사람마다 다르게 나와요.','gemini-result',[24,153,312,284]],
      ['그림을 길게 누르세요','만들어진 그림을 손가락으로 길게 누르세요.','저장 메뉴가 보이면 손을 떼세요.','gemini-result',[24,153,312,284]],
      ['저장을 누르세요','메뉴에서 “저장”을 누르세요.','갤러리에서 새 그림을 확인할 수 있어요.','gemini-save',[25,485,307,58]]
    ],
    18:[
      ['제미나이를 여세요','Gemini를 실행하세요.','입력칸을 찾아보세요.','gemini-open',[24,349,184,44]],
      ['입력칸을 누르세요','“Gemini에게 물어보기” 칸을 누르세요.','키보드가 나타나요.','gemini-plus',[54,352,105,36]],
      ['축하 문장을 입력해요','아래 문장을 입력하세요.','“민준” 대신 원하는 이름을 써도 좋아요.','gemini-blank',[66,472,227,43],'“민준아 생일 축하해”라는 글씨가 있는 밝은 축하 그림을 그려줘.'],
      ['보내기 화살표를 누르세요','오른쪽 화살표를 누르세요.','그림이 나올 때까지 기다려요.','gemini-blank',[299,474,42,42]],
      ['그림 속 이름을 확인해요','이름과 글씨가 맞는지 읽어보세요.','틀리면 입력칸에 바르게 고쳐 달라고 써요.','gemini-result',[24,153,312,284]],
      ['바꿀 내용을 입력해요','입력칸에 아래 문장을 적으세요.','한 번에 한 가지씩 부탁해요.','gemini-blank',[66,472,227,43],'글씨를 더 크게 해줘.'],
      ['보내기 화살표를 누르세요','오른쪽 화살표를 한 번 누르세요.','글씨가 커진 새 그림이 나오는지 보세요.','gemini-blank',[299,474,42,42]],
      ['그림을 길게 누르세요','고른 그림 위에 손가락을 잠시 누르고 계세요.','저장 메뉴가 나와요.','gemini-result',[24,153,312,284]],
      ['저장을 누르세요','메뉴의 “저장”을 누르세요.','가족에게 보내기는 20차시 공유 순서를 따라 해요.','gemini-save',[25,485,307,58]]
    ],
    19:[
      ['갤러리를 여세요','갤러리 앱을 실행하세요.','사진들이 모여 있는 화면이 보여요.','gallery-grid',[10,230,342,349]],
      ['첫 사진을 길게 누르세요','영상에 넣을 사진 한 장을 길게 누르세요.','사진에 선택 표시가 생겨요.','gallery-grid',[10,230,108,109]],
      ['사진을 다섯 장 골라요','나머지 사진 네 장을 하나씩 누르세요.','위쪽에 5개가 선택됐는지 확인해요.','gallery-select',[58,48,220,40]],
      ['만들기를 누르세요','아래쪽 “만들기”를 누르세요.','영화·콜라주 메뉴가 나와요.','gallery-select',[24,605,110,47]],
      ['영화를 누르세요','메뉴에서 “영화”를 누르세요.','영상 편집 화면이 열려요.','gallery-create',[21,509,319,55]],
      ['재생 버튼을 누르세요','가운데 ▶ 버튼을 누르세요.','사진이 차례로 바뀌는지 확인해요.','gallery-movie',[146,250,69,72]],
      ['음표를 누르세요','아래의 음표 모양을 누르세요.','음악 목록에서 원하는 음악을 골라요.','gallery-movie',[30,576,72,62]],
      ['저장을 누르세요','오른쪽 위 “저장”을 누르세요.','영상 저장이 끝날 때까지 기다려요.','gallery-movie',[278,45,66,46]]
    ],
    20:[
      ['보낼 영상을 여세요','갤러리에서 완성한 영상을 누르세요.','보내려던 영상이 맞는지 재생해 확인해요.','gallery-grid',[10,230,108,109]],
      ['공유 모양을 누르세요','아래의 점 세 개가 선으로 이어진 모양을 누르세요.','보낼 앱을 고르는 화면이 나와요.','gallery-photo',[209,574,53,53]],
      ['카카오톡을 누르세요','노란 카카오톡 아이콘을 누르세요.','대화 상대 선택 화면이 열려요.','share-sheet',[17,368,81,106]],
      ['가족 대화방을 고르세요','보내려는 가족 이름이나 대화방을 누르세요.','받는 사람이 맞는지 다시 읽어보세요.','kakao-room',[16,197,327,57]],
      ['확인을 누르세요','받는 사람을 확인했으면 “확인”을 누르세요.','전송 화면이 이어지거나 영상이 전송돼요.','kakao-room',[20,592,320,53]],
      ['전송 화면을 확인해요','“전송”이 따로 보이면 눌러 마무리하세요.','대화방 안에 영상 말풍선이 생기면 끝이에요.','kakao-send',[280,567,70,67]]
    ],
    21:[
      ['Google 렌즈를 여세요','Google 렌즈를 실행하세요.','카메라 화면 아래에 기능 이름들이 보여요.','lens',[20,571,320,60]],
      ['번역을 누르세요','아래쪽 “번역”을 누르세요.','번역이 선택된 상태로 바뀌어요.','lens',[27,574,90,55]],
      ['외국어를 화면에 비춰요','메뉴판 글자가 가운데 오도록 잡으세요.','글자가 흔들리지 않게 잠깐 멈춰요.','lens',[34,198,292,90]],
      ['한국어를 확인해요','번역할 언어가 한국어인지 확인하세요.','다른 언어면 언어 표시를 눌러 바꿔요.','lens-translate',[55,108,250,45]],
      ['바뀐 글을 읽어보세요','화면에 겹쳐 보이는 한국어를 읽으세요.','다른 포장지로 다시 연습해요.','lens-translate',[36,250,288,85]]
    ],
    22:photoSteps('개인정보 없는 연습용 안내문 사진','이 글을 쉬운 말로 설명해줘.').slice(0,9).concat([
      ['답변을 읽어보세요','설명이 안내문의 내용과 맞는지 읽어보세요.','모르는 내용은 강사님께 물어보세요.','gemini-answer',[20,215,320,130]],
      ['답변의 더보기를 누르세요','답변 아래 ⋮ 메뉴를 누르세요.','소리 내어 읽기 메뉴를 찾아요.','gemini-answer',[294,366,48,44]],
      ['소리 내어 읽기를 누르세요','메뉴에서 “소리 내어 읽기”를 누르세요.','안 들리면 옆면 음량 버튼을 눌러요.','gemini-read',[31,238,294,59]]
    ]),
    23:[
      ['네이버 지도를 여세요','수업에서는 네이버 지도 앱을 열어주세요.','다른 지도 앱이면 강사님과 화면을 맞춰요.','naver-map',[14,45,332,58]],
      ['길찾기를 누르세요','아래 메뉴에서 “길찾기”를 누르세요.','출발지와 도착지 칸이 나타나요.','naver-map',[117,585,125,64]],
      ['도착지 칸을 누르세요','“도착지 입력” 칸을 누르세요.','키보드가 열려요.','naver-route',[19,180,322,55]],
      ['목적지를 입력하세요','“문경시청”을 입력해 검색 결과에서 고르세요.','선택된 도착지가 맞는지 확인해요.','naver-route',[19,180,322,55]],
      ['이동 방법을 고르세요','수업에서 정한 자동차·대중교통·도보를 누르세요.','출발지가 현재 위치인지 함께 확인해요.','naver-route',[24,270,312,48]],
      ['예매와 신분증은 강사와 진행해요','예매 앱과 PASS는 강사 시연을 보며 진행하세요.','앱·통신사별로 다른 화면은 본인 기기에서 확인해요.','coach',null]
    ],
    24:[
      ['상품권 앱을 강사와 확인해요','문경사랑상품권 수업용 앱을 강사님과 확인하세요.','가입·충전은 시연을 본 뒤 본인이 진행해요.','coach',null],
      ['유튜브를 여세요','YouTube 앱을 실행하세요.','위쪽에 검색 모양이 보여요.','youtube',[283,44,57,49]],
      ['검색 모양을 누르세요','오른쪽 위 돋보기를 누르세요.','검색칸과 키보드가 나타나요.','youtube',[283,44,57,49]],
      ['관심 있는 주제를 입력해요','검색칸에 “트로트”처럼 좋아하는 주제를 입력하세요.','키보드의 검색으로 영상 목록을 열어요.','youtube-search',[55,45,285,49]],
      ['보고 싶은 영상을 고르세요','영상 목록에서 하나를 누르세요.','영상과 채널 이름을 확인해요.','youtube',[20,180,320,180]],
      ['채널을 구독해요','계속 보고 싶은 채널이면 “구독”을 누르세요.','“구독 중”으로 바뀌는지 확인해요.','youtube',[248,426,88,48]],
      ['일정을 제미나이에 입력해요','Gemini 입력칸에 아래처럼 할 일을 적으세요.','적은 내용을 시간순으로 정리해 줄 수 있어요.','gemini-blank',[66,472,227,43],'오늘 오후 2시 병원, 오후 4시 장보기야. 시간순으로 정리해줘.']
    ],
    25:[
      ['메뉴 하나를 누르세요','연습 키오스크에서 따뜻한 차를 누르세요.','실제 메뉴 이름은 수업에서 함께 확인해요.','kiosk',[36,163,128,144]],
      ['수량을 확인하세요','수량이 1개인지 보세요.','여러 잔이면 ＋나 −로 바꿔요.','kiosk',[30,354,297,68]],
      ['장바구니를 누르세요','메뉴와 수량을 정했으면 장바구니를 누르세요.','주문 내역으로 넘어가요.','kiosk',[35,483,290,70]],
      ['주문 내역을 읽어보세요','음료 이름·수량·금액을 확인하세요.','수업에서는 실제 결제 전에 멈춰요.','kiosk-order',[24,175,312,194]],
      ['삼성월렛은 강사와 함께 열어요','삼성월렛의 본인 결제 화면을 강사와 확인하세요.','카드 등록과 본인 인증은 직접 진행해요.','coach',null]
    ],
    26:[
      ['전화 앱을 여세요','전화 앱을 실행하세요.','위쪽에 점 세 개 ⋮가 보여요.','phone-menu',[297,43,44,45]],
      ['점 세 개를 누르세요','오른쪽 위 ⋮를 누르세요.','설정 메뉴가 펼쳐져요.','phone-menu',[297,43,44,45]],
      ['설정을 누르세요','펼쳐진 메뉴에서 설정을 누르세요.','전화 설정 화면이 나타나요.','phone-menu',[178,105,158,49]],
      ['스팸 확인 항목을 찾아요','발신번호·스팸 확인 항목을 강사와 찾으세요.','통신사·기종에 따라 이름이 달라요.','phone-settings',[17,198,327,67]],
      ['낯선 링크 앞에서 멈춰요','돈을 요구하는 문자 속 링크는 누르지 마세요.','가족 목소리처럼 들려도 먼저 확인해요.','warning',[29,270,301,51]],
      ['저장된 가족 번호로 전화해요','연락처에서 평소 저장한 가족 번호로 전화하세요.','문자로 받은 번호로 전화하지 않아요.','contacts',[24,237,312,69]]
    ],
    27:[
      ['기억나는 기능을 말해봐요','사진 편집·그림·영상 중 한 가지를 말해보세요.','어느 버튼을 눌렀는지 순서대로 이야기해요.','review',null],
      ['갤러리에서 내 작품을 골라요','직접 만든 그림 한 장을 누르세요.','화면을 옆 사람에게 보여주세요.','gallery-grid',[10,230,108,109]],
      ['어려웠던 기능을 다시 해봐요','헷갈렸던 차시의 첫 동작부터 해보세요.','막힌 화면에서 손을 들어 질문해요.','review',null]
    ],
    28:[
      ['궁금한 점을 질문하세요','아직 어려운 기능을 한 가지 질문하세요.','강사가 보여준 순서를 다시 눌러봐요.','review',null],
      ['내 작품을 소개해요','갤러리에서 마음에 드는 작품을 고르세요.','직접 만든 과정과 소감을 이야기해요.','gallery-grid',[10,230,108,109]],
      ['카메라를 여세요','카메라 앱을 열고 모두 화면 안에 맞추세요.','사진 모드인지 확인해요.','camera',[0,122,360,324]],
      ['하얀 동그라미를 누르세요','아래 가운데 하얀 촬영 버튼을 누르세요.','왼쪽 아래에서 기념사진을 확인해요.','camera',[140,534,80,80]]
    ]
  };
  lessons[13].splice(10,0,
    ['보정할 내용을 입력해요','입력칸에 추가 보정 내용을 적으세요.','원래 얼굴이 달라지지 않게 부탁해요.','gemini-type',[66,472,227,43],'피부와 밝기를 자연스럽게 보정해줘. 원래 얼굴은 유지해줘.'],
    ['보내기 화살표를 누르세요','오른쪽 화살표를 누르세요.','결과가 나오면 원본 얼굴과 비교해요.','gemini-type',[299,474,42,42]]);
  lessons[15].splice(10,0,
    ['이번에는 유화로 부탁해요','입력칸에 아래 문장을 적으세요.','같은 사진의 다른 느낌을 비교해요.','gemini-type',[66,472,227,43],'같은 사진을 유화 그림으로 바꿔줘.'],
    ['보내기 화살표를 누르세요','오른쪽 화살표를 누르세요.','만화·유화 중 마음에 드는 결과를 골라요.','gemini-type',[299,474,42,42]]);

  function screenFigure(step){
    var name=step[3], photo=photos[name], width=photo?photo[0]:360, height=photo?photo[1]:700;
    var src='assets/galaxy/'+name+(photo?'.png':'.svg');
    var figure=document.createElement('figure'), panel=document.createElement('div'), screen=document.createElement('div');
    panel.className='galaxy-panel'; screen.className='galaxy-screen'; screen.style.aspectRatio=width+' / '+height;
    var img=document.createElement('img'); img.src=src; img.width=width; img.height=height;
    img.alt=step[0]+' — '+(photo?'삼성 공식 실제 화면 예시':'버튼 위치 화면 재현도');
    screen.appendChild(img); panel.appendChild(screen);
    if(step[4]){
      var box=step[4], mark=document.createElement('span'); mark.className='galaxy-target'; mark.setAttribute('aria-hidden','true');
      mark.style.cssText='left:'+box[0]/width*100+'%;top:'+box[1]/height*100+'%;width:'+box[2]/width*100+'%;height:'+box[3]/height*100+'%';
      screen.appendChild(mark);
      var zoom=document.createElement('div'), label=document.createElement('b'), crop=document.createElement('div');
      zoom.className='galaxy-zoom'; label.textContent='이 부분을 보세요'; crop.className='galaxy-crop';
      var cw=Math.max(box[2],55), ch=Math.max(box[3],50), scale=Math.min(172/cw,132/ch);
      crop.style.width=cw*scale+'px'; crop.style.height=ch*scale+'px';
      var enlarged=document.createElement('img'); enlarged.src=src; enlarged.alt='';
      enlarged.style.cssText='width:'+width*scale+'px;height:'+height*scale+'px;left:'+(-Math.max(0,box[0]-(cw-box[2])/2)*scale)+'px;top:'+(-Math.max(0,box[1]-(ch-box[3])/2)*scale)+'px';
      crop.appendChild(enlarged); zoom.append(label,crop); panel.appendChild(zoom);
    }
    var caption=document.createElement('figcaption');
    caption.textContent=photo?'삼성 제공 실제 화면 · 갤럭시 S25 예시':(name.indexOf('kiosk')===0?'수업용 키오스크 연습 그림':'화면 재현도 · 사진과 문구는 수업용 예시');
    if(photo){var link=document.createElement('a');link.href=source;link.target='_blank';link.rel='noopener';link.textContent='원본 안내';caption.append(' · ',link);}
    figure.append(panel,caption); return figure;
  }
  // 기존 글자 수정값을 복원한 뒤 실행하므로 저장 대상의 위치와 순서를 유지한다.
  document.querySelectorAll('#slideStage > .slide').forEach(function(slide){
    var kicker=slide.querySelector('.slide-kicker'), match=kicker&&kicker.textContent.match(/·\s*(\d+)차시\s*·/);
    if(!match||!lessons[match[1]]||Number(match[1])===13)return;
    var session=Number(match[1]); slide.classList.add('guide-overview');
    var details=document.createElement('details'), summary=document.createElement('summary');
    details.className='teacher-notes';summary.textContent='기존 상세 교안 · 강사용 대본 펼치기';details.appendChild(summary);
    ['.timebar','.steps','.tip'].forEach(function(selector){details.appendChild(slide.querySelector(selector));});
    var prep=document.createElement('p');prep.className='guide-prep';prep.textContent='수업 전: 갤럭시의 앱 실행과 로그인을 강사와 확인해 주세요. 한 장에 한 동작씩 따라갑니다.';
    var start=document.createElement('button');start.className='btn btn-primary';start.type='button';start.textContent='갤럭시 화면 보며 따라하기 →';
    start.addEventListener('click',function(){window.goNext();});slide.append(prep,start,details);
    var previous=slide;
    lessons[session].forEach(function(step,index){
      var page=document.createElement('section');page.className='slide visual-step';page.dataset.guideSession=session;page.dataset.guideStep=index+1;
      var meta=document.createElement('div');meta.className='guide-meta';meta.textContent=Math.ceil(session/2)+'회차 · '+session+'차시 · 갤럭시 따라하기 '+(index+1)+' / '+lessons[session].length;
      var heading=document.createElement('h3');heading.textContent=step[0];
      var content=document.createElement('div');content.className='guide-content';
      var words=document.createElement('div');words.className='guide-words';
      var action=document.createElement('p');action.className='guide-action';action.textContent=step[1];words.appendChild(action);
      if(step[5]){var prompt=document.createElement('blockquote');prompt.className='guide-prompt';prompt.textContent=step[5];words.appendChild(prompt);}
      var check=document.createElement('p'),label=document.createElement('b'),done=document.createElement('span');
      check.className='guide-check';label.textContent='이렇게 보이면 성공';done.textContent=step[2];check.append(label,done);words.appendChild(check);
      var help=document.createElement('p');help.className='guide-help';help.textContent='같은 화면이 안 보이면 다음으로 넘기지 말고 손을 들어주세요.';words.appendChild(help);
      content.append(screenFigure(step),words);page.append(meta,heading,content);previous.after(page);previous=page;
    });
  });
})();
