/*

	Create by Ricardo
	2014-02-13

*/


if (typeof(jQuery) == undefined) {
	alert('OMG! jQuery not installed!');
} else {
	$(document).ready(function (){
		$.ajax({
			url: '/logar.html',
			method: 'GET',
			success: function (view){
				$('body').append(view);
			}
		})
	});
}