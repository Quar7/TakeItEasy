$(function () {
	$('#myImg').on('click', function () {
		$('#myModal').css({ display: 'block' });
	});

	$("#myModal").on('click', function (e) {
		if (e.target.id == "modImg")
			return;
		else
			$('#myModal').hide();
	});
});