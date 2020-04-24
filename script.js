function calculateAndShowDaysOfLife(){
let nombre = document.getElementById('fName').value;
let dateOfBirth = document.getElementById('dBirth').valueAsDate;

var end, start;

start = new Date(dateOfBirth);
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

let result= (nombre +' has vivido ' + (Math.floor((end.getTime() - start.getTime())/86400000)) + ' dias.');

document.getElementById("tf-result").innerHTML= '<div class="border-purple-200 border-solid border-4 text-purple rounded-t-lg p-4">' + result + '</div>'

}