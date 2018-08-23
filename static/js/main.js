let mainDOM = {
    createElements : function() {
        let mainContainer = document.createElement('div')
        mainContainer.setAttribute('class', 'container')
        mainContainer.setAttribute('id', 'main-container')
        document.body.appendChild(mainContainer)
        this.createSoldiers()

    },


    createSoldiers : function() {
        setInterval(this.createSoldier, 1000)
    },

    createSoldier : function() {
        let soldier = document.createElement('img')
        soldier.setAttribute('class', 'soldier')
        soldier.setAttribute('id', 'soldier' + data.soldierId)
        soldier.setAttribute('src', 'static/img/soldier1.png')
        let randomIndex = Math.floor(Math.random() * 4);
        soldier.style.position='absolute';
        soldier.style.left = data.spawn[randomIndex].x;
        soldier.style.top = data.spawn[randomIndex].y;
        document.getElementById('main-container').appendChild(soldier)
        document.getElementById('soldier' + data.soldierId).addEventListener('click', events.removeSoldier);
        data.soldierId = data.soldierId + 1;
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
// let mainEvents = {
   
// }
