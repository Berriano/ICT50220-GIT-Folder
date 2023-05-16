const btn = document.querySelector(".btn");

const menu = document.querySelector(".hidden-menu");


btn.addEventListener('click', function () {

	menu.classList.toggle('hidden');

})



let acc = document.getElementsByClassName('accordion__grid');




for (let i = 0; i < acc.length; i++) {

	acc[i].addEventListener('click', function () {
		this.classList.toggle('open');

	})
}


