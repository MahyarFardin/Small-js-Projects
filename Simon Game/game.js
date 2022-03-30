var buttonColours = ["red", "blue", "green", "yellow"];
var computerPattern=[];
var userPattern=[];

function animation(id){
    $("#"+id).addClass("pressed");

    setTimeout(()=>{$("#"+id).removeClass("pressed");}, 100);
}

function playSound(id){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }

}

$(".btn").click((event)=>{
    animation(event.target.id);
    playSound(event.target.id);
})