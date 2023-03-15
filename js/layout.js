//제이쿼리 시작할 때 반드시 사용해야하는 코드
$(document).ready(function(){});

//다른 방식의 작성코드
$(function(){
  
  //(재료 준비) => 오브젝트 등록, 효과에 필요한 값(속도)
  
  var $allWrap = $('#all-wrap'),
      $open = $allWrap.find('#open-btn'),
      $header =$allWrap.find('#header'),
      $main = $allWrap.find('#main');
  
  var $gnb = $header.find('.gnb'),
      $section = $main.find('section');
  
  var sp = 1000,//1000 == 1초
      easing = 'easeOutElastic';
  //움직임 Bounce Elastic Expo Sine
  
  /*1
  버튼을 클릭하면 {
    =>버튼 숨김
    =>헤더 작동
    =>본문 작동
  }
  */
  $open.click(function(){
    //버튼 숨김 
    //hide(), show()
    //fadeOut(), fadeIn(), fadeToggle()
    $open.fadeOut();
    
    //헤더 작동
    $header.addClass('love');
    //본문 작동
    $main.addClass('love');
    //abbclass {love}
  })

  /*2
  본문을 클릭하면 {
    =>버튼 보임
    =>헤더 초기화(처음상태로)
    =>본문 초기화(처음상태로)
  }
  */
  $main.click(function(){
    $open.fadeIn();
    $header.removeClass();
    $main.removeClass();
  })
  
  /*3
  메뉴 앵커를 클릭하면 {
    =>사용자 클릭한 앵커의 순서값을 알 수 있다.
    =>현재 보이는 섹션을 숨김
    =>저장된 순서값과 같은 섹션 작동시키기!!
  }
  goepmwkrehdtlzlaus tnfywmdeh qkedmf tn dlTek.
  해더르르 작동시키면 수료증을 만들수있다
  */
  $gnb.on('click', 'a', function(){
    //"$(this)"?
    //3개의 a요소 중에서 클릭 된 앵커 자신을 의미
    var i = $(this).index();
    //console.log(i);
    
    $section.removeClass('love');
    $section.eq(i).addClass('love');
    
    $open.fadeIn();
    $header.removeClass();
    $main.removeClass();
     
    //클릭한 앵커만 켜놓기!!
    $gnb.children().removeClass();
    $(this).addClass('active');
    
  })
  
});







