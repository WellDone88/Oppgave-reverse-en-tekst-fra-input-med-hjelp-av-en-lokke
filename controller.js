//Har ikke bestemt meg helt for array enda, men vi får se. Rebecca tips under for å reversere teksten.
function ReverseWord(){
    let reversedWords = "";
    Words = document.getElementById("inputWords").value;
for (let i = Words.length - 1; i >= 0; i--) {
    console.log(Words[i]);
    reversedWords += Words[i];
  
}

//La inn lister om man vil se flere ord
document.getElementById("results").innerHTML += '<li>' + reversedWords + '</li>'; 
}
