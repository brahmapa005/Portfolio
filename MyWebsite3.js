let aboutMeLink = document.querySelector("#aboutMeLink");
let projectsLink = document.querySelector("#projectsLink");
let aboutMeDiv = document.querySelector("#aboutMe");
let projectsDiv = document.querySelector("#projects");
let carousel = document.querySelector("#carousel-example-generic");

//This code is from W3Schools: https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'Aparupa Brahma'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("statement-welcome-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


aboutMeLink.onclick = function(){

	aboutMeLink.classList.add("activeLink");
	projectsLink.classList.remove("activeLink");

	
}

projectsLink.onclick = function(){

	projectsLink.classList.add("activeLink");
	aboutMeLink.classList.remove("activeLink");

}

document.addEventListener("scroll", function(){
	console.log("Scroll position " + window.scrollY);
	let yScrollPosition = window.scrollY;
	console.log("offsetTop" + aboutMeDiv.offsetTop);
	
	if(yScrollPosition == 0){
		aboutMeLink.classList.remove("activeLink");
		projectsLink.classList.remove("activeLink");
	}


	console.log("carousel stuff ",carousel.offsetHeight+carousel.offsetTop );
	// if(yScrollPosition > carousel.offsetTop + carousel.offsetHeight){
	// 	console.log("Yes");
	// }else{
	// 	console.log("No"); 
	// }

	if(yScrollPosition > 400){
		aboutMeDiv.classList.add("opacityChangeDiv");
		aboutMeDiv.classList.add("opacityChangeDiv");
		aboutMeDiv.classList.remove("opacityChangeBackDiv");
		console.log("Yes");
	}else{
		aboutMeDiv.classList.remove("opacityChangeDiv");
		aboutMeDiv.classList.add("opacityChangeBackDiv");
		console.log("No");
	}

	
})