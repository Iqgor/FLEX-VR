const cone = document.getElementById("cone")
const grabbedcone = document.getElementById("grabbed--cone")




cone.onmouseenter = function () {
    if (cone.getAttribute('visible') === true) {
        cone.setAttribute('visible', false)
        grabbedcone.setAttribute('visible', true)


    }
}

const boom = document.getElementsByClassName("boom")

let wood = 0

for (let i = 0; i < boom.length; i++) {
    
    boom[i].onmouseenter = function () {
        if(grabbedcone.getAttribute('visible') === true){   
            if (boom[i].getAttribute('visible') === true) {
                boom[i].setAttribute('visible', false)
                wood = wood + 1
                document.getElementById("wood").innerText = wood
                console.log(wood)
            }
        }
     

    }

}

let stone = 0

const steen = document.getElementsByClassName('steen')

for (let i = 0; i < steen.length; i++){
    steen[i].onmouseenter = function(){
        if(grabbedcone.getAttribute('visible') === true){
            if (steen[i].getAttribute('visible') === true) { 
                steen[i].setAttribute('visible', false)
                stone = stone + 1
                document.getElementById("steen").innerText = stone
            }
        }
    }
}

