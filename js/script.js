var button = document.getElementById("hire-me");
var close = document.getElementsByClassName("close")[0];
button.addEventListener("click", function() {
    document.getElementsByClassName("pop-up")[0].style.display = "block";
});
close.addEventListener("click", () => {
    document.getElementsByClassName("pop-up")[0].style.display = "none";
})