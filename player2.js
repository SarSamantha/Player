class Lecteur{
	constructor(option){
		this.parent = option.parent;
		this.position = option.position || "relative";
		this.width = option.width || "100%";
		this.height = option.height || "100%";
		this.top = option.top || "0px";
		this.left = option.left || "0px";
		this.controleColor = option.controleColor || "rgb(30,30, 66)";
		this.progressionColor = option.progressionColor ||"#BF0EE6";
		this.volume = option.volume || "20";
		this.lienVideo = option.lienVideo;
	}

	init(){
let container = document.createElement('div'); 
container.setAttribute("id","container");
container.style.position = this.position; //POSITION
container.style.width= this.width; //WIDTH
container.style.height= this.height; //HEIGHT
container.style.top=this.top; //TOP
container.style.left=this.left; //LEFT
if(this.parent){
	document.getElementById(this.parent).appendChild(container); //PARENT DANS 'PARENT'
}
else{
	document.querySelector('body').appendChild(container);
}

let allvid = document.createElement('div'); 
allvid.setAttribute("id","allvid");
allvid.style.position ="absolute";
document.getElementById('container').appendChild(allvid);

let video = document.createElement('video');
video.setAttribute("id","video");
video.src = this.lienVideo; //LIEN
video.style.height="100%";
video.style.width="100%";
video.style.volume=this.volume; //VOLUME
document.getElementById('allvid').appendChild(video);

let controle = document.createElement('div');
controle.setAttribute("id","controle");
controle.style.backgroundColor=this.controleColor; //COLOR CONTROLE
controle.style.position="relative";
document.getElementById('allvid').appendChild(controle);
controle.style.marginTop="-"+(controle.getBoundingClientRect().height + 4)+ "px";

let bleu =document.createElement('div');
bleu.setAttribute("id","bleu");
bleu.style.width="100%";
bleu.style.height="4px";
bleu.style.backgroundColor=this.controleColor; // COLOR CONTROLE
document.getElementById('controle').appendChild(bleu);

let barreProgression = document.createElement('div');
barreProgression.setAttribute("id","barreProgression");
barreProgression.style.position = "absolute";
barreProgression.style.flexDirection="row";
document.getElementById('controle').appendChild(barreProgression);

let progression = document.createElement('div');
progression.setAttribute("id","progression");
progression.style.position ="absolute";
progression.style.top="0px";
progression.style.backgroundColor=this.progressionColor; //COLOR PROGRESSION
document.getElementById('barreProgression').appendChild(progression);

let buttons = document.createElement('div');
buttons.setAttribute("id","buttons");
document.getElementById('controle').appendChild(buttons);

let playPauseButton = document.createElement('button');
playPauseButton.setAttribute("id","playPauseButton");
playPauseButton.style.position="relative";
document.getElementById('buttons').appendChild(playPauseButton);

let iconPlayPause = document.createElement('i');
iconPlayPause.setAttribute("id","iconPlayPause");
iconPlayPause.classList.add("fa","fa-play");
document.getElementById('playPauseButton').appendChild(iconPlayPause);

let videoTime = document.createElement('span');
videoTime.setAttribute("id","videoTime");
videoTime.style.position="relative";
document.getElementById('buttons').appendChild(videoTime);

let sonButton = document.createElement('button');
sonButton.setAttribute("id","sonButton");
sonButton.classList.add("on");
sonButton.style.position="relative";
document.getElementById('buttons').appendChild(sonButton);

let sonIcon = document.createElement('i');
sonIcon.setAttribute("id","sonIcon");
sonIcon.classList.add("fa","fa-volume-off");
document.getElementById('sonButton').appendChild(sonIcon);

let barreSon = document.createElement('input');
barreSon.setAttribute("id","barreSon");
barreSon.setAttribute("type","range");
barreSon.setAttribute("min","0");
barreSon.setAttribute("max","100");
barreSon.setAttribute("value","20");
barreSon.setAttribute("step","1");
barreSon.style.position="relative";
document.getElementById('buttons').appendChild(barreSon);

let fullScreenButton = document.createElement('button');
fullScreenButton.setAttribute("id","fullScreenButton");
fullScreenButton.classList.add("close");
fullScreenButton.style.position="absolute";
document.getElementById('buttons').appendChild(fullScreenButton);

let fullScreenIcon = document.createElement('i');
fullScreenIcon.setAttribute("id","fullScreenIcon");
fullScreenIcon.classList.add("fa","fa-expand");
fullScreenIcon.style.color="white";
document.getElementById('fullScreenButton').appendChild(fullScreenIcon);

let fullScreenButtonUnder = document.createElement('button');
fullScreenButtonUnder.setAttribute("id","fullScreenButtonUnder");
fullScreenButtonUnder.classList.add("close");
fullScreenButtonUnder.style.position="absolute";
document.getElementById('allvid').appendChild(fullScreenButtonUnder);

let fullScreenIconUnder = document.createElement('i');
fullScreenIconUnder.setAttribute("id","fullScreenIconUnder");
fullScreenIconUnder.classList.add("fa","fa-expand");
document.getElementById('fullScreenButtonUnder').appendChild(fullScreenIconUnder);

const self = this;
window.addEventListener('load', function(){
			self.resizeVideo();
			self.timer();
		});
window.addEventListener('resize',function(){
			self.resizeVideo();
		});

playPauseButton.addEventListener('click',function(){
			self.playAndPause();
		});
video.addEventListener('click',function(){
			self.playAndPause();
		});
document.addEventListener('keyup',function(e){
			if(e.which == 32)
			{
				self.playAndPause();
			}
		});
video.addEventListener('timeupdate',function(){
			self.timeFlow();
			self.timer();
		});

barreProgression.addEventListener('click',function(e){
			self.clickOnBar(e);
		});

barreSon.addEventListener('input', function(){
			self.niveauVolume();
		});

sonButton.addEventListener('click',function(){
			self.mute();
		});

document.addEventListener('mousemove',function(e){
			self.disparitionControle(e);
		});

allvid.addEventListener('mousemove',function(){
			self.apparitionControle();
		});

fullScreenButton.addEventListener('click',function(){
			self.fullScreen();
		});

fullScreenButtonUnder.addEventListener('click',function(){
			self.fullScreen();
		});
	}

	resizeVideo(){
	let allvid=document.getElementById('allvid');
	let video=document.getElementById('video'); 
	let videoLargeur = video.getBoundingClientRect().width;
 	let videoHauteur = video.getBoundingClientRect().height;
 	let container = document.getElementById('container');
 	let fenetreHauteur = container.getBoundingClientRect().height;
 	let fenetreLargeur = container.getBoundingClientRect().width;
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
	allvid.style.width = videoLargeur + 'px';
	allvid.style.height = videoHauteur +'px';
}

playAndPause(){
	let video=document.getElementById('video');
	let iconPlayPause=document.getElementById('iconPlayPause');
	if(video.paused){
		video.play(); 
		iconPlayPause.classList.remove("fa","fa-play");
		iconPlayPause.classList.add("fa","fa-pause");
	}
	else{
		video.pause();
		iconPlayPause.classList.remove("fa","fa-pause");
		iconPlayPause.classList.add("fa","fa-play");
	}
}

timeFlow(){
	let video= document.getElementById('video');
	let barreProgression= document.getElementById('barreProgression');
	let progression= document.getElementById('progression');
	let iconPlayPause=document.getElementById('iconPlayPause');
	let timePercent = (video.currentTime*100)/video.duration;
	progression.style.width = timePercent + "%";
	if(progression.offsetWidth == barreProgression.offsetWidth)
		{
			iconPlayPause.classList.remove("fa","fa-pause");
			iconPlayPause.classList.add("fa","fa-play");
		}
}

clickOnBar(e){
	let video=document.getElementById('video');
	let barreProgression=document.getElementById('barreProgression');
	let progression=document.getElementById('progression');
		let positionXLeftBarre = barreProgression.getBoundingClientRect().left; //position bord gauche barre progression
		let positionXCursor = e.pageX; // position curseur dans la page
		let cursorOnBarre= positionXCursor - positionXLeftBarre; // position X curseur par rapport au bord gauche de la barre
		let tailleBarre= barreProgression.offsetWidth; // taille complete de la barre
		let percent = (cursorOnBarre*100)/tailleBarre; //pourcentage de l'endroit ou le curseur se trouve
		let tempsVideo= (percent*video.duration)/100; // pourcentage du temps de la video par rapport au curseur
		video.currentTime = tempsVideo; //placement au bon moment dans la video
		progression.style.width = percent +"%";// placement de la barre de progression par rapport au pourcentage
}
	
timer(){
	let video= document.getElementById('video');
	let videoTime =document.getElementById("videoTime");
	let durationHour = Math.floor(video.duration/3600);
	if(durationHour<10){
		durationHour = "0"+durationHour;
	}
	let durationMin= Math.floor((video.duration-durationHour*3600)/60);
	if(durationMin<10)
		{
			durationMin = "0"+ durationMin;
		}
	let durationSec = Math.floor(video.duration-(durationMin*60));
	if(durationSec<10)
		{
			durationSec = "0"+ durationSec;
		}
	
	let currentHour = Math.floor(video.currentTime/3600);
	if(currentHour<10)
		{
			currentHour = "0"+ currentHour;
		}
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

let current;
let duration;
	if(video.duration>=3600){
		current = currentHour +":"+currentMin + ":" + currentSec;
		duration = durationHour + ":"+ durationMin+":"+durationSec;
	}
	else{
		current = currentMin + ":" + currentSec;
		duration = durationMin+":"+durationSec;
	}
	
	videoTime.textContent=current +"/" + duration;
}

niveauVolume(){
	let video= document.getElementById('video');
	let barreSon= document.getElementById('barreSon');
	let niveauSon = barreSon.value;
	console.log(niveauSon);
	video.volume = niveauSon/100;
}

mute(){
	let video= document.getElementById('video');
	let sonButton= document.getElementById('sonButton');
	let sonIcon= document.getElementById('sonIcon');
	if(sonButton.className === 'on'){ //si la classe de sonButton est on
			video.volume=0; //prop : Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
			sonIcon.style.color ="red";
			sonButton.className = "off";
		}
		else if(sonButton.className === 'off'){
			let niveauSon = barreSon.value;
			video.volume = niveauSon/100;
			sonIcon.style.color ="white";
			sonButton.className ="on";
		}
}

disparitionControle(e){
let allvid= document.getElementById('allvid');
let controle= document.getElementById('controle');
let fullScreenButtonUnder = document.getElementById('fullScreenButtonUnder');
let Xcursor = e.clientX;
let Ycursor = e.clientY;
let XscreenLeft = allvid.getBoundingClientRect().left; 
let XscreenRight = XscreenLeft + allvid.getBoundingClientRect().width;
let YscreenTop = allvid.getBoundingClientRect().top;
let YscreenBottom = YscreenTop + allvid.getBoundingClientRect().height;
if((allvid.getBoundingClientRect().width<250) && ((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)))
	{
		controle.style.visibility="hidden";
		fullScreenButtonUnder.style.visibility="visible";
		window.cache = setTimeout(function(){
			fullScreenButtonUnder.style.visibility='hidden'}, 3500);
	}
else if((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)) //hover
	{
			controle.style.visibility = 'visible';
			window.cacher = setTimeout(function(){
			controle.style.visibility='hidden'; 
			allvid.style.cursor='none'}, 3500);
	}
else
	{
	controle.style.visibility='hidden'; 
	fullScreenButtonUnder.style.visibility="hidden";
	}
}

apparitionControle(){
	let allvid= document.getElementById('allvid');
	let controle= document.getElementById('controle');
	let fullScreenButtonUnder = document.getElementById('fullScreenButtonUnder');
	clearTimeout(window.cacher);
	clearTimeout(window.cache);
	controle.style.visibility='visible'; 
	allvid.style.cursor='default';
}

fullScreen()
	{
		let allvid= document.getElementById('allvid');
		let fullScreenButton= document.getElementById('fullScreenButton');
		let fullScreenIcon= document.getElementById('fullScreenIcon');
		if(fullScreenButton.className ==='close')
		{
			window.normalSize = allvid.getBoundingClientRect();
			fullScreenIcon.classList.remove("fa","fa-expand");
			fullScreenIcon.classList.add("fa","fa-compress");
			fullScreenButton.classList.remove("close");
			fullScreenButton.classList.add("open");
			fullScreenIconUnder.classList.remove("fa","fa-expand");
			fullScreenIconUnder.classList.add("fa","fa-compress");
			fullScreenButtonUnder.classList.remove("close");
			fullScreenButtonUnder.classList.add("open");
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
		else if(fullScreenButton.className ==='open'){
			allvid.style.width = window.normalSize.width + 'px';
			allvid.style.height = window.normalSize.height + 'px';
			fullScreenIcon.classList.remove("fa","fa-compress");
			fullScreenIcon.classList.add("fa","fa-expand");
			fullScreenButton.classList.remove("open");
			fullScreenButton.classList.add("close");
			fullScreenIconUnder.classList.remove("fa","fa-compress");
			fullScreenIconUnder.classList.add("fa","fa-expand");
			fullScreenButtonUnder.classList.remove("open");
			fullScreenButtonUnder.classList.add("close");
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
}


const lecteur = new Lecteur({lienVideo:"myVideo.mp4"});
lecteur.init();