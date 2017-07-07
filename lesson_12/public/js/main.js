var button = $('#getList')

button.on('click', function() {
	$.ajax({
		type: 'GET',
		url: '/lit',
		success: function(res) {
			console.log(res);
		},
		error: function(err) {
			return console.log(err);
		}
	})
})