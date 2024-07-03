/*트렌지션 일지정지 및 플레이*/
$(".main_play").hide();
$(".main_pause").click(function(){
    main.autoplay.stop();
    (".main_play").show();
    (".main_pause").hide();
})

$(".main_play").click(function(){
    main.autoplay.start();
    (".main_play").hide();
    (".main_pause").show();
})
