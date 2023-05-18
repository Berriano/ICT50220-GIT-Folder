// MENU


const btn = document.querySelector(".main_btn");

const menu = document.querySelector(".hidden-menu");

const hamburger = document.querySelector(".icon");


const accordion = document.querySelectorAll('.accordion__grid');

const chevron = document.querySelectorAll('.accordion__icon-chevron');




btn.addEventListener('click', function () {

	menu.classList.toggle('hidden');
	hamburger.classList.toggle('burger-open');

}

)


// ACCORDION









accordion.forEach(acc => acc.addEventListener('click', function () {

	this.classList.toggle('open');

}

))




chevron.forEach(chev => chev.addEventListener('click', function () {

	this.classList.toggle('rotate');

}

))