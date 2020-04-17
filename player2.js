$(function(){
// taille de la video.
 $(window).on('load', function(){
 	let videoTailleX = $('video').width();
 	let videoTailleY=$('video').height();
 	$('#allvid').css({'width': videoTailleX + 'px','height': videoTailleY +'px'});
 });

//Mettre en pause ou  play la video
 	function playPause()
 	{
		if(video.paused){
			$('#video').trigger('play'); 
			$('#iconPlayPause').removeClass('fa fa-play').addClass('fa fa-pause');
		}
		else{
			$('#video').trigger('pause');
			$('#iconPlayPause').removeClass('fa fa-pause').addClass('fa fa-play');
		}
	}

	$('#playPauseButton').click(playPause);
	$('#video').click(playPause);
	$(document).keyup(function(e)
	{
		if(e.which == 32)
		{
			playPause();
		}
	});

//Defilement de la barre de progression.
	$('video').on('timeupdate', function(){ 
		let video = document.getElementById("video");
		let timePercent = (video.currentTime*100)/video.duration;
		$('#progression').css('width', timePercent +"%");
		if($('#progression').width() == $('#barreProgression').width())
		{
			$('#iconPlayPause').removeClass('fa fa-pause').addClass('fa fa-play');
		}
	});

//clique sur la barre de progression
	$('#barreProgression').click(function(e){
		let video = document.getElementById("video");
		let positionXLeftBarre = $('#barreProgression').offset().left; 
		let positionXCursor = e.pageX; 
		let cursorOnBarre= positionXCursor - positionXLeftBarre; 
		let tailleBarre= $('#barreProgression').width(); 
		let percent = (cursorOnBarre*100)/tailleBarre; 
		let tempsVideo= (percent*video.duration)/100; 
		$('#progression').css('width', percent +"%"); 
		video.currentTime = tempsVideo; 
	});

// ecoulement du temps
$(window).on('load',function(){             //affichage du temps de la video au chargement de la page
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
	$('#videoTime').text("00:00/" + duration);
});
$('video').on('timeupdate',function(){      //écoulement du temps pendant lecture de la video
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
});


//Réglage son
	$('#barreSon').on('input', function(){  
		let niveauSon = $('#barreSon').val();
		$('video').prop('volume', niveauSon/100);
	});

//Bouton Mute	
	$('#sonButton').click(function(){
		if($('#sonButton').is('.on')){ 
			$('video').prop('volume', 0); 
			$('#sonIcon').css("color","red");
			$('#sonButton').removeClass('on').addClass('off');
		}
		else if($('#sonButton').is('.off')){
			let niveauSon = $('#barreSon').val();
			$('video').prop('volume', niveauSon/100);
			$('#sonIcon').css("color","white");
			$('#sonButton').removeClass('off').addClass('on');
		}
	});



//apparition-disparition barre de défilement
let cacher;
$(document).mousemove(function(e){
let Xcursor = e.pageX;
let Ycursor = e.pageY;
let XscreenLeft = $('#allvid').offset().left; 
let XscreenRight = XscreenLeft + $('#allvid').width();
let YscreenTop = $('#allvid').offset().top;
let YscreenBottom = $('#allvid').offset().top + $('#allvid').height();
if((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)) 
	{
			cacher = setTimeout(function(){
			$('#controle').css('visibility','hidden'); 
			$('#allvid').css('cursor','none')}, 3500);
	}
else{
	$('#controle').css('visibility','hidden'); 
}
});

$("#allvid").mousemove(function(){
	clearTimeout(cacher);
		$('#controle').css('visibility','visible');
		$('#allvid').css('cursor','default');
		
});


//FullScreen 
	function fullScreen()
	{
		let allvid = document.getElementById("allvid");
		if($('#fullScreenButton').is('.close'))
		{
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
$('#fullScreenButton').click(fullScreen);

});































