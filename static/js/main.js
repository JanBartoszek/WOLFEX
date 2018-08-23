let mainDOM = {
    createElements : function() {
        let mainContainer = document.createElement('div')
        mainContainer.setAttribute('class', 'container')
        mainContainer.setAttribute('id', 'main-container')
        document.body.appendChild(mainContainer)

    },

    removeMainDOMContent : function() {
        let mainDOM = document.getElementById('main-container')
        mainDOM.parentNode.removeChild(mainDOM)
    }
}

let mainEvents = {
   
}