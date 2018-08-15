
//taobao 搜索
(function () {
    var $oA=$(".search_right ul li a");
    // console.log($oA);
    var $oText=$(".search_right form .sp6");
    var $Img=$(".search_right img");

    $oA.click(function () {
        $(this).addClass("sp8").parent().siblings().children().removeClass("sp8");
        $(this).css({color:"white"}).parent().siblings().children().css({color:"#404040"})
    })
    $oText.focus(function(){
//            console.log(index)
        if($(this).val()==0){
            $(this).val("");
            $Img.fadeOut(200);
        }
    })
    $oText.blur(function(){
        if($(this).val("")){
            $Img.fadeIn(200);
        }
    })




})();


//二级菜单
(function(){
    var $oLi=$(".menu_top ul li");
    var $oOl=$(".menu_middle_left ol");
    $oLi.each(function(index){
        $(this).mouseenter(function(){
        $(this).children().addClass("current");
        $(this).siblings().children().removeClass("current");
        $oOl.eq(index).fadeIn(100).siblings().fadeOut(100);
    })
    })

})();

//下拉菜单；
(function(){
    var $oEm=$(".mybox em");
    var $oUl=$(".mybox ul");
    var $oULi=$(".mybox ul li a")
    var $oLi=$(".mybox");
    var $oA=$(".mybox .girl");
//    console.log($oUl)
    $oEm.each(function(index){
        $(this).click(function () {
                // $oUl.hide();
                $oUl.eq(index).slideToggle(200);
            })
        $oLi.mouseleave(function () {
            $oUl.stop().slideUp();
        })
        })
    $oULi.click(function () {
        $oA.text($(this).text());
        console.log($(this).text());
        // console.log($oA.text($oULi.text()));
    })

})();


//轮播图；
(function () {
    var $oUl=$(".showtime ul");
    var $oLi=$(".showtime ul li");
    var $oOli=$(".showtime ol li");
    var $oOl=$(".showtime ol");
    var tid=null;
    var speed=0;
    function autoplay(){
        tid=setInterval(function () {
            speed+=-2;
            if(speed<=-1080){
                speed=0;
            }
           $oUl.css(
               "marginLeft",speed
            )
        },50)
    }
    autoplay();
    $oLi.hover(function () {
        clearInterval(tid);
        $(this).siblings().stop().fadeTo(100,0.5);
    },function () {
        $(this).siblings().stop().fadeTo(100,1);
        autoplay();
    })
    $oOli.hover(function () {
        $(this).css({
            color:"white",
            background:"black"
        })
    },function () {
        $(this).css({
            color:"#3E3E3E",
            background:"white"
        })
    })
    $oOl.hover(function () {
        clearInterval(tid);
    },function () {
        autoplay();
    });


$oOli.each(function (index) {
    $(this).click(function () {
        if(index==0){
            $oUl.css("marginLeft",0);
        }else{
            $oUl.css("marginLeft",-540);
        }
    })
})
})();
    //倒计时；
(function () {
    var $oSt1=$(".countdown .time1 strong");
    var $oSt2=$(".countdown .time2 strong");
    var $oSt3=$(".countdown .time3 strong");
    var $text1=$(".countdown .time1 strong").text();
    var $text2=$(".countdown .time2 strong").text();
    var $text3=$(".countdown .time3 strong").text();
    var tid=null;
    autoplay();
    function autoplay(){
        tid=setInterval(function () {
            $text3-=1;
            if($text3<0){
                $text2-=1;
                if($text2<0){
                    $text1-=1;
                    if($text1<0){
                        return  $text1=00;
                                $text2=00;
                                $text3=00;
                    }else{
                        if($text1<10){
                            $text2=59;
                            $text3=59;
                            return $oSt1.html("0"+$text1);
                        }else {
                            $text2=59;
                            $text3=59;
                            return $oSt1.html(""+$text1);
                        }
                    }
                }else{
                    if($text2<10){
                         $text3=59;
                return $oSt2.html("0"+$text2);
                    }else{
                        $text3=59;
                return $oSt2.html(""+$text2);
                    }

                }
            }else {
                if($text3<10){
                    return $oSt3.html("0"+$text3);
                }else {
                    return $oSt3.html(""+$text3);
                }
            }

        },1)
    }



})();


    //侧边栏滑动；
    (function () {

        var $oNav=$(".main_right_nav");
        $(window).scroll(function(){
            var $topp=$(window).scrollTop();
            var offsetTop = 60+ $topp ;
            $oNav.stop().animate({top: offsetTop},500);
//            alert($(window).scrollTop());
        })
    })();


//蒙版效果；
(function () {

    tab($(".brand_middle ul li"));
    tab($(".dress_middle ul li"));
    tab($(".cheongsam_middle ul li"));
    var tid=null;
    var timer=null;
    function tab($oLi){
        $oLi.mouseenter(function () {
            clearTimeout(timer)
            //index=$(this).index();
            index = $oLi.index(this); //把this加到函数内部更准确
           pp=$(this);
                tid=setTimeout(function(){
//                    pp.stop().slideDown(300);
                    $oLi.eq(index).find('ol').stop().slideDown();
                    pp.siblings().find("img").stop().fadeTo(100,0.5);
//                    console.log(index);
//                    console.log($oLi.eq(index).find('ol'));
               },100);
            // $(this).siblings().find("img").stop().fadeTo(100,0.5);
        }).mouseleave(function () {
                clearTimeout(tid);
            $(this).find('ol').stop().slideUp();
            $(this).siblings().find("img").stop().fadeTo(500,1);


        });


        

}
})();


//sd效果；
// (function () {
//     $('.wedding_classification').carousel({curDisplay: 0, autoPlay: true, interval: 3000});
// })();










