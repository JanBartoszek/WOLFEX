let mainDOM = {
    createElements : function() {
        let mainContainer = document.createElement('div')
        mainContainer.setAttribute('class', 'container')
        mainContainer.setAttribute('id', 'main-container')
        document.body.appendChild(mainContainer)
        this.changeBackground()
        this.createSoldiers()
    },


    changeBackground : function(){
        document.body.style.background = "url(/static/img/corridor.jpg)"
        document.body.style.backgroundPosition = "center center"
        document.body.style.backgroundRepeat = "no repeat"
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.backgroundSize = "cover"
    },


    createSoldiers : function() {
        this.createSoldier()
        let intervalId = setInterval(this.createSoldier, 1000)   
        data.intervalId = intervalId
    },


    createSoldier : function() {
        let soldier = document.createElement('img')
        soldier.setAttribute('class', 'soldier')
        soldier.setAttribute('id', 'soldier' + data.soldierId)
        soldier.setAttribute('src', 'static/img/soldier1.png')
        let randomIndex = Math.floor(Math.random() * 4);
        // let randomIndex = 3
        soldier.style.position='absolute';
        soldier.style.left = data.spawn[randomIndex].x;
        soldier.style.top = data.spawn[randomIndex].y;
        soldier.style.height = data.spawn[randomIndex].size;
        document.getElementById('main-container').appendChild(soldier)
        document.getElementById('soldier' + data.soldierId).addEventListener('click', events.removeSoldier);
        mainDOM.animation(data.soldierId,randomIndex)
        data.soldierId = data.soldierId + 1;       
    },


    animation : function(id,randomIndex) {
        let soldier = document.getElementById('soldier' + id)
        let limit = 0

        function move(soldier){
            if (limit < 100){
            soldier.style.top = soldier.offsetTop + 3 +'px'; 
            if ( randomIndex != 0){
                soldier.style.height = soldier.offsetTop / 2  +'px';
            }
            setTimeout(move, 50, soldier)
            limit += 1
            }
        }

        function checkBottomPosition(soldier){
            let coords = soldier.getBoundingClientRect()
            if (coords.bottom > 755 && randomIndex == 0 ){
                mainDOM.gameover()
            }
            if (coords.bottom > 715 && randomIndex == 1 ){
                mainDOM.gameover()

            }
            if (coords.bottom > 715 && randomIndex == 2 ){
                mainDOM.gameover()

            }
            if (coords.bottom > 715 && randomIndex == 3 ){
                mainDOM.gameover()

            }
            if (limit < 100){
                setTimeout(checkBottomPosition, 50, soldier)
            }
        }

        checkBottomPosition(soldier)
        move(soldier)
    },


    gameover : function (){
        clearInterval(data.intervalId);
        this.removeMainDOMContent()
        gameoverDOM.gameover()
    },


    removeMainDOMContent : function() {
        let mainDOM = document.getElementById('main-container')
        mainDOM.parentNode.removeChild(mainDOM)
    }
}


let events = {
    removeSoldier : function() {
        let elem = document.getElementById('main-container')
        elem.removeChild(this)
        events.killSound()
    },

    
    killSound : function(){
        let audio = new Audio('/static/sounds/hit1.mp3');
        audio.play();
    },

}

