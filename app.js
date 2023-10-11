const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
    
]
const weekdays = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    
]
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023,10,1,0,0,0);
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Mi cumpleaño va a ser el ${weekday} ${date} de ${month} ${year} 0${hours} : 0${minutes} am`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemeaningTime(){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) /oneHour);
    let minutes = Math.floor((t % oneHour)/ oneMinute);
    let seconds = Math.floor((t % oneMinute)/ 1000);

    //set values array;
    const values = [days,hours,minutes,seconds]

    function format(item){
        if(item < 10){
            return item = `0 ${item}`
        }
        return item
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    if(t < 0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">Perdon, mi cumpleaños ya paso :/</h4>`
    }
}
// cuenta atras
let countdown = setInterval(getRemeaningTime,1000);

getRemeaningTime();