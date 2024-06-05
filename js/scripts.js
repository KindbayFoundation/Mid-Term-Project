/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const content = "Hello. My name is Junha Lee, \n and I am a developer.";
const text = document.querySelector(".text");
let i = 0;
let lock = 0;

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function typing(){
	if (lock == 0)
	{
		let txt = content[i++];
		text.innerHTML += txt=== "\n" ? "<br/>": txt;
		if (i == content.length) {
			lock = 1;
			await sleep(7000)
			text.textContent = "";
			i = 0;
			lock = 0;
		}
	}
}


setInterval(typing, 200)