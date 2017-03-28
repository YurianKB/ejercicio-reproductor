var miAudio = document.getElementById("cancion")

function reproducir() {
	miAudio.play();
}
function pausa() {
	miAudio.pause();
}
function adelantar(){
	miAudio.currentTime+=10;
}
function pausa_play(){
	if (miAudio.paused){
		miAudio.play();
	} else {
		miAudio.pause();
	}
}
function volumen(){
	miAudio.volume = document.getElementById("points").value/100;
}
