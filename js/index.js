var shouldPlay = false;

$(document).ready(function() {

	// $('div').animate({ top: '-=200px' }, 600, function () {  })


    $('#record_btn').click(function(event) {
        // Change record button's image
        if (!shouldPlay) {
            $("#record_btn_image").attr('src', "design/image/recording_stop.png");
        } else {
            $("#record_btn_image").attr('src', "design/image/recording_start.png");
        }

        // Change image to iat result text
        if (!shouldPlay) {
            $('#image_container').css('display', 'none');
        } else {
            $('#image_container').css('display', '');
        }

        shouldPlay = !shouldPlay;
    });
});

function stopPlayButton() {
    $("#record_btn_image").attr('src', "design/image/recording_start.png");
    // $('#image_container').css('display', '');	
    // $('#iat_result_container').css('display', 'none');
    shouldPlay = false;
    // --------------------------

    setTimeout(function() {
        $("#iat_result").remove();
        $('#image_container').css('display', '');
        $("#big-img").attr('src', "design/image/result_play_hand.png");
        $("#record_btn_image").attr('src', "design/image/result_play.png");
        $("#subtitle").html('我們想讓你知道，\n你不是獨自在面對這一切')
        $("#a").css('display', 'none');

        var old_element = document.getElementById("record_btn");
				var new_element = old_element.cloneNode(true);
				old_element.parentNode.replaceChild(new_element, old_element);
        $("#record_btn").click(function() {
        	var audio = document.getElementById("record_feedback");
				  audio.play();
				  $("#record_btn_image").attr('src', "design/image/result_stop.png");

				  setTimeout(function() {
				  	window.location = "1.html";
				  }, 10000);
        });
    }, 4000)

}

function addQuote(str) {
    var newStr = "「" + str + "」";
    return newStr;
}
