

// var get={
//     byId:function (id) {
//         return document.getElementById(id);
//     },
//     byTagname:function (tagname,obj) {
//         return (obj||document).getElementsByTagName(obj);
//     },
//     byClassname:function (classname,object) {
//         var arr=[];
//         var reg=new RegExp("(^| )"+classname+"( |$)");
//         var allarr=document.getElementsByTagName("*");
//         for(var i=0;i<allarr.length;i++){
//             if(reg.test(allarr[i].className)){
//                 arr.push(allarr[i]);
//             }
//         }
//         return arr;
//     }
// };

var get = {
    byId:function(id){
        return document.getElementById(id);
    },

    byClsName:function(clsName,oParent){
        var newClass=[];
        var reg=new RegExp("(^| )"+clsName+"( |$)");
        var allEl = this.byTagName("*",oParent);
        for(var i=0;i<allEl.length;i++)reg.test(allEl[i].className)&&newClass.push(allEl[i]);
        return newClass;
    },
    byTagName:function(el,obj){
        return ( obj||document).getElementsByTagName(el);
    }
}




function myfirstchild(Obj){
    if (Obj.firstElementChild) {
        return Obj.firstElementChild;
    }else{
        return Obj.firstChild;
    }
}
function mylastchild(Obj){
    if (Obj.lastElementChild) {
        return Obj.lastElementChild;
    }else{
        return Obj.lastChild;
    }
};