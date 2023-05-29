var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Smooth scrolling
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) 
{ // relitere 
    item.addEventListener('click', (e)=> 
    {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView(
    {
      behavior: 'smooth'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}

document.getElementById('frmSearch').onsubmit = function() {
  window.location = 'http://www.google.com/search?q=site:https://lourdesn.github.io/SchoolProject/ ' + document.getElementById('txtSearch').value;
  return false;
}

function validateName() {

  var name = document.getElementById('fname').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

}

if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

}

producePrompt('Valid', 'name-error', 'green');
return true;

}
function validateEmail () {

  var email = document.getElementById('email').value;
  
  if(email.length == 0) {
  
    producePrompt('Email Invalid','email-error', 'red');
    return false;
  
  }
  
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
    producePrompt('Email Invalid', 'email-error', 'red');
    return false;
  }
  
  producePrompt('Valid', 'email-error', 'green');
  return true;
  
  }
  function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
      return false;
    }
    else {
    
    }
    }
    
    function jsShow(id) {
    document.getElementById(id).style.display = 'block';
    }
    
    function jsHide(id) {
    document.getElementById(id).style.display = 'none';
    }
    
    
    function producePrompt(message, promptLocation, color) {
    
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
    
    }
