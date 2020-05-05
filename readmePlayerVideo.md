Player Video in javascript, OOP version.

This code use font awesome 4 and need to have 
\<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\
in the head of html page.

This code in javascript is a proposal for a customizable player video. It works with the creation of a new player and execute it with the function init().
ex:
const player = New Lecteur({name:"" , lienVideo:"", parent:"", position:"", width:"", height:", top:"", left:"", controleColor:"", progressionColor:"", buttonColor:"", volume:""});
player.init();

The options:
- name : use the option name is recommended and it is necessary if there are two or more players in a page.
- lienVideo : obligatory, it is the video path.
- parent : it defined the parent where the player would be placed. Default: 'body'.
- position : "absolute" or "relative" compared by the parent. Default :'relative'.
- width : width of the container of the player (the proportions of the player will be calculated compared of the width and height of this container). It is necessary to define IN PIXEL either the container's width or its chosen parent's width. Default:"100%".
- height : height of the container of the player (the proportions of the player will be calculated compared of the height and width of this container). It is necessary to define IN PIXEL either the container's height or its chosen parent's height. Default:"100%".
- top : position top in the parent. Default: 0px.
- left : position left in the parent. Default: 0px.
- controleColor : Color of the controle bar. Default:"rgb(30,30, 66)".
- progressionColor : Color of the progress bar. Default: "#BF0EE6".
- buttonColor : Color of the border of play button, mute button and volume bar. Default: "#73008C".
- volume : volume level in the open window. Default: "20".

other ex:

const mylayer = new Lecteur({name:"first", parent:"myDiv", controleColor:"transparent", progressionColor:"#FF33C4", buttonColor:"pink", width:'700px', height:"700px", lienVideo:"path/myVideo.mp4"});		
myPlayer.init();

WARNING some ID, global variable, class and function name are used here.

By used the option name, you can personalize the id and global variable. The chosen name will be add at the end of all of it. But if there's no name at the option, there are the id and global variable name which are used in.

ID :
- container
- allvid
- video
- controle
- bleu
- barreProgression
- progression
- ballProgress
- buttons
- playPauseButton
- iconPlayPause
- videoTime
- sonButton
- sonIcon
- barreSon
- fullScreenButton
- fullScreenIcon
- fullScreenButtonUnder
- fullScreenIconUnder

Global Variables :
- window["OkForResize"]
- window["appuyer"]
- window["ratioVideo"]
- window["cache"]
- window["cacher"]
- window["normalSize"]

class and function name are not modified by the option name

Class :
- fa
- fa-pause
- fa-play
- fa-expand
- fa-compress
- fa-volume-off
- off
- on
- open
- close
- containerClass
- allvidClass
- controleClass
- barreProgressionClass
- progressionClass
- ballProgressClass
- playPauseButtonClass
- iconPlayPauseClass
- videoTimeClass
- sonButtonClass
- sonIconClass
- barreSonClass
- fullScreenButtonClass
- fullScreenIconClass
- fullScreenButtonUnderClass
- fullScreenIconUnderClass

functions :
- init()
- videoSize()
- openSizeVideo()
- resizeVideo()
- playAndPause()
- timeFlow()
- clickOnBar()
- drag()
- timer()
- niveauVolume()
- mute()
- disparitionControle()
- apparitionControle()
- fullScreen()

