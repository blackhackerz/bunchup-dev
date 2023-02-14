// let slide = 0;
// slider();

// function slider(){
//     const slideso = document.getElementsByClassName("slides");
//     let i;
//     for(i=0; i < slideso.length; i++){
//         slideso[i].style.display = 'none'
//     }
//     slide++
//     if (slide > slideso.length) {slide = 1}  
//     slideso[slide-1].style.display = "block";  
//     setTimeout(slider, 10000)
// }

var i = 0;
var txt = `Be prepare to connect with individuals who share your interests and create strong communities with BunchUp.
Mark your calendars, we'll be launching soon.`;
var speed = 80;

function type() {
    if (i < txt.length) {
      document.getElementById("coming_soon_sub_heading").innerHTML += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  // let slideIndex = 1;
  // showSlides(slideIndex);
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // function showSlides(n) {
  //   let i;
  //   let slides = document.getElementsByClassName("our_team_slide");
  //   let dots = document.getElementsByClassName("dot");
  //   if (n > slides.length) {slideIndex = 1}    
  //   if (n < 1) {slideIndex = slides.length}
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  // }

const el = document.querySelector(".content_container");

el.addEventListener("mousemove", (e) => {
el.style.setProperty('--x', -e.offsetX /40 + "px");
el.style.setProperty('--y',-e.offsetY /40+ "px");
});

function nav_bar(x) {
  x.classList.toggle("change");
  const width = document.getElementById('sidebar').style.width;
  if(width !='0px'){
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('content_container').style.display = 'block'
    document.getElementById('sidebar').style.display = 'none';

  }else{
    
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('sidebar').style.width = '200px';
    document.getElementById('content_container').style.display = 'none';
  }
} 

