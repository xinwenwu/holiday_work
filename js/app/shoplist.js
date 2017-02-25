/**
 * Created by Administrator on 2017/2/7 0007.
 */
$(function () {
    var _imgs= [{img:"images/g1.jpg",ename:"Emporio Armani",name:"男士EA7logo图案长袖夹克",price:"2870",size:"可售配置",s:"S",m:"M",l:"L"},
        {img:"images/g2.jpg",ename:"Emporio Armani",name:"男士纯棉棒球夹克",price:"2800",size:"可售配置",s:"S",m:"M",l:"l"},
        {img:"images/g3.jpg",ename:"Emporio Armani",name:"男士刺绣图案长袖羊毛棒球夹克",price:"2830",size:"可售配置",s:"S",m:"M",l:"L"},
        {img:"images/g4.jpg",ename:"Emporio Armani",name:"男士刺绣图案长袖羊毛棒球夹克",price:"2830",size:"可售配置",s:"S",m:"M",l:"L"},
        {img:"images/g5.jpg",ename:"Emporio Armani",name:"男士刺绣图案长袖羊毛棒球夹克",price:"2830",size:"可售配置",s:"S",m:"M",l:"L"},
        {img:"images/g6.jpg",ename:"Emporio Armani",name:"男士刺绣图案长袖羊毛棒球夹克",price:"2830",size:"可售配置",s:"S",m:"M",l:"L"}]
    function loadJson(_pic){
        var _div = $("<div>");
        _div.addClass("zt_bigpic")
        _div.appendTo($(".jia"));
        var _ul = $("<ul>");
        _ul.addClass("ztul");
        _ul.appendTo(_div);
        for(var i=0;i<_pic.length;i++){
            var _li = $("<li>");
            _li.addClass("big_pic");
            var _ol = $("<ol>");
            _ol.appendTo(_li);
            var _li1 = $("<li>");
            _li1.addClass("zt_tus");
            _li1.appendTo(_ol);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li1);
            var _img = $("<img>");
            _img.attr("src",_pic[i].img);
            _img.appendTo(_a);

            var _div1 = $("<div>");
            _div1.addClass("zytus_size");
            _div1.appendTo(_li1);
            var _p = $("<p>");
            _p.addClass("zytus_size_tit");
            _p.text(_pic[i].size);
            _p.appendTo(_div1);
            var _ul1 = $("<ul>");
            _ul1.addClass("zytus_size_lie");
            _ul1.appendTo(_div1);
            var _lii1 = $("<li>");
            _lii1.addClass("ssl_item");
            _lii1.text(_pic[i].s)
            _lii1.appendTo(_ul1);
            var _lii2 = $("<li>");
            _lii2.addClass("ssl_item");
            _lii2.text(_pic[i].m)
            _lii2.appendTo(_ul1);
            var _lii3 = $("<li>");
            _lii3.addClass("ssl_item");
            _lii3.text(_pic[i].l)
            _lii3.appendTo(_ul1);

            var _li2 = $("<li>");
            _li2.addClass("tit");
            _li2.text(_pic[i].ename);
            _li2.appendTo(_ol);
            var _li3 = $("<li>");
            _li3.addClass("tit");
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li3);
            _a.text(_pic[i].name);
            _li3.appendTo(_ol);
            var _li4 = $("<li>");
            _li4.addClass("price");
            _li4.appendTo(_ol);
            var _span = $("<span>");
            _span.appendTo(_li4);
            _span.text(_pic[i].price);
            _li.appendTo($(".ztul"));
        }

    }
    loadJson(_imgs);
    //黑色导航栏固定
    $(window).scroll(function(){
        var $this = $(this);
        var targetTop = $(this).scrollTop();
        var height = $(window).height();
        if(targetTop>576){
            $(".black_nav").addClass("black_nav_fixed");
        }else{
            $(".black_nav").removeClass("black_nav_fixed");
        }
    })
    //楼层效果
    $(window).scroll(function(){
        var ling = $(document).scrollTop();
        var sli = $(".black_nav>ul>li")
        if(ling>614 && ling<1732){
            sli.eq(0).addClass("on")
        }else{
            sli.eq(0).removeClass("on")
        }
        if(ling>1732 && ling<2854){
            sli.eq(1).addClass("on")
        }else{
            sli.eq(1).removeClass("on")
        }
        if(ling>2854 && ling<3973){
            sli.eq(2).addClass("on")
        }else{
            sli.eq(2).removeClass("on")
        }
        if(ling>3973 && ling<5094){
            sli.eq(3).addClass("on")
        }else{
            sli.eq(3).removeClass("on")
        }
        if(ling>5094 && ling<6214){
            sli.eq(4).addClass("on")
        }else{
            sli.eq(4).removeClass("on")
        }
        if(ling>6214 && ling<7333){
            sli.eq(5).addClass("on")
        }else{
            sli.eq(5).removeClass("on")
        }
        if(ling>7333 && ling<8454){
            sli.eq(6).addClass("on")
        }else{
            sli.eq(6).removeClass("on")
        }
        if(ling>8454 && ling<9573){
            sli.eq(7).addClass("on")
        }else{
            sli.eq(7).removeClass("on")
        }
        if(ling>9573 && ling<10693){
            sli.eq(8).addClass("on")
        }else{
            sli.eq(8).removeClass("on")
        }
        if(ling>10693 && ling<11815){
            sli.eq(9).addClass("on")
        }else{
            sli.eq(9).removeClass("on")
        }
        if(ling>11815 && ling<12934){
            sli.eq(10).addClass("on")
        }else{
            sli.eq(10).removeClass("on")
        }
        if(ling>12934 && ling<14053){
            sli.eq(11).addClass("on")
        }else{
            sli.eq(11).removeClass("on")
        }
        if(ling>14053 && ling<15173){
            sli.eq(12).addClass("on")
        }else{
            sli.eq(12).removeClass("on")
        }
        if(ling>15173 && ling<16293){
            sli.eq(13).addClass("on")
        }else{
            sli.eq(13).removeClass("on")
        }
        if(ling>16293 && ling<17384){
            sli.eq(14).addClass("on")
        }else{
            sli.eq(14).removeClass("on")
        }
        console.log(ling)
        sli.eq(0).click(function() {
            $("html,body").stop().animate({
                scrollTop: "615"
            },100)
        })
        sli.eq(1).click(function() {
            $("html,body").stop().animate({
                scrollTop: "1737"
            },100)
        })
        sli.eq(2).click(function() {
            $("html,body").stop().animate({
                scrollTop: "2855"
            },100)
        })

        sli.eq(3).click(function() {
            $("html,body").stop().animate({
                scrollTop: "3974"
            },100)
        })
        sli.eq(4).click(function() {
            $("html,body").stop().animate({
                scrollTop: "5095"
            },100)
        })
        sli.eq(5).click(function() {
            $("html,body").stop().animate({
                scrollTop: "6215"
            },100)
        })
        sli.eq(6).click(function() {
            $("html,body").stop().animate({
                scrollTop: "7334"
            },100)
        })
        sli.eq(7).click(function() {
            $("html,body").stop().animate({
                scrollTop: "8455"
            },100)
        })
        sli.eq(8).click(function() {
            $("html,body").stop().animate({
                scrollTop: "9574"
            },100)
        })
        sli.eq(9).click(function() {
            $("html,body").stop().animate({
                scrollTop: "10694"
            },100)
        })
        sli.eq(10).click(function() {
            $("html,body").stop().animate({
                scrollTop: "11816"
            },100)
        })
        sli.eq(11).click(function() {
            $("html,body").stop().animate({
                scrollTop: "12935"
            },100)
        })
        sli.eq(12).click(function() {
            $("html,body").stop().animate({
                scrollTop: "14054"
            },100)
        })
        sli.eq(13).click(function() {
            $("html,body").stop().animate({
                scrollTop: "15174"
            },100)
        })
        sli.eq(14).click(function() {
            $("html,body").stop().animate({
                scrollTop: "16294"
            },100)
        })
    })
    //划过图片鼠标效果
    $(".big_pic").mouseenter(function(){
        $(this).stop().addClass("cur");
        $(this).find(".zytus_size").animate({top:"-73px"},"fast")
        //$(".zytus_size").stop().animate({top:"-73px"},"fast")
    })
    $(".big_pic").mouseleave(function(){
        $(this).stop().removeClass("cur");
        $(this).find(".zytus_size").animate({top:"0"},"fast")
    })
})