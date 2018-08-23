let menuDOM = {
    createElements : function() {
        let menuContainer = document.createElement('div')
        menuContainer.setAttribute('class', 'container')
        menuContainer.setAttribute('id', 'menu-container')
        document.body.appendChild(menuContainer)
        menuDOM.changeBackground()
        menuDOM.createPlayButton()
    },

    
    createPlayButton : function() {
        let playButton = document.createElement('div')
        playButton.setAttribute('id', 'play-button')
        document.getElementById('menu-container').appendChild(playButton)
        document.getElementById('play-button').innerHTML = "Play"
        document.getElementById('play-button').addEventListener('click', menuDOM.loadMain)
    },


    changeBackground : function(){
        document.body.style.background = "url(/static/img/wolfex.png)"
        document.body.style.backgroundPosition = "center center"
        document.body.style.backgroundRepeat = "no repeat"
        document.body.style.backgroundAttachment = "fixed"
        document.body.style.backgroundSize = "cover"
    },

    
    removeMenuDOMContent : function() {
        let menuDOM = document.getElementById('menu-container')
        menuDOM.parentNode.removeChild(menuDOM)
    },


    loadMain :function(){
        menuDOM.removeMenuDOMContent()
        mainDOM.createElements()
    }
}
