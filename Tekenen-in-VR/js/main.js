const sphere = document.getElementsByClassName("js--sphere")

for(let i = 0; i < sphere.length; i++){
    sphere[i].onmouseleave = function(){
        cursor.setAttribute("color",sphere[i].getAttribute("color"))
    }
}



const cursor = document.getElementById("js--cursor")






const boxs = document.getElementsByClassName("js--box")


for(let i = 0; i < boxs.length; i++){
    boxs[i].onmouseenter = function(){
        boxs[i].setAttribute("color", cursor.getAttribute("color"))
    }
    
}



