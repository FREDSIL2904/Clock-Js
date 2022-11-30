const horas = document.getElementById("hora");

const minuto = document.getElementById("minuto");

const segundo = document.getElementById("segundo");

const relogio = setInterval(function time(){
  let data = new Date();
 
  let hr = data.getHours();
  
  let min = data.getMinutes();
  
  let sec = data.getSeconds();
  
  if (hr<10) {
    hr = '0' + hr;
  }
  if (sec<10) {
    sec = '0' + sec;
  }
  if (min<10) {
    min = '0' + min;
  }
  
  
  hora.textContent = hr;
  minuto.textContent = min;
  segundo.textContent = sec;
})
