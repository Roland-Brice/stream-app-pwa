var audio = document.getElementsByTagName('audio')[0];
		
		var songs = ["alphaville.mp3", "michael_jackson"];
		var currentSong = 0;
		
		function init(){
			audio.src=songs[currentSong];
			audio.play();
		}
		// function timer(currentTime){
  //   		$('.progress-bar').css('width', n + '%');
  //   		if(n<100){
  //   			setTimeout(function(){
  //   				timer(currentTime);
  //   			}, timeSong);
  //   		}
  //   	}
		
		function pauseOrPlay(){
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}
		}
		
		function previous(){
			if(currentSong>0){
				currentSong -=1;
			}
			audio.src=songs[currentSong];
			audio.play();
		}
		
		function next(){
			if(currentSong<songs.length-1){
				currentSong +=1;
			}
			audio.src=songs[currentSong];
			audio.play();
		}
		
		function reculer(){
			audio.currentTime -= 10;
		}
		
		function avancer(){
			audio.currentTime += 10;
		}
		
		init();