// Clock Analogic  Code
const deg = 6;
const hh = document.querySelector('#hh');
const mm = document.querySelector('#mm');
const ss = document.querySelector('#ss');


setInterval(() => {

  const date = new Date();

  let h = date.getHours() * 30; // o ponteiro do relegio em horas muda em 30° e 30°
  let m = date.getMinutes() * deg; // o ponteiro do relegio em minutos muda em 6° e 6°
  let s = date.getSeconds() * deg; // o ponteiro do relegio em minutos muda em 6° e 6°

  hh.style.transform = `rotateZ(${(h) + (m / 12)}deg)`
  mm.style.transform = `rotateZ(${m}deg)`
  ss.style.transform = `rotateZ(${s}deg)`
})



// Clock Analogic  Code
setInterval(() => {

    const date = new Date();
  
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let period =  "AM";

    if ( h == 0 ) {
        h = 12;
    }

    if ( h > 12) {
      h = h -12;
      period =  "PM"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
    const hours = `${h} : ${m} : ${s}  ${period}`
  
    document.getElementById('clockDigital').innerText = hours;
    document.getElementById('clockDigital').textContent = hours;

  }, 1000);



