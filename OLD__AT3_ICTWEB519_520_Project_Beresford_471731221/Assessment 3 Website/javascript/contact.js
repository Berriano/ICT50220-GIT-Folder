'use strict';


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
