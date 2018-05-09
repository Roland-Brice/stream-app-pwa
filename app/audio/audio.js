var song = document.getElementsByTagName("audio")[0];
 //on definit un tableau de notre playlist
 var songs = ["Alphaville.mp3","mad-over-you.mp3",
               "despacito.mp3","michael_jackson.mp3"];


var songtitle = document.getElementById("songtitle");
var songSlider = document.getElementById("songSlider");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var volumeSlider = document.getElementById("volumeSlider");
var nextSongTitle = document.getElementById("nextSongTitle");


var currentSong = 0;



//pour jouer le son automatiquement au chargement de la page
window.onload = loadSong();

//definissons la fonction loadSong
 function loadSong(){

  song.src = songs[currentSong];
  songtitle.textContent = (currentSong + 1) + ". " + songs[currentSong];
  nextSongTitle.innerHTML = ("<b>Next Song: </b>") + songs[currentSong + 1];
  song.volume = volumeSlider.value;
  song.play();
  
 }
 // le songSlider doit montrer la progression de la chanson à chaque sec
 setInterval(updateSongSlider(), 1000);

 function  updateSongSlider (){
     var c =  Math.round(document.getElementsByTagName("audio")[0].currentTime);
     songSlider.value = c;
     currentTime.textContent = convertTime(c);
     if (document.getElementsByTagName("audio")[0].ended) {
         document.getElementsByTagName("audio")[0].next();
     }
 }

 function convertTime (secs){
  var min = Math.floor(secs / 60);
  var sec = (secs % 60);
  min = (min < 10) ? "0" + min : min ;
  sec = (sec < 10) ? "0" + sec : sec ;
  return (min + ":"+ sec);
 }

 function showDuration(){
  var d = Math.floor(document.getElementsByTagName("audio")[0].duration);
  songSlider.setAttribute =("max",d);
  duration.textContent = convertTime(d);
 }

 function playOrPause(img){
  if (document.getElementsByTagName("audio")[0].paused) {
       document.getElementsByTagName("audio")[0].play();
      img.src = "pause.png"
  } else {
         document.getElementsByTagName("audio")[0].pause();
    img.src = "play.jpg"
  }
 }

 function next(){
   currentSong += 1;
   loadSong();
 }

 function previous(){
  currentSong -= 1;
  currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
  loadSong();
 }

 function seekSong(){
  document.getElementsByTagName("audio")[0].convertTime = songSlider.value;
  currentTime.textContent = convertTime(document.getElementsByTagName("audio")[0].convertTime);
 }

 function adjustVolume(){
  song.volume = volumeSlider.value;
 }

 function backward(){
    document.getElementsByTagName("audio")[0].currentTime -= 0.5;
 }

 function forward(){
  document.getElementsByTagName("audio")[0].currentTime += 0.5; 
 }

 