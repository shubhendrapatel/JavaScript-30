(function (document) {
    //Find dom elements
    var keys = document.querySelectorAll(".key"),
        error = document.querySelector(".error-msg");

    //Add transition end listner to each key div.
    keys.forEach(key => key.addEventListener("transitionend", tranformationCompleted));

    //bind transition end listner for hiding it again
    error.addEventListener("transitionend", hideMsg);

    //Add event listner for keys to documnet
    document.addEventListener('keydown', keyPressed, true);

    //When a key presed
    function keyPressed(event) {
        var key = document.querySelector(`.key[data-key-code="${'' + event.keyCode}"]`),
            audio = document.querySelector(`audio[data-key-code="${'' + event.keyCode}"]`);

        //if key not found
        if (!key){
            error.classList.add("show");
            return;
        }

        key.classList.add('playing');
    
        //Rewind and play
        audio.currentTime = 0;
        audio.play();
    }

    //Aftre transition completed remove class so does style
    function tranformationCompleted(event) {
        this.classList.remove("playing");
    }

    // hide error msg again
    function hideMsg(){
        this.classList.remove("show");
    }
})(document);