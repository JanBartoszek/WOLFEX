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
        soldier.setAttribute('id', data.soldierId)
        soldier.setAttribute('src', 'static/img/soldier1.png')
        document.getElementById('main-container').appendChild(soldier)
        data.soldierId = data.soldierId + 1;
    },



    removeMainDOMContent : function() {
        let mainDOM = document.getElementById('main-container')
        mainDOM.parentNode.removeChild(mainDOM)
    }
}

// let mainEvents = {
   
// }
