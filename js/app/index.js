/**
 * Created by Administrator on 2017/1/18 0018.
 */
$(function(){
    //顶部
    $("#my_bag").mouseenter(function(){
        $("#myBag").show()
        $("#my_bag").css("background","#fff")
        $("#my_bag>a").css("border-bottom","none")
        $("#my_bag>a").css("background-position","-215px -75px")
        $("#myBag").css("border-top","none")
        $("#my_bag>a").css("color","#f78407")
    })
    $("#my_bag").mouseleave(function(){
        $("#myBag").hide()
        $("#my_bag").css("background","none")
        $("#my_bag>a").css("color","#d7d7d7")
        $("#my_bag>a").css("background-position","-215px -40px")
    })
    $("#my_xiu").mouseenter(function(){
        $("#myXiu_menu").show()
        $("#my_xiu").css("background","#fff")
        $("#my_xiu").css("border","1px solid #d7d7d7")
        $("#my_xiu>a").css("background-position","right -143px")
        $("#myXiu_menu").css("border-top","none")
        $("#my_xiu>a").css("color","#f78407")
    })
    $("#my_xiu").mouseleave(function(){
        $("#myXiu_menu").hide()
        $("#my_xiu").css("background","none")
        $("#my_xiu>a").css("color","#d7d7d7")
        $("#my_xiu").css("border","none")
        $("#my_xiu>a").css("background-position","right -108px")
    })
    //导航栏固定
    $(window).scroll(function(){
        var $this = $(this);
        var targetTop = $(this).scrollTop();
        var height = $(window).height();
        if(targetTop>135){
            $(".fixed_top").show();
            $(".navbox").addClass("navbox_fixed").show();
        }else{
            $(".fixed_top").hide();
            $(".navbox").removeClass("navbox_fixed");
        }
    })
    //轮播图
    var _banner = [{img:"images/banner.jpg"},{img:"images/banner2.jpg"}]
   // var _homebox = $("#homebox")
    function loadJson(){
        /*var _div = $("<div>");
        _div.addClass("banner")
        _div.appendTo($("#homebox"))
        var _ul = $("<ul>");
        _ul.addClass("homebanner");
        _ul.appendTo($(".banner"));*/
        var _divnum = $("<div>");
        _divnum.addClass("num");
        _divnum.appendTo($(".banner"))
        var _numbox = $("<ul>");
        _numbox.addClass("numbox")
        _numbox.appendTo(_divnum);
        for(var i=0;i<_banner.length;i++)   {
           /* var _li = $("<li>");
            _li.appendTo(_ul);
            _li.addClass("clone");*/
           /* var _a =$("<a>",{href:"javascript"});
            _a.appendTo(_li);*/
            var _img = $("<img>");
            _img.attr("src",_banner[i].img);
            _img.appendTo($(".banner"));
            var _li2 = $("<li>");
            //_li2.addClass("on");
            _li2.appendTo(_numbox);
        }
        /*var swiper = new Swiper(".homebanner", {
            loop:true,
            pagination: ".numbox>li",
            paginationClickable: true,
            spaceBetween: 30,
            autoplay: 5000
        });*/
    }
    loadJson();
    var clearTime = null;
    var $index= 0;
    var $qianindex =0;
    function scrollPlay(){
        $(".numbox li").eq($index).addClass("on").siblings().removeClass("on");
        if($index == 0 && $qianindex == 1){
            $(".banner img").eq($qianindex).stop(true, true).animate({
                "left": "-1200px"
            });
            $(".banner img").eq($index).css("left", "1200px").stop(true, true).animate({
                "left": "0"
            });
        }else if($index == 5 && $qianindex == 0){
            $(".banner img").eq($qianindex).stop(true, true).animate({
                "left": "-1200px"
            });
            $(".banner img").eq($index).css("left", "1200px").stop(true, true).animate({
                "left": "0"
            });
        }else if($index > $qianindex){
            $(".banner img").eq($qianindex).stop(true, true).animate({
                "left": "-1200px"
            });
            $(".banner img").eq($index).css("left", "1200px").stop(true, true).animate({
                "left": "0"
            });
        }else if($index < $qianindex) {
            $(".banner img").eq($qianindex).stop(true, true).animate({
                "left": "-1200px"
            });
            $(".banner img").eq($index).css("left", "1200px").stop(true, true).animate({
                "left": "0"
            });
        }
    }
    function autoPlay() {
        // 使用setInterval(fn, timeout)函数进行间隔调用
        clearTime = setInterval(function() {
            $index++;// 默认当前索引自增1，播放下一张图片
            if ($index > 1) {// 如果已经是最后一张图片
                $index = 0;// 重新设置要播放的图片索引为第一张图片$index=0
                $qianindex = 1;// 重新设置上一张图片索引为最后一张图片$qiandex=5
            }
            // 调用函数执行图片滚动动画
            scrollPlay();
            // 更新索引，将当前图片索引值，赋值给上一张图片索引值
            $qianindex = $index;
        }, 2000);

    }
    // 开始自动播放
    autoPlay();
   /* var _timer = null;
    _timer = setInterval(show,6000);
    function show(){
        for(var index=0;index<2;index++){
        if (index == 1){
            index == 0;
        }
        $(".homebanner").animate({left:-1200*index});
    }
    }*/
    //子导航
    $(".nav li").mouseenter(function(){
        $(".submenu").show()
    })
    $(".nav li").mouseleave(function(){
        $(".submenu").hide()
    })
    //shortcut
    /*$(".home_shortcut>a").hover(function(){
        $(".home_shortcut>a").animate({
            left:-10
        })
    })*/
    //尖货推荐
    var _imgs = [{img:"images/goods_a1.jpg"},{img:"images/goods_a2.jpg"},
        {img:"images/goods_a3.jpg"},{img:"images/goods_a4.jpg"},
        {img:"images/goods_a5.jpg"},{img:"images/goods_a6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);
            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").mouseenter(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })

    var _imgs = [{img:"images/goods_b1.jpg"},{img:"images/goods_b2.jpg"},
        {img:"images/goods_b3.jpg"},{img:"images/goods_b4.jpg"},
        {img:"images/goods_b5.jpg"},{img:"images/goods_b6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);

            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").hover(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })

    var _imgs = [{img:"images/goods_c1.jpg"},{img:"images/goods_c2.jpg"},
        {img:"images/goods_c3.jpg"},{img:"images/goods_c4.jpg"},
        {img:"images/goods_c5.jpg"},{img:"images/goods_c6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);
            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").hover(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })

    var _imgs = [{img:"images/goods_d1.jpg"},{img:"images/goods_d2.jpg"},
        {img:"images/goods_d3.jpg"},{img:"images/goods_d4.jpg"},
        {img:"images/goods_d5.jpg"},{img:"images/goods_d6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);

            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").hover(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })

    var _imgs = [{img:"images/goods_e1.jpg"},{img:"images/goods_e2.jpg"},
        {img:"images/goods_e3.jpg"},{img:"images/goods_e4.jpg"},
        {img:"images/goods_e5.jpg"},{img:"images/goods_e6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);
            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").hover(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })

    var _imgs = [{img:"images/goods_f1.jpg"},{img:"images/goods_f2.jpg"},
        {img:"images/goods_f3.jpg"},{img:"images/goods_f4.jpg"},
        {img:"images/goods_f5.jpg"},{img:"images/goods_f6.jpg"},
    ];
    function _pic(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_goods"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);

            _img.appendTo(_a)
        }
    }
    _pic();
    $(".home_goods>ul>li").hover(function(){
        $(this).stop().animate({
            opacity:0.7
        })
    })
    $(".home_goods>ul>li").mouseleave(function(){
        $(this).stop().animate({
            opacity:1
        })
    })
    //热荐专题
    var _imgs = [{img:"images/beats_06.jpg",img1:"images/beats_06.png"},{img:"images/beats_01.jpg",img1:"images/beats_01.png"},
        {img:"images/beats_02.jpg",img1:"images/beats_02.png"},{img:"images/beats_03.jpg",img1:"images/beats_03.png"},
        {img:"images/beats_04.jpg",img1:"images/beats_04.png"},{img:"images/beats_05.jpg",img1:"images/beats_05.png"},
    ];
    function _pics(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_beats"))
        for(var i=0;i<_imgs.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_imgs[i].img);
            _img.appendTo(_a);
            var _p = $("<p>");
            _p.appendTo(_li);
            var _img1 = $("<img>");
            _img1.attr("src",_imgs[i].img1);
            _img1.appendTo(_p);
        }
    }
    _pics();
    /*_pics(_imgs);
    _pics(_imgs2);
    _pics(_imgs3);
    _pics(_imgs4);
    _pics(_imgs5);
    _pics(_imgs6);
    _pics(_imgs7);*/
    $(".home_beats>ul>li>a>img").mouseenter(function(){
        $(this).stop().animate({
            width:620,
            height:320
        })
    })
    $(".home_beats>ul>li>a>img").mouseleave(function(){
        $(this).stop().animate({
            width:600,
            height:300
        })
    })
    $(".home_auto").mouseenter(function(){
        $(".home_auto").stop().animate({opacity:0.7})
    })
    $(".home_auto").mouseleave(function(){
        $(".home_auto").stop().animate({opacity:1})
    })
    //发现好货
    var _finds = [{img:"images/20170105_001.jpg"},{img:"images/20170105_002.jpg"},{img:"images/20170105_003.jpg"},{img:"images/20170105_004.jpg"},
        {img:"images/20170105_005.jpg"},{img:"images/20170112_006.jpg"},{img:"images/20170105_007.jpg"},{img:"images/20170105_008.jpg"},
        {img:"images/20170105_009.jpg"},{img:"images/20170105_010.jpg"},{img:"images/20170105_011.jpg"},{img:"images/20170105_012.jpg"},
        {img:"images/20170105_013.jpg"},{img:"images/20170105_014.jpg"},{img:"images/20170105_015.jpg"},{img:"images/20170105_016.jpg"}
    ];
    function _find(){
        var _iul = $("<ul>");
        _iul.appendTo($(".home_find"))
        for(var i=0;i<_finds.length;i++){
            var _li = $("<li>");
            _li.appendTo(_iul);
            var _a = $("<a>",{href:"javascript"});
            _a.appendTo(_li);
            var _img = $("<img>");
            _img.attr("src",_finds[i].img);
            _img.appendTo(_a);
        }
    }
    _find();
})

