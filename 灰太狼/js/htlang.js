


var tid=null;
var tid2=null;
$(".footer").click(function () {
    $(".rule").stop().fadeIn(300);
})
$(".rule .stop").click(function () {
    $(".rule").stop().fadeOut(300);
})
$(".start").click(function () {
    $(this).stop().fadeOut(100);
    $(".time").animate({"width":0},20000,function () {
        $(".restart").stop().fadeIn(300);
        stopwolfmoved();
        function stopwolfmoved(){
            $("img").remove();
            clearInterval(tid);
        }
        $(".restart span").click(function () {
            $(".restart").stop().fadeOut(100);
            $(".time").animate({"width":180},10,function (){
                wolfmoved();
                $(".time").animate({"width":0},20000,function (){
                })
            })
        })
    })
    wolfmoved();
    function wolfmoved(){
        var wolf_1 = ['images/h0.png', 'images/h1.png', 'images/h2.png', 'images/h3.png',
            'images/h4.png', 'images/h5.png', 'images/h6.png', 'images/h7.png',
            'images/h8.png', 'images/h9.png'];
        var wolf_2 = ['images/x0.png', 'images/x1.png', 'images/x2.png', 'images/x3.png',
            'images/x4.png', 'images/x5.png', 'images/x6.png', 'images/x7.png',
            'images/x8.png', 'images/x9.png'];
        var arrPos = [
            {left: "100px", top: "115px"},
            {left: "20px", top: "160px"},
            {left: "190px", top: "142px"},
            {left: "105px", top: "193px"},
            {left: "19px", top: "221px"},
            {left: "202px", top: "212px"},
            {left: "120px", top: "275px"},
            {left: "30px", top: "295px"},
            {left: "209px", top: "297px"}
        ];
        var changeindex = Math.round(Math.random() * 8);
        var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
        window.indexps = 0;
        window.indexpsend=5;
        tid = setInterval(function () {
            if (indexps > indexpsend) {
                $("img").remove();
                clearInterval(tid);
                wolfmoved();
            }
            $wolfimg.attr("src", wolfType[indexps]);
            indexps++;
        }, 300);
        var $wolfimg = $("<img src=''>");
        $wolfimg.attr("src", wolfType[indexps]);
        $(".htlang").append($wolfimg);
        $("img").css({
            position: "absolute",
            left: arrPos[changeindex].left,
            top: arrPos[changeindex].top
        })
        socre($wolfimg);
    }
    function socre($wolfimg) {
        $wolfimg.one("click",function () {
            // alert("123132");
            window.indexps=5;
            window.indexpsend=9;
            var $src=$(this).attr("src");
            var $flag=$src.indexOf("h")>=0;
            if($flag){
                $("h2").text(parseInt($("h2").text())-10);
            }else {
                $("h2").text(parseInt($("h2").text())+10);
            }
        })

    }
})