let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector(".nouvil");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + 'px';
  moon.style.top = value * 4 + 'px';
  // if(scrollX >= 503) {
  //   stars.style.display = 'none'
  //   moon.style.display = 'none'
  // }
  mountains3.style.top = value * 2 + 'px';
  mountains4.style.top = value * 1.5 + 'px';
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  nouvil.style.fontSize = value + 'px';
  if (scrollY >= 67) {
    nouvil.style.fontSize = 67 + 'px'
    nouvil.style.display = 'fixed';
    if (scrollY >= 155) {
      nouvil.style.display = 'none';
      moon.style.display = 'none';
      boat.style.display = 'none';
      river.style.display = 'none';
      mountains4.style.display = 'none';
      mountains3.style.display = 'none';
    } else {
      nouvil.style.display = 'block';
      moon.style.display = 'block';
      boat.style.display = 'block';
      river.style.display = 'block';
      mountains4.style.display = 'block';
      mountains3.style.display = 'block';
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background = 'linear-gradient(#376281, #10001f)';
    } else {
      document.querySelector(".main").style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
}

// والحمد لله 