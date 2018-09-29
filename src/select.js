$(document).ready(function(){
    var num;
    $('#header a.works').hover(function(){
        $('#box').slideDown(300);
    },function(){
        $('#box').hide();
    });
//    hidden-box hover e
    $('.hidden-box').hover(function(){
        $(this).show();
    },function(){
        $(this).slideUp(200);
    });
});
