function getHyphenation(query, callback) {
	var url = "http://localhost:1337/mining/a";

	$.post(url, {
		query: query
	},function(data) {
		if (data.status == 'ok') {
			var words = data.data;
			console.log(words);
			callback(words);
		} else {
			callback([]);
		}
	})
}