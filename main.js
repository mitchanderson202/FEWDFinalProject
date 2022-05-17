// Photo Slider
var i = 0;
var images = [];
var time = 2000;

images[0] = './images/image1.jpg'
images[1] = './images/image2.jpg'
images[2] = './images/image3.jpg'
images[3] = './images/image4.jpg'
images[4] = './images/image5.jpg'
images[5] = './images/image6.jpg'

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;


// Changing HTML
var changeHtml = document.querySelector('.htmlSkills')
changeHtml.addEventListener('mouseover', function() {
    changeHtml.innerHTML = 'You just changed the HTML'
})
changeHtml.addEventListener('mouseout', function() {
  changeHtml.innerHTML = 'HTML'
})

// Changing CSS
var changeCss = document.querySelector('.cssSkills')

changeCss.addEventListener('mouseover', function() {
    changeCss.style.color = '#ffdf6c'
    changeCss.innerHTML = 'You just changed the CSS'
})
changeCss.addEventListener('mouseout', function() {
    changeCss.style.color = '#ffffff'
    changeCss.innerHTML = 'CSS'
})


// Changing JavaScript
var changeJs = document.querySelector('.jsSkills')
changeJs.addEventListener('mouseover', function(){
    changeJs.innerHTML = 'This was all made possible by JavaScript' 
    changeJs.style.fontSize = '3rem'
    changeJs.style.color = '#202020'
})
changeJs.addEventListener('mouseout', function() {
  changeJs.innerHTML = 'JavaScript'
  changeJs.style.fontSize = '1.2em'
  changeJs.style.color = '#ffffff'
})