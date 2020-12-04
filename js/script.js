//1. create element, appendChild, addEventListener
//   here we create a button using js, append that to the page and 
//   once clicked, we will show and play the trailer.
var btn = document.createElement("BUTTON");
btn.innerHTML = "DLC Trailer";
designButton();
document.getElementById("vid").appendChild(btn);
const video = document.getElementById("player");
const source = document.createElement("source");

//design button with style
function designButton(){
    btn.style.background = "rgb(101, 130, 212)";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.padding = "15px 30px";
    btn.style.border = "1.5px solid black";
    btn.style.margin = "15px auto";
    btn.style.display ="flex";
}

// show and load video
function loadVideo(element, src){
    video.style.display = "block";
    source.src = src;
    element.appendChild(source);
    element.load();
    element.play();
    btn.style.display = "none";
}

btn.addEventListener('click', () => loadVideo(video, "../trailer.mp4"));

//class lists
// removed green foot class and added boxes
var box = document.getElementById("footer");
box.classList.remove("foot");
box.classList.add("boxes");

//3. add bg and color to costs
var cost = document.getElementsByClassName('price');
for(var i = 0; i < cost.length; i++)
{
    cost[i].style.background = "rgb(101, 130, 212)";
    cost[i].style.color = 'white';
}

//  alert user when on homepage after 3 secs
window.addEventListener('load', () => setTimeout(loader, 2000));

function loader() {
    alert("Welcome to the Destiny 2 - Beyond Light Info Site!");
}

