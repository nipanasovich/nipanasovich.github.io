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

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});