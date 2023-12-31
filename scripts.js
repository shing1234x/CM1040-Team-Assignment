let slideIndex = 1;
showSlides(slideIndex);


function changeslide(n){
	showSlides(slideIndex += n);
}

//function to show n-th slide and hide other slide
function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("slideshow_news");

	if (n > slides.length){
		slideIndex = 1
	}
    
	if (n < 1){
		slideIndex = slides.length
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";  
}
