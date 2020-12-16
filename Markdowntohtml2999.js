window.onload = function () {
	let toConvert = document.getElementsByClassName('markdown');
	for (let i = 0; i < toConvert.length; i++) {
		toConvert[i].innerHTML = marked(toConvert[i].innerHTML);
	}
}