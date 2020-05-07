class Lecteur{
constructor(option){
	this.name = option.name || "";
	this.parent = option.parent || 'body';
	this.position = option.position || "relative";
	this.width = option.width || "100%";
	this.height = option.height || "100%";
	this.top = option.top || "0px";
	this.left = option.left || "0px";
	this.controleColor = option.controleColor || "rgb(30,30, 66)";
	this.progressionColor = option.progressionColor ||"#BF0EE6";
	this.buttonColor = option.buttonColor || "#73008C";
	this.volume = option.volume || "20";
	this.lienVideo = option.lienVideo;
}


/*-----------------------------------------function execute which be called to create a new player----------------------------------------------------------*/
init(){
	//first of all, there is the creation of elements in the DOM
	let container = document.createElement('div');
	container.setAttribute("id", "container"+this.name);
	container.classList.add("containerClass");
	container.style.position = this.position; 
	container.style.width= this.width; 
	container.style.height= this.height; 
	container.style.top=this.top; 
	container.style.left=this.left; 
	document.querySelector(this.parent).appendChild(container);

	let allvid = document.createElement('div'); 
	allvid.setAttribute("id","allvid"+this.name);
	allvid.classList.add("allvidClass");
	allvid.style.position ="absolute";
	document.getElementById('container'+this.name).appendChild(allvid);

	let video = document.createElement('video');
	video.setAttribute("id","video"+this.name);
	video.setAttribute("tabindex","0");
	video.src = this.lienVideo; 
	video.style.height="100%";
	video.style.width="100%";
	video.style.volume=this.volume; 
	document.getElementById('allvid'+this.name).appendChild(video);

	let controle = document.createElement('div');
	controle.setAttribute("id","controle"+this.name);
	controle.classList.add("controleClass");
	controle.style.backgroundColor=this.controleColor; 
	controle.style.position="relative";
	document.getElementById('allvid'+this.name).appendChild(controle);
	controle.style.marginTop="-"+(controle.getBoundingClientRect().height + 4)+ "px";

	let bleu =document.createElement('div');
	bleu.setAttribute("id","bleu"+this.name);
	bleu.style.width="100%";
	bleu.style.height="4px";
	bleu.style.backgroundColor=this.controleColor; 
	document.getElementById('controle'+this.name).appendChild(bleu);

	let barreProgression = document.createElement('div');
	barreProgression.setAttribute("id","barreProgression"+this.name);
	barreProgression.classList.add("barreProgressionClass");
	barreProgression.style.position = "absolute";
	barreProgression.style.flexDirection="row";
	document.getElementById('controle'+this.name).appendChild(barreProgression);

	let progression = document.createElement('div');
	progression.setAttribute("id","progression"+this.name);
	progression.classList.add("progressionClass");
	progression.style.position ="absolute";
	progression.style.top="0px";
	progression.style.backgroundColor=this.progressionColor; 
	document.getElementById('barreProgression'+this.name).appendChild(progression);

	let ballProgress = document.createElement('div');
	ballProgress.setAttribute("id","ballProgress"+this.name);
	ballProgress.classList.add("ballProgressClass");
	ballProgress.style.position ="absolute";
	ballProgress.style.top="-3px";
	ballProgress.style.right="-4px";
	ballProgress.style.backgroundColor=this.progressionColor; 
	document.getElementById('progression'+this.name).appendChild(ballProgress);

	let buttons = document.createElement('div');
	buttons.setAttribute("id","buttons"+this.name);
	document.getElementById('controle'+this.name).appendChild(buttons);

	let playPauseButton = document.createElement('button');
	playPauseButton.setAttribute("id","playPauseButton"+this.name);
	playPauseButton.classList.add("playPauseButtonClass");
	playPauseButton.style.position="relative";
	playPauseButton.style.borderColor = this.buttonColor;
	document.getElementById('buttons'+this.name).appendChild(playPauseButton);

	let iconPlayPause = document.createElement('i');
	iconPlayPause.setAttribute("id","iconPlayPause"+this.name);
	iconPlayPause.classList.add("iconPlayPauseClass");
	iconPlayPause.classList.add("fa","fa-play");
	document.getElementById('playPauseButton'+this.name).appendChild(iconPlayPause);

	let videoTime = document.createElement('span');
	videoTime.setAttribute("id","videoTime"+this.name);
	videoTime.classList.add("videoTimeClass");
	videoTime.style.position="relative";
	document.getElementById('buttons'+this.name).appendChild(videoTime);

	let sonButton = document.createElement('button');
	sonButton.setAttribute("id","sonButton"+this.name);
	sonButton.classList.add("sonButtonClass", "on");
	sonButton.style.position="relative";
	sonButton.style.borderColor = this.buttonColor;
	document.getElementById('buttons'+this.name).appendChild(sonButton);

	let sonIcon = document.createElement('i');
	sonIcon.setAttribute("id","sonIcon"+this.name);
	sonIcon.classList.add("sonIconClass");
	sonIcon.classList.add("fa","fa-volume-off");
	document.getElementById('sonButton'+this.name).appendChild(sonIcon);

	let barreSon = document.createElement('input');
	barreSon.setAttribute("id","barreSon"+this.name);
	barreSon.classList.add("barreSonClass");
	barreSon.setAttribute("type","range");
	barreSon.setAttribute("min","0");
	barreSon.setAttribute("max","100");
	barreSon.setAttribute("value","20");
	barreSon.setAttribute("step","1");
	barreSon.style.position="relative";
	barreSon.style.background = "linear-gradient(to right, grey,"+this.buttonColor+")";
	document.getElementById('buttons'+this.name).appendChild(barreSon);

	let fullScreenButton = document.createElement('button');
	fullScreenButton.setAttribute("id","fullScreenButton"+this.name);
	fullScreenButton.classList.add("fullScreenButtonClass");
	fullScreenButton.classList.add("close");
	fullScreenButton.style.position="absolute";
	document.getElementById('buttons'+this.name).appendChild(fullScreenButton);

	let fullScreenIcon = document.createElement('i');
	fullScreenIcon.setAttribute("id","fullScreenIcon"+this.name);
	fullScreenIcon.classList.add("fullScreenIconClass");
	fullScreenIcon.classList.add("fa","fa-expand");
	fullScreenIcon.style.color="white";
	document.getElementById('fullScreenButton'+this.name).appendChild(fullScreenIcon);

	let fullScreenButtonUnder = document.createElement('button');
	fullScreenButtonUnder.setAttribute("id","fullScreenButtonUnder"+this.name);
	fullScreenButtonUnder.classList.add("fullScreenButtonUnderClass");
	fullScreenButtonUnder.classList.add("close");
	fullScreenButtonUnder.style.position="absolute";
	document.getElementById('allvid'+this.name).appendChild(fullScreenButtonUnder);

	let fullScreenIconUnder = document.createElement('i');
	fullScreenIconUnder.setAttribute("id","fullScreenIconUnder"+this.name);
	fullScreenIconUnder.classList.add("fullScreenIconUnderClass");
	fullScreenIconUnder.classList.add("fa","fa-expand");
	document.getElementById('fullScreenButtonUnder'+this.name).appendChild(fullScreenIconUnder);

	let sonButtonUnder = document.createElement('button');
	sonButtonUnder.setAttribute("id","sonButtonUnder"+this.name);
	sonButtonUnder.classList.add("sonButtonUnderClass", "on");
	sonButtonUnder.style.position="absolute";
	sonButtonUnder.style.borderColor = this.buttonColor;
	document.getElementById('allvid'+this.name).appendChild(sonButtonUnder);

	let sonIconUnder = document.createElement('i');
	sonIconUnder.setAttribute("id","sonIconUnder"+this.name);
	sonIconUnder.classList.add("sonIconUnderClass");
	sonIconUnder.classList.add("fa","fa-volume-off");
	document.getElementById('sonButtonUnder'+this.name).appendChild(sonIconUnder);
	/*
	which corresponds to (without class for more readability):
		<div id="container">
			<div id="allvid">
				<video id="video" src="this.lienVideo"></video>
				<div id="controle">
					<div id="bleu"></div>
					<div id="barreProgression">
						<div id="progression"><div id="ballProgress"></div></div>
					</div>
					<div id="buttons">
						<button id="playPauseButton"><i id="iconPlayPause"></i></button>
						<span id="videoTime"></span>
						<button id="sonButton"><i id='sonIcon'></i></button>
						<input type="range" id="barreSon" min ="0" max="100" value="20" step="1"></input>
						<button id="fullScreenButton"><i id="fullScreenIcon"></i></button>
					</div>
				</div>
				<button id="fullScreenButtonUnder" ><i id="fullScreenIconUnder"></i></button>
				<button id="sonButtonUnder"><i id='sonIconUnder'></i></button>
			</div>
		</div>
	*/

	//then the function to call depending of the actions of the users.
	const self = this;
	window["OkForResize"+this.name]= false;
	const name=this.name;
	window.addEventListener('load', function(){ //on load, calcul of the size and of the time of video
		self.openSizeVideo();
		self.timer();
	});
	
	window.addEventListener('resize',function(){ //on resize
			self.resizeVideo();
	});

	playPauseButton.addEventListener('click',function(){ //for play and pause
		self.playAndPause();
	});
	
	video.addEventListener('click',function(){
		self.playAndPause();
	});
	
	video.addEventListener('keyup',function(e){
		if(e.which == 32)
			{
					self.playAndPause();
			}
	});
	
	video.addEventListener('timeupdate',function(){ // for passage of time on progress bar and on the timer
		self.timeFlow();
		self.timer();
	});

	barreProgression.addEventListener('click',function(e){ //when the user clicks on the progress bar
		self.clickOnBar(e);
	});

	barreSon.addEventListener('input', function(){ //when the user moves the volume bar
		self.niveauVolume();
	});

	sonButton.addEventListener('click',function(){ //when he clicks on the muteButton
		self.mute();
	});

	sonButtonUnder.addEventListener('click',function(){ 
		self.mute();
	});

	document.addEventListener('mousemove',function(e){ // disappearing and appearing of control bar
		self.disparitionControle(e);
	});

	allvid.addEventListener('mousemove',function(){
		self.apparitionControle();
	});

	fullScreenButton.addEventListener('click',function(){ //fullScreen when  there is control bar (width of video>215px)
		self.fullScreen();
	});

	fullScreenButtonUnder.addEventListener('click',function(){ //fullScreen when there is not control ar (width of video<215px)
		self.fullScreen();
	});

	window["appuyer"+name] = false;
	barreProgression.addEventListener('mousedown', function(){ //for the drag of the ballProgress on the progress bar.
		window["appuyer"+name] = true;
	});	

	document.addEventListener('mousemove', function(e){
			if(window["appuyer"+name]===true){
				self.drag(e);
			}
		});

	document.addEventListener('mouseup', function(e){
			if(window["appuyer"+name] === true){
				window["appuyer"+name] = false;
			}
		});
}

/*--------------------------------------------------------resizing function----------------------------------------------------------------*/
videoSize(){
 	let allvid=document.getElementById('allvid'+this.name);
 	let container = document.getElementById('container'+this.name);
 	let containerHauteur = container.getBoundingClientRect().height;
 	let containerLargeur = container.getBoundingClientRect().width;
 	let videoLargeur = containerLargeur;
 	let videoHauteur = containerHauteur;
 	if(videoHauteur<videoLargeur){
 		videoLargeur = window["ratioVideo"+this.name]*videoHauteur;
 		if(videoLargeur>containerLargeur)
 		{
 			videoLargeur= containerLargeur;
 			videoHauteur= videoLargeur/window["ratioVideo"+this.name];
 		}
 	}
 	else{
 		videoHauteur=videoLargeur/window["ratioVideo"+this.name];
 		if(videoHauteur>containerHauteur)
 		{
 			videoHauteur=containerHauteur;
 			videoLargeur=window["ratioVideo"+this.name]*videoHauteur;
 		}
 	}

	allvid.style.width = videoLargeur + 'px';
	allvid.style.height = videoHauteur +'px';
}

/*----------------------------------------------------resizing when the window is opening---------------------------------------------------*/
openSizeVideo(){
	let video = document.getElementById('video'+this.name);
	let videoLargeur = video.getBoundingClientRect().width;
 	let videoHauteur = video.getBoundingClientRect().height;
 	window["ratioVideo"+this.name] = videoLargeur/videoHauteur;
	const self=this;
	self.videoSize();
	window["OkForResize"+this.name]=true;
}

/*---------------------------------resizing when the width or height of the window are modified-----------------------------------------------*/
resizeVideo(){	
	const self=this;
	if(window["OkForResize"+this.name]){ //need to be true, because at the opening of a window in fullscreen, there is a resizing, so the resizing function would be called, but the dimensions of the video would be wrong.
		self.videoSize();
	}
}

/*------------------------------------------------------play or pause the video---------------------------------------------------------*/
playAndPause(){
	let video=document.getElementById('video'+this.name);
	let iconPlayPause=document.getElementById('iconPlayPause'+this.name);
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

/*-----------------------------------------progress of the progress bar when the video is played-------------------------------------------------*/
timeFlow(){
	let video= document.getElementById('video'+this.name);
	let barreProgression= document.getElementById('barreProgression'+this.name);
	let progression= document.getElementById('progression'+this.name);
	let iconPlayPause=document.getElementById('iconPlayPause'+this.name);
	let timePercent = (video.currentTime*100)/video.duration;
	progression.style.width = timePercent + "%";
	if(progression.offsetWidth == barreProgression.offsetWidth)
		{
			iconPlayPause.classList.remove("fa","fa-pause");
			iconPlayPause.classList.add("fa","fa-play");
		}
}

/*------------------------------------------click on the progress bar for move forward or backward in time-------------------------------------------------*/
clickOnBar(e){
	let video=document.getElementById('video'+this.name);
	let barreProgression=document.getElementById('barreProgression'+this.name);
	let progression=document.getElementById('progression'+this.name);
	let positionXLeftBarre = barreProgression.getBoundingClientRect().left; 
	let positionXCursor = e.pageX; 
	let cursorOnBarre= positionXCursor - positionXLeftBarre; 
	let tailleBarre= barreProgression.offsetWidth; 
	let percent = (cursorOnBarre*100)/tailleBarre; 
	let tempsVideo= (percent*video.duration)/100; 
	video.currentTime = tempsVideo; 
	progression.style.width = percent +"%";
}

/*------------------------------------------drag on the progress bar for move forward or backward in time-------------------------------------------------*/
drag(e){
	let video=document.getElementById('video'+this.name);
	let barreProgression=document.getElementById('barreProgression'+this.name);
	let progression=document.getElementById('progression'+this.name);
	let positionXLeftBarre = barreProgression.getBoundingClientRect().left; 
	let positionXCursor = e.pageX; 
	let cursorOnBarre= positionXCursor - positionXLeftBarre; 
	let tailleBarre= barreProgression.offsetWidth;
	let percent = (cursorOnBarre*100)/tailleBarre; 
	let tempsVideo= (percent*video.duration)/100; 
	video.currentTime = tempsVideo;
	progression.style.width = percent +"%";
	if(positionXCursor>(positionXLeftBarre+tailleBarre))
		{
			progression.style.width = "100%";
		}
}

/*------------------------------------------passage of time (00:00 if the video <1h and 00:00:00 if video>1h ------------------------------------------------*/
timer(){
	let video= document.getElementById('video'+this.name);
	let videoTime =document.getElementById("videoTime"+this.name);
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

/*------------------------------------------volume level with the volume bar <input type="range">-------------------------------------------------*/
niveauVolume(){
	let video= document.getElementById('video'+this.name);
	let barreSon= document.getElementById('barreSon'+this.name);
	let niveauSon = barreSon.value;
	video.volume = niveauSon/100;
}

/*-----------------------------------------------------------option mute------------------------------------------------------------------------*/
mute(){
	let video= document.getElementById('video'+this.name);
	let sonButton= document.getElementById('sonButton'+this.name);
	let barreSon= document.getElementById('barreSon'+this.name);
	let sonIcon= document.getElementById('sonIcon'+this.name);
	let sonButtonUnder= document.getElementById('sonButtonUnder'+this.name);
	let sonIconUnder= document.getElementById('sonIconUnder'+this.name);
	if(sonButton.className === 'sonButtonClass on'){ 
			video.volume=0; 
			sonIcon.style.color ="red";
			sonButton.classList.remove("on");
			sonButton.classList.add("off");
			sonIconUnder.style.color ="red";
			sonButtonUnder.classList.remove("on");
			sonButtonUnder.classList.add("off");
		}
		else if(sonButton.className === 'sonButtonClass off'){
			let niveauSon = barreSon.value;
			video.volume = niveauSon/100;
			sonIcon.style.color ="white";
			sonButton.classList.remove("off");
			sonButton.classList.add("on");
			sonIconUnder.style.color ="white";
			sonButtonUnder.classList.remove("off");
			sonButtonUnder.classList.add("on");
		}
}

/*--------------------------------------control bar (disappears when the mouse is not moving, or is out of the video)-----------------------------------*/
disparitionControle(e){
let allvid= document.getElementById('allvid'+this.name);
let controle= document.getElementById('controle'+this.name);
let fullScreenButtonUnder = document.getElementById('fullScreenButtonUnder'+this.name);
let sonButtonUnder= document.getElementById('sonButtonUnder'+this.name);
let Xcursor = e.clientX;
let Ycursor = e.clientY;
let XscreenLeft = allvid.getBoundingClientRect().left; 
let XscreenRight = XscreenLeft + allvid.getBoundingClientRect().width;
let YscreenTop = allvid.getBoundingClientRect().top;
let YscreenBottom = YscreenTop + allvid.getBoundingClientRect().height;
if((allvid.getBoundingClientRect().width<=215) && ((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)))
	{
		controle.style.visibility="hidden";
		fullScreenButtonUnder.style.visibility="visible";
		sonButtonUnder.style.visibility="visible";
		window["cache"+this.name] = setTimeout(function(){
			fullScreenButtonUnder.style.visibility='hidden';
			sonButtonUnder.style.visibility='hidden'}, 3500);
	} //if the width of the video is <215px, the control bar disappears, only a fullscreen button remains.
else if((Xcursor>XscreenLeft && Xcursor<XscreenRight) && (Ycursor>YscreenTop && Ycursor<YscreenBottom)) 
	{
			controle.style.visibility = 'visible';
			window["cacher"+this.name] = setTimeout(function(){
			controle.style.visibility='hidden'; 
			allvid.style.cursor='none'}, 3500);
	} // When the mouse is hover the video, control bar disappears after 3,5sec of inactivity.
else
	{
	controle.style.visibility='hidden'; 
	fullScreenButtonUnder.style.visibility="hidden";
	sonButtonUnder.style.visibility="hidden";
	} //if the mouse is out of the video, the control bar disappears.
}

/*--------------------------------------control bar (appears when the mouse is hover and moving)-----------------------------------*/
apparitionControle(){
	let allvid= document.getElementById('allvid'+this.name);
	let controle= document.getElementById('controle'+this.name);
	let fullScreenButtonUnder = document.getElementById('fullScreenButtonUnder'+this.name);
	let sonButtonUnder= document.getElementById('sonButtonUnder'+this.name);
	clearTimeout(window["cacher"+this.name]);
	clearTimeout(window["cache"+this.name]);
	controle.style.visibility='visible'; 
	allvid.style.cursor='default';
}

/*---------------------------------------------------------fullscreen function.-------------------------------------------------*/
fullScreen()
	{
		let allvid= document.getElementById('allvid'+this.name);
		let fullScreenButton= document.getElementById('fullScreenButton'+this.name);
		let fullScreenIcon= document.getElementById('fullScreenIcon'+this.name);
		let fullScreenButtonUnder= document.getElementById('fullScreenButtonUnder'+this.name);
		let fullScreenIconUnder = document.getElementById('fullScreenIconUnder'+this.name);
		if(fullScreenButton.className ==='fullScreenButtonClass close')
		{
			window["normalSize"+this.name] = allvid.getBoundingClientRect();
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
		else if(fullScreenButton.className ==='fullScreenButtonClass open'){
			allvid.style.width = window["normalSize"+this.name].width + 'px';
			allvid.style.height = window["normalSize"+this.name].height + 'px';
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