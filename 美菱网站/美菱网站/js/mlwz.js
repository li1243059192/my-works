
//注册框
(function () {
    var oRegbg=get.byId("mlbg");
    var oRegbox=get.byId("reg");
    var oRegister=get.byId("register");
    var oSpan=get.byTagName("span",oRegister)[0];
    oRegbox.onclick=function () {
        oRegbg.style.display="block";
        oRegister.style.display="block";
    }
    oSpan.onclick=function () {
        oRegbg.style.display="none";
        oRegister.style.display="none";
    }
})();

//循环图
(function () {
    var oDiv=get.byId("mlmaintop");
    var oUl=get.byTagName("ul",oDiv)[0];
    console.log(oUl);
    var oBt=get.byTagName("botton",oDiv)[0];
    console.log(oBt);
    var key=0;


    function move(obj,width,dir,time){
        if(dir==1){
            var speed=obj.offsetLeft/10;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(speed!=0){
                obj.style.left=obj.offsetLeft+speed+"px";
            }else {
                obj.removeChild(mylastchild(obj));
                obj.style.left=0;
                key=0;
                clearInterval(time);
            }
        }
    }

    oBt.onclick=function () {
        if(key==0){
            var objright=mylastchild(oUl).innerHTML;
            oUl.innerHTML+="<li>"+objright+"</li>";
            oUl.insertBefore(mylastchild(oUl),myfirstchild(oUl));
            oUl.style.left=-mylastchild(oUl).offsetWidth+"px";
            key=1;
        }
        var timer=null;
        clearInterval(timer);
        var timer=setInterval(function () {
                move(oUl,myfirstchild(oUl).offsetWidth,1,timer)
            },30)
    }


})();

//3d效果；
(function () {
    $('.mlmainmid_png').carousel({curDisplay: 0, autoPlay: true, interval: 3000});
})();
