const deg = 6;
    const hh = document.querySelector('#hh');
    const mm = document.querySelector('#mm');
    const ss = document.querySelector('#ss');

    
    setInterval(() => {

    let day = new Date();
    
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;

    hh.style.transform = `rotateZ(${(h) +(m/12)}deg)`
    mm.style.transform = `rotateZ(${m}deg)`
    ss.style.transform = `rotateZ(${s}deg)`
  })

    