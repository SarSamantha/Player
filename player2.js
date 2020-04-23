$(function(){
	
//actions
$(window).on('load', dimensionVideo);
$(window).resize(dimensionVideo);
$('#playPauseButton').click(playPause);
$('video').click(playPause);
$(document).keyup(function(e){
	if(e.which == 32)
	{
		playPause();
	}
});
$('video').on('timeupdate', ecoulement);
$('#barreProgression').click(clickOnBar);
$(window).on('load', timer);
$('video').on('timeupdate',timer);
$('#barreSon').on('input', volume);
$('#sonButton').click(mute);
$(document).mousemove(disparitionSouris);
$("#allvid").mousemove(apparitionSouris);
$('#fullScreenButton').click(fullScreen);


//fonctions
// taille de la video.
function dimensionVideo(){
	let videoLargeur = $('video').width();
 	let videoHauteur = $('video').height();
 	let fenetreHauteur = window.innerHeight*0.9;
 	let fenetreLargeur = window.innerWidth*0.9;
 	let proportionY = fenetreHauteur/videoHauteur;
 	let proportionX = fenetreLargeur/videoLargeur;
 	if(videoLargeur>fenetreLargeur && videoHauteur>fenetreHauteur){ 
 		if(fenetreLargeur>fenetreHauteur){
 			videoHauteur = videoHauteur*proportionX;
 			videoLargeur = videoLargeur*proportionX;
 		}
 		else{
 			videoHauteur = videoHauteur*proportionY;
 			videoLargeur = videoLargeur*proportionY;
 		}
 	}
 	else if(videoLargeur>fenetreLargeur && videoHauteur<fenetreHauteur) {
 		videoHauteur = videoHauteur*proportionX;
 		videoLargeur = videoLargeur*proportionX;
 	}
 	else 
 	{
 		videoHauteur = videoHauteur*proportionY;
 		videoLargeur = videoLargeur*proportionY;
 	}	
	$('#allvid').css({'width': videoLargeur + 'px','height': videoHauteur +'px'});
}

//Mettre en pause ou  play la video
function playPause(){
	if(video.paused){
		$('video').trigger('play'); //triger = déclencheur. il doit etre déclencher par un événement, et execute un ensemble d'action, ici .play() mais qui est une fonction du DOM et ne peut etre utilisé via jquery. autre solution: $('#video').get(0).play()  où get(0) sert a obtenir l'element du DOM
		$('#iconPlayPause').removeClass('fa fa-play').addClass('fa fa-pause');
		$('#infoPlayPause').removeClass('fa fa-play').addClass('fa fa-pause');
		$('#bouleProgress').css('right', '-4px');
	}
	else{
		$('video').trigger('pause');
		$('#iconPlayPause').removeClass('fa fa-pause').addClass('fa fa-play');
		$('#infoPlayPause').removeClass('fa fa-pause').addClass('fa fa-play');
		$('#bouleProgress').css('right', '-4px');
	}
}

//Defilement progression video
function ecoulement(){
	let video = document.getElementById("video");
	let timePercent = (video.currentTime*100)/video.duration;
	$('#progression').css('width', timePercent +"%");
	$('#bouleProgress').css('right', '-4px');
	if($('#progression').width() == $('#barreProgression').width())
		{
			$('#iconPlayPause').removeClass('fa fa-pause').addClass('fa fa-play');
		}
}

//clique sur la barre de progression
function clickOnBar(e){
	let video = document.getElementById("video");
		let positionXLeftBarre = $('#barreProgression').offset().left; //position bord gauche barre progression
		let positionXCursor = e.pageX; // position curseur dans la page
		let cursorOnBarre= positionXCursor - positionXLeftBarre; // position X curseur par rapport au bord gauche de la barre
		let tailleBarre= $('#barreProgression').width(); // taille complete de la barre
		let percent = (cursorOnBarre*100)/tailleBarre; //pourcentage de l'endroit ou le curseur se trouve
		let tempsVideo= (percent*video.duration)/100; // pourcentage du temps de la video par rapport au curseur
		video.currentTime = tempsVideo; //placement au bon moment dans la video
		$('#progression').css('width', percent +"%");// placement de la barre de progression par rapport au pourcentage
		$('#bouleProgress').css('right', '-4px');
}
	
// ecoulement du temps en sec
function timer(){
	let video = document.getElementById('video');
	let durationMin= Math.floor(video.duration/60);
	if(durationMin<10)
		{
			durationMin = "0"+ durationMin;
		}
	let durationSec = Math.floor(video.duration-(durationMin*60));
	if(durationSec<10)
		{
			durationSec = "0"+ durationSec;
		}
	let duration = durationMin+":"+durationSec;
	let currentMin = Math.floor(video.currentTime/60);
	if(currentMin<10)
		{
			currentMin = "0"+ currentMin;
		}
	let currentSec = Math.floor(video.currentTime-(currentMin*60));
	if(currentSec<10)
		{
			currentSec = "0"+ currentSec;
		}
	let current = currentMin + ":" + currentSec;
	$('#videoTime').text(current +"/" + duration);
}

//Réglage volume son
function volume(){
	let niveauSon = $('#barreSon').val();
	$('video').prop('volume', niveauSon/100);
}

//Bouton Mute	
function mute(){
	if($('#sonButton').is('.on')){ //si la classe de sonButton est on
			$('video').prop('volume', 0); //prop : Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
			$('#sonIcon').css("color","red");
			$('#sonButton').removeClass('on').addClass('off');
		}
		else if($('#sonButton').is('.off')){
			let niveauSon = $('#barreSon').val();
			$('video').prop('volume', niveauSon/100);
			$('#sonIcon').css("color","white");
			$('#sonButton').removeClass('off').addClass('on');
		}
}

//disparition barre de défilement
function disparitionSouris(e){
	let Xcursor = e.pageX;
let Ycursor = e.pageY;
let XscreenLeft = $('#allvid').offset().left; 
let XscreenRight = XscreenLeft + $('#allvid').width();
let YscreenTop = $('#allvid').offset().top;
let YscreenBottom = $('#allvid').offset().top + $('#allvid').height();
if((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)) //hover
	{
			window.cacher = setTimeout(function(){
			$('#controle').css('visibility','hidden'); 
			$('#allvid').css('cursor','none')}, 3500);
	}
else
	{
	$('#controle').css('visibility','hidden'); 
	}
}
//apparition barre de défilement
function apparitionSouris(){
	clearTimeout(window.cacher);
		$('#controle').css('visibility','visible');
		$('#allvid').css('cursor','default');
}

//FullScreen 
	function fullScreen()
	{
		let allvid = document.getElementById("allvid");
		if($('#fullScreenButton').is('.close'))
		{
			window.normalSize = allvid.getBoundingClientRect();
			$('#fullScreenIcon').removeClass('fa fa-expand').addClass('fa fa-compress');
			$('#fullScreenButton').removeClass('close').addClass('open');
			if(allvid.requestFullscreen){
				allvid.requestFullscreen();
			}
			else if(allvid.mozRequestFullScreen){
				allvid.mozRequestFullScreen();
			}
			else if(allvid.webkitRequestFullscreen){
				allvid.webkitRequestFullscreen();
			}
			else if(allvid.msRequestFullscreen){
				allvid.msRequestFullscreen();
			}
		}
		else if($('#fullScreenButton').is('.open')){
			allvid.style.width = window.normalSize.width + 'px';
			allvid.style.height = window.normalSize.height + 'px';
			$('#fullScreenIcon').removeClass('fa fa-compress').addClass('fa fa-expand');
			$('#fullScreenButton').removeClass('open').addClass('close');
			if(document.exitFullscreen){
				document.exitFullscreen();
			}
			else if(document.mozCancelFullScreen){
				document.mozCancelFullScreen();
			}
			else if(document.webkitExitFullscreen){
				document.webkitExitFullscreen();
			}
			else if(document.msExitFullscreen){
				document.msExitFullscreen();
			}
		}
	}
});































