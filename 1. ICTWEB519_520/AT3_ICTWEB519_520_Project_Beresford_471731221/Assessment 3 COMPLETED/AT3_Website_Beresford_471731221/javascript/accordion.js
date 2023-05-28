'use strict';



/// ACCORDION ///


const accordion = document.querySelectorAll('.accordion__grid');
const chevron = document.querySelectorAll('.chevron');



accordion.forEach(acc => acc.addEventListener('click', function () {

	this.classList.toggle('open');

}

))

chevron.forEach(chev => chev.addEventListener('click', function () {

	this.classList.toggle('rotate');

}

))
