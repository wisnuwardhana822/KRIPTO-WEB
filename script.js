/* =========================================
   CRYPTOLAB DASHBOARD 2.0
   FINAL CYBER ENGINE
========================================= */



// =================================
// TERMINAL BOOT SYSTEM
// =================================


const terminal =
document.getElementById(
"globalTerminal"
);



const bootMessage=[


"INITIALIZING CRYPTOLAB ENGINE...",


"LOADING CIPHER DATABASE...",


"CHECKING SECURITY MODULE...",


"LOADING STUDENT PROFILE...",


"ALL SYSTEM READY"

];



let bootIndex=0;



function bootTerminal(){


if(!terminal)
return;



if(bootIndex < bootMessage.length){


let line =
document.createElement(
"div"
);


line.innerHTML=
"> "+
bootMessage[bootIndex];



terminal.appendChild(line);


bootIndex++;


setTimeout(
bootTerminal,
700
);



}


}




bootTerminal();









// =================================
// SEARCH CIPHER
// =================================



function searchCipher(){



let input =
document.getElementById(
"search"
);



let filter =
input.value
.toUpperCase();



let cards =
document.querySelectorAll(
".cipher-card"
);




cards.forEach(card=>{



let text =
card.innerText
.toUpperCase();



if(text.includes(filter)){


card.style.display="block";


}

else{


card.style.display="none";


}



});



}









// =================================
// PROGRESS SYSTEM
// =================================



let completedCipher =
JSON.parse(

localStorage.getItem(
"completedCipher"

)

)
||
[];






function saveProgress(name){



if(
!completedCipher.includes(name)
){


completedCipher.push(name);


localStorage.setItem(

"completedCipher",

JSON.stringify(
completedCipher
)

);



}



updateDashboard();



}









function updateDashboard(){



let total=6;


let done =
completedCipher.length;



let percent =
Math.round(
(done/total)*100
);



let bar =
document.getElementById(
"progressFill"
);



let text =
document.getElementById(
"progressText"
);





if(bar){


bar.style.width=
percent+"%";


bar.innerHTML=
percent+"%";


}



if(text){


text.innerHTML=

done+
" / "+
total+
" Cipher Completed";


}



}








updateDashboard();









// =================================
// ACHIEVEMENT CHECK
// =================================


function checkAchievement(){



let achievement = [];




if(
completedCipher.length>=1
){


achievement.push(
"🏅 First Encryption"
);


}



if(
completedCipher.length>=5
){


achievement.push(
"🥇 Cipher Explorer"
);


}




if(
completedCipher.includes(
"Vigenere"
)

){


achievement.push(
"👑 Vigenere Master"
);


}




return achievement;



}









// =================================
// AUTO DEMO
// =================================



setTimeout(()=>{


saveProgress(
"Vigenere"
);


},2000);









// =================================
// CYBER CLOCK
// =================================


function cyberTime(){


let now =
new Date();


let time =
now.toLocaleTimeString();



if(terminal){


let clock =
document.createElement(
"div"
);


clock.innerHTML=

"> SYSTEM TIME : "
+
time;


terminal.appendChild(clock);


}



}




setInterval(
cyberTime,
10000
);









// =================================
// CIPHER LEVEL DATA
// =================================



const cipherLevel={


"ROT13":

"BEGINNER",


"Caesar":

"BEGINNER",


"Atbash":

"INTERMEDIATE",


"Transposisi":

"ADVANCED",


"Vertikal":

"EXPERT",


"Vigenere":

"MASTER"


};









// =================================
// CONSOLE INFO
// =================================



console.log(
"%c CryptoLab Dashboard 2.0 ONLINE ",
"background:#2563eb;color:white;font-size:20px;"
);



console.log(
cipherLevel
);