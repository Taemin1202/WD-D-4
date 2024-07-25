$(function(){
    $(".main > li").hover(function(){
        $(".sub").stop().show(100);
    }, function(){
        $(".sub").stop().hide(100);
    })
})