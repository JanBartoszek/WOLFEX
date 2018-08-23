let mainDOM = {
    createElements : function() {
        let mainContainer = document.createElement('div')
        mainContainer.setAttribute('class', 'container')
        mainContainer.setAttribute('id', 'main-container')
        document.body.appendChild(mainContainer)
        this.createSoldiers()

    },


    createSoldiers : function() {
        this.createSoldier()
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
        soldier.style.height = data.spawn[randomIndex].size;
        document.getElementById('main-container').appendChild(soldier)
        mainDOM.animation(data.soldierId)
        data.soldierId = data.soldierId + 1;       
    },


    animation : function(id) {
        let soldier = document.getElementById('soldier' + id)
        console.log(soldier.getAttribute('id'))
        let limit = 0
        function move(soldier){
            if (limit < 100){
            console.log(soldier)
            soldier.style.top = soldier.offsetTop + 3 +'px'; 
            console.log(soldier.offsetTop)
            setTimeout(move, 50, soldier)
            limit += 1
            }
        }

        move(soldier)
    },
}
