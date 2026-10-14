/* =========================================
   CRYPTOLAB VIGENERE CYBER PRO
   FINAL ENGINE FIX
========================================= */


const alphabet =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";



const plainText =
document.getElementById("plainText");


const cipherText =
document.getElementById("cipherText");


const keyInput =
document.getElementById("key");


const statusBox =
document.getElementById("status");


const characterFlow =
document.getElementById("characterFlow");


const terminal =
document.getElementById("terminal");


const ranking =
document.getElementById("ranking");


const progress =
document.getElementById("progress");


const certificate =
document.getElementById("certificate");









// ======================================
// CLEAN
// ======================================


function clean(text){

return text
.toUpperCase()
.replace(/[^A-Z]/g,"");

}









// ======================================
// REPEAT KEY
// ======================================


function repeatKey(text,key){


let result="";


for(let i=0;i<text.length;i++){


result += key[i % key.length];


}


return result;


}









// ======================================
// ENCRYPT
// ======================================


function encryptCipher(){



let text =
clean(
plainText.value
);



let key =
clean(
keyInput.value
);





if(text===""){

alert("Masukkan plaintext");

return;

}



if(key===""){

alert("Masukkan key");

return;

}






let fullKey =
repeatKey(
text,
key
);



let result="";





for(let i=0;i<text.length;i++){



let p =
alphabet.indexOf(
text[i]
);



let k =
alphabet.indexOf(
fullKey[i]
);




let c =
(p+k)%26;



result +=
alphabet[c];



}







cipherText.value =
result;





animateCharacter(
text,
fullKey,
result
);



showExplain(
text,
fullKey,
result
);



addHistory(
text,
fullKey,
result
);



drawFrequency(
result
);



terminalLog(
"ENCRYPT SUCCESS : "+result
);



statusBox.innerHTML =
"ENCRYPT BERHASIL ✓";



updateProgress();



}









// ======================================
// DECRYPT
// ======================================


function decryptCipher(){



let text =
clean(
cipherText.value
);



let key =
clean(
keyInput.value
);




if(text===""){

alert("Cipher kosong");

return;

}



if(key===""){

alert("Key kosong");

return;

}




let fullKey =
repeatKey(
text,
key
);



let result="";





for(let i=0;i<text.length;i++){



let c =
alphabet.indexOf(
text[i]
);



let k =
alphabet.indexOf(
fullKey[i]
);



result +=

alphabet[
(c-k+26)%26
];



}





plainText.value=result;



terminalLog(
"DECRYPT SUCCESS"
);



statusBox.innerHTML =
"DECRYPT BERHASIL ✓";



}









// ======================================
// CHARACTER ANIMATION
// ======================================


function animateCharacter(
plain,
key,
cipher
){


characterFlow.innerHTML="";



for(let i=0;i<plain.length;i++){


let box =
document.createElement(
"div"
);



box.className =
"character-box";



box.innerHTML =

`
${plain[i]}
<br>
↓
<br>
${key[i]}
<br>
↓
<br>
${cipher[i]}
`;



characterFlow.appendChild(box);



}



}









// ======================================
// EXPLAIN
// ======================================


function showExplain(
plain,
key,
cipher
){


let p =
alphabet.indexOf(
plain[0]
);


let k =
alphabet.indexOf(
key[0]
);



let c =
alphabet.indexOf(
cipher[0]
);





document.getElementById(
"explainBox"
).innerHTML =


`

<b>Example Calculation</b>

<br><br>


Plain :

${plain[0]}

(${p})


<br>


Key :

${key[0]}

(${k})


<br><br>


Formula:

<br>

(${p} + ${k}) mod 26


<br><br>


Cipher :

<b>${cipher[0]}</b>

(${c})


`;



}









// ======================================
// HISTORY
// ======================================


function addHistory(
plain,
key,
cipher
){


let body =
document.querySelector(
"#historyTable tbody"
);



if(!body)
return;




let row =
body.insertRow();



row.innerHTML =

`

<td>

${new Date()
.toLocaleTimeString()}

</td>


<td>

${plain}

</td>


<td>

${key}

</td>


<td>

${cipher}

</td>


`;



}









// ======================================
// FREQUENCY
// ======================================


function drawFrequency(text){



let box =
document.getElementById(
"frequencyChart"
);



let count={};



alphabet.split("")
.forEach(
x=>count[x]=0
);




text.split("")
.forEach(
x=>count[x]++
);





let html="";



for(let x of alphabet){



let size =
count[x]*20;



html +=


`

<div class="freq-bar">

${x}

<div class="bar"
style="
width:${size}px">
</div>


${count[x]}

</div>

`;



}




box.innerHTML=html;



}









// ======================================
// TERMINAL
// ======================================


function terminalLog(message){



if(!terminal)
return;



let line =
document.createElement(
"div"
);



line.innerHTML =
"> "+message;



terminal.appendChild(line);


terminal.scrollTop =
terminal.scrollHeight;


}









function terminalMode(){



terminal.innerHTML="";



let logs=[


"INITIALIZING VIGENERE ENGINE",


"LOADING KEY MATRIX",


"TABULA READY",


"SECURITY CHECK COMPLETE",


"SYSTEM ONLINE"


];



let i=0;



let timer =
setInterval(()=>{


terminalLog(
logs[i]
);


i++;


if(i>=logs.length)

clearInterval(timer);


},500);



}









// ======================================
// BRUTE FORCE
// ======================================


function bruteForce(){



let text =
clean(
cipherText.value
);



let resultBox =
document.getElementById(
"bruteResult"
);



if(text===""){

alert(
"Masukkan cipher"
);

return;

}



let html="";



for(let shift=0;shift<26;shift++){



let output="";



for(let c of text){


let pos =
alphabet.indexOf(c);



output +=

alphabet[
(pos-shift+26)%26
];


}



html +=


`

Shift ${shift}

<br>

${output}

<hr>

`;



}



resultBox.innerHTML=html;


}









// ======================================
// COPY
// ======================================


function copyResult(){


navigator.clipboard.writeText(
cipherText.value
);



terminalLog(
"CIPHER COPIED"
);


}









// ======================================
// PDF
// ======================================


function exportPDF(){



let report =

`

CRYPTOLAB VIGENERE REPORT


Plain:

${plainText.value}


Key:

${keyInput.value}


Cipher:

${cipherText.value}



`;



let win =
window.open();



win.document.write(
"<pre>"+report+"</pre>"
);



win.print();


}









// ======================================
// CERTIFICATE
// ======================================


function generateCertificate(){



certificate.innerHTML =


`

🏆 CERTIFICATE OF COMPLETION


<br><br>


Vigenere Cipher Completed


<br><br>


CryptoLab Security Laboratory


<br><br>


★★★★★


`;



terminalLog(
"CERTIFICATE CREATED"
);



}









// ======================================
// RANKING
// ======================================


function loadRanking(){



ranking.innerHTML =


`

<div class="rank-item">
ROT13 ⭐
</div>


<div class="rank-item">
Caesar ⭐⭐
</div>


<div class="rank-item">
Atbash ⭐⭐
</div>


<div class="rank-item">
Transposisi ⭐⭐⭐
</div>


<div class="rank-item">
Vertikal ⭐⭐⭐⭐
</div>


<div class="rank-item">
Vigenere ⭐⭐⭐⭐⭐
</div>


`;



}









// ======================================
// PROGRESS
// ======================================


function updateProgress(){



progress.innerHTML =


`

<div class="progress-bar">


<div class="progress-fill"
style="width:100%">


100%


</div>


</div>


<br>

Vigenere Completed Successfully

`;



}









// ======================================
// RESET
// ======================================


function resetCipher(){


plainText.value="CRYPTOGRAPHY";


cipherText.value="";


keyInput.value="SECRET";


characterFlow.innerHTML=
"Waiting...";


statusBox.innerHTML=
"SYSTEM READY";


terminal.innerHTML=
"> SYSTEM READY";


}









// ======================================
// DASHBOARD
// ======================================


function goDashboard(){


window.location.href=
"index.html";


}









// START
// ======================================


loadRanking();


terminalLog(
"CRYPTO LAB ONLINE"
);