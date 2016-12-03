var shouldPlay = false;

$(document).ready(function() {

	$('#record_btn').click(function(event){
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
}

function addQuote(str) {
	var newStr = "「" + str + "」";
	return newStr;
}