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

