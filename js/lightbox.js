function openModal() {
  document.getElementById('myLightbox').style.display = 'block';
}

var lightbox = document.querySelector('#myLightbox');
lightbox.addEventListener('click', function (e) {
  if (e.target.className.split(' ')[0] == 'no-exit')
    return;
  else
    lightbox.style.display = 'none';
});

function currentSlide(n) {
  showSlides(index = n);
}

function changeSlide(n) {
  showSlides(index += n);
}

function showSlides(n) {
  var slides = document.querySelectorAll('.mySlides');
  var demo = document.querySelectorAll('.demo');
  var captionText = document.querySelector('#caption');

  if (n > slides.length)
    index = 1

  if (n < 1)
    index = slides.length

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < demo.length; i++) {
    demo[i].className = demo[i].className.replace(' active', '');
  }

  slides[index - 1].style.display = 'block';
  demo[index - 1].className += ' active';
  captionText.innerHTML = demo[index - 1].alt;
}