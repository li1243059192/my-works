
//淡入淡出效果；
(function () {
    var $oImg=$(".header_slides img");
    console.log($oImg)
    var $oOli=$(".header_slides ol li");
    var $oDiv=$(".header_slides")
    var tid=null;
    var now=0;
    move();
    function move() {
        // $oImg.each(function (index) {
        //     if(now!=index){
        //         $oImg.eq(index).stop().fadeOut(500).css("zIndex",1);
        //     }else {
        //         $oImg.eq(index).stop().fadeIn(500).css("zIndex",2);
        //     }
        // })
        console.log(now);
        $oImg.stop().fadeOut(500);
        $oImg.eq(now).stop().fadeIn(500);
        $oOli.eq(now).addClass("cur").siblings().removeClass("cur");
    }
    autoplay();
    function autoplay() {
        tid=setInterval(function () {
            now++;
            if(now>2){
                now=0;
            }
            move();
        },2000)
    }
    $oDiv.hover(function () {
        clearInterval(tid);
    },function () {
        autoplay();
    })
    $oOli.click(function () {
        now=$oOli.index(this); //把索引值直接传给now.然后执行move函数很巧妙；
        move();
    })

})();



(function () {
    var $oLi=$(".middle_top li");
    $oLi.click(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
    })

})();