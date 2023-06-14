// Contador de días desde una fecha específica
// Contador de días, horas y minutos desde una fecha específica
function countdown() {
    var startDate = new Date("August 9, 2022").getTime();
    var currentDate = new Date().getTime();
    var difference =  currentDate - startDate;
  
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
  
    document.getElementById("counter").innerHTML =  days + " días, " + hours + " horas, " + minutes + " minutos, " + seconds + "segundos";
  }
  
  countdown();
  
