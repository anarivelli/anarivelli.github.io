let wateringcan=document.getElementById("watering-can"); 
let water=document.getElementById("water");

document.getElementById("snake-plant").addEventListener("click", infosnake);
document.getElementById("snake-plant").addEventListener("mouseover", snakeplanthover);
document.getElementById("snake-plant").addEventListener("mouseleave", snakeplantleave);

function snakeplanthover() {
    wateringcan.style.visibility="hidden";
    water.style.visibility="visible";
    water.style.left="490px";
    water.style.top="153px";
}

function snakeplantleave() {
    wateringcan.style.visibility="visible";
    water.style.visibility="hidden";
}

document.getElementById("philo").addEventListener("click", infophilo);
document.getElementById("philo").addEventListener("mouseover", philohover);
document.getElementById("philo").addEventListener("mouseleave", philoleave);

function philohover() {
    wateringcan.style.visibility="hidden";
    water.style.visibility="visible";
    water.style.left="600px";
    water.style.top="178px";
}

function philoleave() {
    wateringcan.style.visibility="visible";
    water.style.visibility="hidden";
}

document.getElementById("cactus").addEventListener("click", infocactus);
document.getElementById("cactus").addEventListener("mouseover", cactushover);
document.getElementById("cactus").addEventListener("mouseleave", cactusleave);

function cactushover() {
    wateringcan.style.visibility="hidden";
    water.style.visibility="visible";
    water.style.left="710px";
    water.style.top="175px";
}

function cactusleave() {
    wateringcan.style.visibility="visible";
    water.style.visibility="hidden";
}

function infosnake() {
    document.getElementById("title1").focus();
    document.getElementById("title1").scrollIntoView();
}

function infophilo() {
    document.getElementById("title2").focus();
    document.getElementById("title2").scrollIntoView();
}

function infocactus() {
    document.getElementById("sun3").focus();
    document.getElementById("sun3").scrollIntoView();
}
