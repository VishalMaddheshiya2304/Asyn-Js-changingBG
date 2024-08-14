const randomcolor = function() {
    const hex = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let interval;
  
  const Startcolorchange = function() {
    interval = setInterval(changeBG, 10);
  }
  
  function changeBG() {
    document.body.style.backgroundColor = randomcolor();
  }
  
  function Stopcolorchange() {
    clearInterval(interval); 
  }
  
  document.querySelector('#start').addEventListener('click', Startcolorchange);
  document.querySelector('#stop').addEventListener('click', Stopcolorchange);
  