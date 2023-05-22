'use strict';

/// Common Navigation and Footer



const nav = document.querySelectorAll('nav');


const navHtml = `<ul>
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
	<img src="images/ML Strength_trans-logo.png" class="logo-box--image" alt="logo">
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