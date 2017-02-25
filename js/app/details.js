/**
 * Created by Administrator on 2017/2/10 0010.
 */
$(function(){
    $("#smallPic dd").mouseenter(function(){
        $(this).stop().addClass("dc").siblings().stop().removeClass("dc");
        $("#imgPicDiv>img").hide();
        $("#imgPicDiv>img").eq($(this).index()).show();
    })
    /*$("#smallPic dd").mouseenter(function(){
        var x = $(this).index()+1
           $(".imgPic").attr("src","images/simg"+x+".jpg");
    })*/
    //放大镜
    $.fn.magnifying = function(){
        var that = $(this),
            $imgCon = that.find('.big_map'),//正常图片容器
            $Img = $imgCon.find('img'),//正常图片，还有放大图片集合

            $Drag = that.find('#showing'),//拖动滑动容器
            $show = that.find('.bigPicDiv'),//放大镜显示区域
            $showIMg = $show.find('img'),//放大镜图片
            //$ImgList = that.find('#smallPic >dd> a>img'),
            multiple = $show.width()/$Drag.width();//倍数

        $imgCon.mousemove(function(e){
            $Drag.css('display','block');
            $show.css('display','block');
            //获取坐标的两种方法
            // var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
            //  iY = e.clientY - this.offsetTop - $Drag.height()/2,
            var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
                iY = e.pageY - $(this).offset().top - $Drag.height()/2,
                MaxX = $imgCon.width()-$Drag.width(),
                MaxY = $imgCon.height()-$Drag.height();
            /*这一部分可代替下面部分，判断最大最小值
             var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
             DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
             $Drag.css({left:DX+'px',top:DY+'px'});
             $showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

            iX = iX > 0 ? iX : 0;
            iX = iX < MaxX ? iX : MaxX;
            iY = iY > 0 ? iY : 0;
            iY = iY < MaxY ? iY : MaxY;
            $Drag.css({left:iX+'px',top:iY+'px'});
            $showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
            //return false;
        });
        $imgCon.mouseout(function(){
            $Drag.css('display','none');
            $show.css('display','none');
            //return false;
        });

        /*$ImgList.click(function(){
            var NowSrc = $(this).attr('src');
            $Img.attr('src',NowSrc);
            $(this).parent().addClass('dc').siblings().removeClass('dc');
        });*/
    }
    $("#imgPicDiv>img").mouseenter(function(){
        $(".bigPicDiv>img").stop().hide();
        $(".bigPicDiv>img").stop().eq($(this).index()).show();
    })
    $(".p_map").magnifying();
})