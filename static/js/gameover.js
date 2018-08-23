let gameoverDOM = {

    gameover : function() {
        this.changeBackground()
        this.gameoverSound()
        setTimeout(gameoverDOM.nextGame, 3000)

    },

    changeBackground : function(){
        document.body.style.background = "url('https://media.giphy.com/media/3oFyDqkwbxghpBHlaE/giphy.gif')"
        document.body.style.backgroundPosition = "center center"
        document.body.style.backgroundRepeat = "no repeat"
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.backgroundSize = "cover"
    },

    gameoverSound : function() {
        let audio = new Audio('/static/sounds/you-died.mp3');
        audio.play();
    },

    nextGame : function() {
        if(confirm('You have managed to unlive ' + data.score + ' bad guys. Wish to play again?')){
            menuDOM.createElements()
    } 
    }

}
