
$('#btn1').click(function ()
{
    $.ajax({
        type: "GET",
        url: "https://fakestoreapi.com/products",
        success: function (response) {
            console.log("success"+response)
        }
    });
})
//$ means document.query selector


var typed = new Typed(".element", {
	strings: ["Developer.", "good Boy.", "Trainer"],
	typeSpeed: 30,
	loop: true,
	loopCount: Infinity
})


