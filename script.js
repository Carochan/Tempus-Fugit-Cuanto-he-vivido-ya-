function calculateAndShowDaysOfLife(){
const name = document.getElementById('fName').value;
const dateOfBirth = document.getElementById('dBirth').valueAsDate;
const millisecondsPerDay = 86400000;


const start = new Date(dateOfBirth);
const end = new Date();
const daysOfDifference = Math.floor((end.getTime() - start.getTime())/millisecondsPerDay);


const result= `¡${name} has vivido la friolera de ${daysOfDifference} dias!`



document.getElementById("tf-result").innerHTML= '<div class="bg-orange-500 text-center text-white  p-4">' + result + '</div>'

}