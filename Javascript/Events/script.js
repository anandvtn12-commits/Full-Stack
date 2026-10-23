function ShowAlert(){
    alert("Click Me Button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click",ShowAlert2);

function ShowAlert2(){
    alert("Click Me Button clicked using JS Events");
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});

document.getElementById("box2").addEventListener("mouseover", () => {
    document.getElementById("box2").innerText = "Pointer is over the paragraph";
});
