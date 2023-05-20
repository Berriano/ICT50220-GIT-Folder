// MENU


// const divHead = document.querySelectorAll('.div-head');
// const btn = document.querySelector(".nav-btn");
// const menu = document.querySelector(".hidden-menu");
// const hamburger = document.querySelector(".hamburger-icon");


// // needed for import

// btn.addEventListener('click', function () {

// 	menu.classList.toggle('hidden');
// 	hamburger.classList.toggle('burger-open');

// }

// )

// console.log(divHead, btn, menu, hamburger);






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


/// video

const modal = document.querySelector('.modal');
const video = document.querySelector('.video');
const formBtn = document.querySelector('.form__btn--help');
const closeBtn = document.getElementById('close-btn');
const modalCode = document.querySelector('.modal').innerHTML;

console.log(closeBtn);


formBtn.addEventListener('mouseover', function () {

	modal.classList.add('show-modal');

	modal.innerHTML = "<iframe	src='https://www.youtube.com/embed/y881t8ilMyc?autoplay=1&mute=1'	title='Help Video' class='video ' height='500px' width='750px' name='youtube' noborder='0' width='830' height='800' scrolling='yes' seamless></iframe>"


})



closeBtn.addEventListener('click', function () {

	modal.classList.remove('show-modal');

	modal.innerHTML = "<iframe	src='https://www.youtube.com/embed/y881t8ilMyc'	title='Help Video' class='video ' height='500px' width='750px' name='youtube' noborder='0' width='830' height='800' scrolling='yes' seamless></iframe>"



})