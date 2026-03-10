
document.addEventListener("DOMContentLoaded", function () {
const video = document.getElementById("videoInventario");
if(video){
video.addEventListener("click", function(){

video.muted = false;

});

}
});
function ativarSom(){
const video = document.getElementById("videoInventario");
if(video){
video.muted = false;
}
}