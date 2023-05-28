'use strict';

/// Common Navigation and Footer (UNUSED CODE- TEMPLATE LITERAL)

/*

const nav = document.querySelectorAll('nav');


const navHtml = `

<button class="menu-btn">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
	stroke-width="1.5" stroke="currentColor" class="hamburger-icon">
	<path stroke-linecap="round" stroke-linejoin="round"
		d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

</button>

<ul class"hidden-list">
	<li> <a href="index.html">home</a> </li>
	<li> <a href="classes.html">Classes</a>	</li>
	<li> <a href="philosophy.html">Philosophy</a>	</li>
	<li>	<a href="owner.html">the owner</a>	</li>
	<li>	<a href="contact.html">contact</a>	</li>
</ul>`;


nav.forEach(nav => nav.insertAdjacentHTML('beforeend', navHtml));


const footer = document.querySelectorAll('footer');

const footerHtml = `<div class="container grid">
<div class="logo-box">
	<img src="img/ML Strength_trans-logo.png" class="logo-box--image" alt="logo">
</div>
<div class="text-box">
	<ul>
		<li>	<a href="#">Company</a>	</li>
		<li>	<a href="#">contact us</a>	</li>
		<li>	<a href="#">Privacy Policy</a>	</li>
		<li>	<a href="#">T&C</a>	</li>
	</ul>
</div>
<div class="text-box__copyright">
	<p> &copy;2023 by HL Strength - Health and fitness. </p>
	<p> All rights reserved </p>
</div>
</div>`;

footer.forEach(footer => footer.insertAdjacentHTML('beforeend', footerHtml));

*/



// Hamburger Nav functionality


const menuBtn = document.querySelector(".menu-btn");
const burgerIcon = document.querySelector(".hamburger-icon");
const list = document.querySelector(".hidden-list");


menuBtn.addEventListener('click', function () {

	list.classList.toggle('show-list');
})

