


//搜索框
(function(){
        $oA=$(".menutop ul li");
//        console.log($oA);
        $oText=$(".middle form .inp");
//        console.log($oText)
        var $arr=[
                "我要搜店",
                "我要地址",
                "我要优惠券",
                "我要全文",
                "我要视频"
        ];
        $oA.click(function(){
            index=$(this).index();
            $oText.val($arr[index]);
        })

        $oText.focus(function(){
//            console.log(index)
            if($(this).val()==$arr[index]){
                $(this).val("");
            }
        })
        $oText.blur(function(){
            if($(this).val("")){
                $(this).val($arr[index]);
            }
        })

})();


//视频；
(function () {
    var $oVideo=$(".movie #v1 ");
    $oVideo.hover(function () {
        $(this).attr("controls","controls");
    },function () {
        $(this).removeAttr("controls");
    })
})();







//上下轮播；
(function(){
    var $oDiv=$(".menubotton");
    var $oUl=$(".menubotton ul");
    // console.log($oUl)
    var time=null;
    var arr=[
        {'name':"小明",'time':"6分钟前",'content':"写了一篇新文章：那些灿烂美好瞬间..."},
        {'name':"小李",'time':"5分钟前",'content':"写了一篇新文章：那些痛苦的瞬间..."},
        {'name':"小王",'time':"4分钟前",'content':"写了一篇新文章：那些值得纪念瞬间..."},
        {'name':"小孔",'time':"5分钟前",'content':"写了一篇新文章：那些难忘的瞬间..."},
        {'name':"小子",'time':"6分钟前",'content':"写了一篇新文章：那些美好的瞬间..."},
        {'name':"小白",'time':"7分钟前",'content':"写了一篇新文章：那些记得的瞬间..."},
        {'name':"小红",'time':"8分钟前",'content':"写了一篇新文章：那些特别后悔瞬间..."}
    ];
    str="";
    for(var i=0;i<arr.length;i++){
        str+='<li><em>'+arr[i].name+'</em><strong>'+arr[i].time+"</strong>"+arr[i].content+'</li>';
        // console.log(str);
    }
    $oUl.html(str);
    autoplay();
    function autoplay() {
        time=setInterval(function () {
            move(1);
        },2000)
    }
    var oH=$oUl.height();
    // console.log(oH);
    var now=null;
//    var oH=0;
    function move(index){
        now+=index;
        if(now>arr.length-1){
            now=0;
        $oUl.animate({"top":-oH*now})
        }
        $oUl.animate({"top":-oH*now},2000,"easeBothStrong")
    }
    var $oTop=$(".menubotton .ph17");
    console.log($oTop);
    var $oButton=$(".menubotton .ph18");

    $oDiv.hover(function () {
        clearInterval(time);
    },function () {
        autoplay();
    })

    $oTop.click(function () {
        move(1);
    })
    $oButton.click(function () {
        move(-1);
    })
})();





//论坛变化；
(function(){
    $oLi=$(".top2-right ul li");
    $oLi.mouseenter(function(){
        $(this).addClass("current").siblings().removeClass("current");
    })
})();




//鼠标效果显示；

(function () {
    x=5;
    y=5;
    $(".hundmainmiddle .mouse").mouseenter(function (e) {
            $title=$(this).children().attr("src");
            var mytitle=$("<div id='imgg'><img src='"+$title+"'></div>");
            $("body").append(mytitle);
            $("#imgg").css({
                "top":(e.pageY+y)+"px",
                "left":(e.pageX+x)+"px"
            })
    }).mouseleave(function () {
        $("#imgg").remove();
    }).mousemove(function (e) {
        $("#imgg").css({
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        })
    })

})();


//图片淡入淡出；
(function(){
    var $oTop=$(".top-right-photo")
    var $oLi1=$(".top-right-photo .pho1 li");
    var $oLi2=$(".top-right-photo .pho2 li");
    var $oP=$(".top-right-photo P");
    var $oA=$oLi2.find("a");
    var arr=[
        "丑女照片",
        "美女照片",
        "爸爸去哪儿？"
    ]

//    console.log()
    var tid=null;
    var Now=0;


    moved();
    function moved(){
        $oLi1.each(function(index){
            if(Now!=index){
                $oLi1.eq(index).fadeOut(500).css("zIndex",1);
                $oA.eq(index).removeClass("curr");
            }else{
                $oLi1.eq(index).fadeIn(500).css("zIndex",2);
                $oA.eq(index).addClass("curr");
            }
            $oP.text(arr[Now]);
        })
    }

    $oLi2.click(function(){
        Now=$oLi2.index(this);
        console.log(Now);
        moved()
    })

    autoplay();
    function autoplay(){
        tid=setInterval(function(){
            Now++;
            if(Now==$oLi1.length){
                Now=0;
            }
            moved();
        },2000)
    }
    $oTop.hover(function(){
        clearInterval(tid);
    },function(){
        autoplay();
    })

})();




//切换图片效果；

(function(){
     tab($('.middletop ul'),$('.middlebotton ul'),'click');
    tab($('.coupons1'),$('.coupons2'),'mouseover');
    tab($('.top3hd'),$('.top3main'),'mouseover');
    tab($('.top2-1'),$('.top2-left img'),'click');

      function tab(oList,oContent,event){
          var oUl= oList.children();
          oContent.hide().eq(0).show();
          oUl.each(function(index){
                $(this).on(event,function(){

                    oContent.hide().eq(index).show();
                })
          })
      }

})();



















//图片蒙版；
(function(){
    var $oImg=$(".top3-right ul li img");
    var $oLi=$(".top3-right ul li");
    var $oUl=$(".top3-right ul")
    console.log($oImg)
    $oImg.hover(function(){
        $(this).show();
        $(this).parent().siblings().stop().animate({"opacity":"0.4"},500)
    },function(){
        $(this).parent().siblings().stop().animate({"opacity":"1"},500)
    })
})();
