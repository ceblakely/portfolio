let slideIndex = 1;
showSlides(document.getElementsByClassName("userSlide"), slideIndex);
showSlides(document.getElementsByClassName("mockupSlide"), slideIndex);

function whichSlideshow(parentId) {
  if (parentId == "mockupsContainer") {
    return document.getElementsByClassName("mockupSlide");
  } else {
    return document.getElementsByClassName("userSlide");
  }
}

function plusSlides(e, n) {
  let slideshow = whichSlideshow(e.parentNode.id);
  showSlides(slideshow, (slideIndex += n));
}
function currentSlide(e, n) {
  let slideshow = whichSlideshow(e.parentNode.id);
  showSlides((slideIndex = n));
}
function showSlides(slideshow, n) {
  let i;
  let slides = slideshow;
  let dots = document.getElementsByClassName("userDot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
