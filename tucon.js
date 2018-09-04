function onMenuClick(x){
 x.classList.toggle("change")
 $('#overlay').slideToggle(500);
 if(document.getElementById("overlay").style.height == 0){}
}

function toggle(){
    $('#overlay').css("height", "100%");
}