var button = document.getElementById("hire-me");
var message = document.getElementsByClassName('gm')[0];
var close = document.getElementsByClassName("close")[0];
var open = () => {
    document.getElementById("pop-up").style.display = "block";
}
button.addEventListener("click", open);
message.addEventListener("click", open);
close.addEventListener("click", () => {
    document.getElementById("pop-up").style.display = "none";
})
