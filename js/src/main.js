(function($){

var winW = $(window).outerWidth();
  var gnb = $('.gnb');
  var gnbW = gnb.outerWidth(true);
 gnb.css({left:'50%', marginLeft: -gnbW/2});


$(window).on('resize',function() {
    var nW = $(window).outerWidth();
    if(winW !== nW){
      location.reload();
    }
});

if(winW < 480){}

else{
   var bWrap     = $('.banner_wrap');
  var banner    = bWrap.children('div');
  var bannerLen = banner.length;
  var btn = $('.btn').children('button');

  // 순서의 배치를 조정하자!
  // 뒤에오는 요소가 뒤로배치
  // 버튼을 클릭할때마다 반복해서 z-index값을 재할당 처리
  // 자주 사용하는 기능이므로, 함수처리하자!
  var ReZindex = function() {
    banner    = bWrap.children('div');
    var i = 1;
    for(; i <= bannerLen; i+=1){
      var j = i * 10;
      banner.eq(bannerLen-i).css({zIndex:j});
    }
    banner.stop().fadeIn();
  };
  ReZindex();

  // 오른쪽 버튼을 클릭시 바로뒤의 내용이 나타나게 만들기
  // 사라진 배너영역은 맨뒤로 배치
var bannerfade = function(){
  banner.eq(0).stop().fadeOut(1000,function(){
    $(this).appendTo(bWrap);
    ReZindex();
  });
};

  btn.on('click',function(e) {
    e.preventDefault();
    var next = $(this)[0] === $('.next_btn')[0];

    if(next){
      bannerfade();
    }else{
      banner.eq(-1).stop().fadeOut(function(){
        $(this).prependTo(bWrap);
        ReZindex();
      });
    }
  });

setInterval(function(){
  bannerfade();
},2000);


  var ib = $('.infoBox');
  var ibTop = ib.offset().top; 
  // console.log(bbTop);
  var brH = $(window).outerHeight();
  var myscrollH_01 = ibTop - (brH/2);
  var iwLi = $('.info_wrap').find('li');
      iwLi.addClass('on'); 

    $(window).on('scroll',function(){
    var mys = $(this).scrollTop();

    if(mys >= myscrollH_01) {                                                                    
      $('.info_wrap').find('li').addClass('active',function(){
         setTimeout(function(){ iwLi.eq(0).removeClass('on');  },1000);
         setTimeout(function(){ iwLi.eq(1).removeClass('on');  },1500);
         setTimeout(function(){ iwLi.eq(2).removeClass('on');  },2000);   
      });          
    }else{  
       $('.info_wrap').find('li').removeClass('active');
    }

  });

  var pw = $('.product_wrap');
  var pwTop = pw.offset().top; 
  // console.log(bbTop);
  var brH = $(window).outerHeight();
  var myscrollH_02 = pwTop - (brH/2);


    $(window).on('scroll',function(){
    var mys2 = $(this).scrollTop();

    if(mys2 >= myscrollH_02) {
      $('.pro_01').addClass('active');
      $('.pro_text_01').addClass('active');
    }else{  
       $('.pro_01').removeClass('active');
       $('.pro_text_01').removeClass('active');
    }

    if(mys2 >= myscrollH_02+200) {
      $('.pro_02').addClass('active');
      $('.pro_text_02').addClass('active');
    }else{
       $('.pro_02').removeClass('active');
       $('.pro_text_02').removeClass('active');
    }


    if(mys2 >= myscrollH_02+600) {
      $('.pro_03').addClass('active');
      $('.pro_text_03').addClass('active');
    }else{
       $('.pro_03').removeClass('active');
       $('.pro_text_03').removeClass('active');
    }
  });



}
})(jQuery);