let datos;
$.ajax({
	url: 'https://randomuser.me/api/',
	async: true,
	dataType: 'json',
	success: function (data) {
		console.log(data.results[0].name);
		datos = data.results[0];
		document.getElementById('img').setAttribute('src', datos.picture.large);

		//document.getElementById('firstName').innerText = datos.name.first;
		//console.log("last :", datos.name.last);
		$('#lastName').text(datos.name.last);
		$('#firstName').text(datos.name.first);

		//document.getElementById("lastName").innerHTML = datos.name.last;
		//document.querySelector("#lastName").innerText = datos.name.last;
	},
})
	.done(function () {
		console.log('success');
		/* let span = document.getElementById("lastName");
            span.innerText = "New Span content"; */
		console.log('last :', datos.name.last);

		//const p01 = document.getElementById('firstName');
		//console.log(p01.firstChild.nodeName);
		//document.querySelector('#lastName').innerText = datos.name.last;
		//p01.firstElementChild.innerText = 'Algo';
	})
	.fail(function () {
		//alert("error");
	})
	.always(function () {
		//alert("complete");
	});
