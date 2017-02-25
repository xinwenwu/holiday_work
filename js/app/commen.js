/**
 * Created by Administrator on 2017/2/8 0008.
 */
$(function() {
    //顶部
    $("#my_bag").mouseenter(function () {
        $("#myBag").show()
        $("#my_bag").css("background", "#fff")
        $("#my_bag>a").css("border-bottom", "none")
        $("#my_bag>a").css("background-position", "-215px -75px")
        $("#myBag").css("border-top", "none")
        $("#my_bag>a").css("color", "#f78407")
    })
    $("#my_bag").mouseleave(function () {
        $("#myBag").hide()
        $("#my_bag").css("background", "none")
        $("#my_bag>a").css("color", "#d7d7d7")
        $("#my_bag>a").css("background-position", "-215px -40px")
    })
    $("#my_xiu").mouseenter(function () {
        $("#myXiu_menu").show()
        $("#my_xiu").css("background", "#fff")
        $("#my_xiu").css("border", "1px solid #d7d7d7")
        $("#my_xiu>a").css("background-position", "right -143px")
        $("#myXiu_menu").css("border-top", "none")
        $("#my_xiu>a").css("color", "#f78407")
    })
    $("#my_xiu").mouseleave(function () {
        $("#myXiu_menu").hide()
        $("#my_xiu").css("background", "none")
        $("#my_xiu>a").css("color", "#d7d7d7")
        $("#my_xiu").css("border", "none")
        $("#my_xiu>a").css("background-position", "right -108px")
    })
    //点击返回顶部
    $("#back_top").click(function(){
        $("html,body").stop().animate({
            scrollTop:"0"
        },500)
    })
    $("#back_top").mouseenter(function(){
        $("#back_top").css("background-position","-68px -172px")
    })
    $("#back_top").mouseleave(function(){
        $("#back_top").css("background-position","0 -172px")
    })
    //点击关闭
    $(".close").click(function(){
        $(".backtop").hide();
    })
    $(".close").mouseenter(function(){
        $(".close").css({
            background:"#df3c34",
            color:"#fff"
        })
    })
    $(".close").mouseleave(function(){
        $(".close").css({
            background:"#fff",
            color:"#f00"
        })
    })
    $(".service").mouseenter(function(){
        $(".service").css("background-position","-68px 0")
    })
    $(".service").mouseleave(function(){
        $(".service").css("background-position","0 0")
    })
    $(".buy").mouseenter(function(){
        $(".buy").css("background-position","-68px -57px")
    })
    $(".buy").mouseleave(function(){
        $(".buy").css("background-position","0 -57px")
    })
    $(".mail").mouseenter(function(){
        $(".mail").css("background-position","-68px -115px")
    })
    $(".mail").mouseleave(function(){
        $(".mail").css("background-position","0 -115px")
    })
})