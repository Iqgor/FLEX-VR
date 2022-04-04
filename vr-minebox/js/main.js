const box = document.getElementById("js--box")
const itemGrabbed = document.getElementById("js--item--grabbed")
itemGrabbed.setAttribute("visible", false)
let grabbed = false;

box.onmouseenter = function(){
    box.setAttribute("visible", false)
    itemGrabbed.setAttribute("visible", true)
    grabbed = true;
}




const spheres = document.getElementsByClassName("spheres")
const invisbox = document.getElementById("js--invisbox")



for (let i = 0; i < spheres.length; i++) {
    spheres[i].onmouseenter = function () {
        
        if (spheres[i].getAttribute("visible") === false || grabbed === false) {
            return
        }
        let position = spheres[i].getAttribute("position");
        position.y = position.y + 1
        spheres[i].setAttribute("visible", false)
        invisbox.setAttribute("position", position )
        invisbox.setAttribute("visible", true)
        itemGrabbed.setAttribute("visible", false)
        box.setAttribute("visible", true)
    }
}