const redSphere = document.getElementById("js--sphere--red")
const blueSphere = document.getElementById("js--sphere--blue")
const greenSphere = document.getElementById("js--sphere--green")
const cursor = document.getElementById("js--cursor")




redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red")

}

greenSphere.onmouseleave = function(){
    cursor.setAttribute("color", "green")

}

blueSphere.onmouseleave = function(){
    cursor.setAttribute("color", "blue")

}

const boxBlack = document.getElementById("js--box--black")
const boxYellow = document.getElementById("js--box--yellow")
const boxBlue = document.getElementById("js--box--blue")
const boxRed = document.getElementById("js--box--red")
const boxGray = document.getElementById("js--box--gray")
const boxGreen = document.getElementById("js--box--green")
const boxPurple = document.getElementById("js--box--purple")
const boxPink = document.getElementById("js--box--pink")
const boxOrange = document.getElementById("js--box--orange")




boxBlack.onmouseenter = function(){
    boxBlack.setAttribute("color", cursor.getAttribute("color"))
}
boxYellow.onmouseenter = function(){
    boxYellow.setAttribute("color", cursor.getAttribute("color"))
}
boxBlue.onmouseenter = function(){
    boxBlue.setAttribute("color", cursor.getAttribute("color"))
}
boxRed.onmouseenter = function(){
    boxRed.setAttribute("color", cursor.getAttribute("color"))
}
boxGray.onmouseenter = function(){
    boxGray.setAttribute("color", cursor.getAttribute("color"))
}
boxGreen.onmouseenter = function(){
    boxGreen.setAttribute("color", cursor.getAttribute("color"))
}
boxPurple.onmouseenter = function(){
    boxPurple.setAttribute("color", cursor.getAttribute("color"))
}
boxPink.onmouseenter = function(){
    boxPink.setAttribute("color", cursor.getAttribute("color"))
}
boxOrange.onmouseenter = function(){
    boxOrange.setAttribute("color", cursor.getAttribute("color"))
}