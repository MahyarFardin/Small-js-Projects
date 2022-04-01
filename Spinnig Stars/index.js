$("img").mouseover((event)=>{
    $(event.target).css({"rotate":"180deg" ,"transition":"1s"});
    if($("h1").html() != "This was all for now!"){
        $("h1").html("Now try clicking :)");
    }
})

$("img").mouseout((event)=>{
    $(event.target).css({"rotate":"-180deg" ,"transition":"1s"});
})

var background=0;
$("img").click((event)=>{
    if (background===0) {
        background = 1;
        $("body").css({"background-color":"white"});
        $("img").attr("src","images/index2.png");
        $("img").css({"border-radius":"20%","width":"9%"});
        $("h1").html("This was all for now!");
        $("h1").css("color","rgba(34,34,34,255)");
    }
    else{
        background = 0;
        $("body").css({"background-color":"rgba(34,34,34,255)"});
        $("img").attr("src","images/index.png");
        $("h1").html("Why are not you leaving :\\ go over");
        $("h1").css("color","white");
    }
})