/* ===================================
      CryptoLab Caesar Cipher
      JavaScript Premium V1

      Developed by Wisnu Wardhana
=================================== */



const inputText =
document.getElementById("inputText");


const result =
document.getElementById("result");


const shift =
document.getElementById("shift");


const shiftValue =
document.getElementById("shiftValue");


const visualKey =
document.getElementById("visualKey");


const cipherAlphabet =
document.getElementById("cipherAlphabet");


const mapping =
document.getElementById("mapping");






const alphabet =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";






/* ==========================
      UPDATE SHIFT
========================== */


function updateShift(){


let key =
parseInt(shift.value);



shiftValue.innerHTML =
key;



visualKey.innerHTML =
key;



updateVisualization();


}







/* ==========================
      CAESAR ENGINE
========================== */


function caesar(text,key){



return text.replace(

/[a-zA-Z]/g,


function(char){



let code =
char.charCodeAt(0);



let base =

code >=65 && code<=90

?

65

:

97;



return String.fromCharCode(

(
code -
base +
key
+
26
)
%
26
+
base

);


}



);



}








/* ==========================
        ENCRYPT
========================== */


function encryptCaesar(){



let text =
inputText.value;


let key =
parseInt(shift.value);



if(text.trim()==""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}




result.value =
caesar(text,key);



animateResult();


}








/* ==========================
        DECRYPT
========================== */


function decryptCaesar(){



let text =
inputText.value;


let key =
parseInt(shift.value);



if(text.trim()==""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}




result.value =
caesar(text,-key);



animateResult();


}








/* ==========================
          SWAP
========================== */


function swapText(){


let temp =
inputText.value;



inputText.value =
result.value;



result.value =
temp;



}








/* ==========================
          COPY
========================== */


function copyResult(){



if(result.value==""){


alert(
"Tidak ada hasil"
);


return;


}



navigator.clipboard.writeText(

result.value

);



alert(
"Hasil berhasil disalin"
);


}








/* ==========================
        DOWNLOAD
========================== */


function downloadResult(){



if(result.value==""){


alert(
"Tidak ada hasil"
);


return;


}



let blob =

new Blob(

[result.value],

{
type:
"text/plain"
}

);



let link =
document.createElement("a");



link.href =
URL.createObjectURL(blob);



link.download =
"Caesar-Cipher-Result.txt";



link.click();



}








/* ==========================
          RESET
========================== */


function resetText(){



inputText.value="";


result.value="";


}










/* ==========================
      VISUALIZATION
========================== */


function updateVisualization(){



let key =
parseInt(shift.value);



let shifted="";



mapping.innerHTML="";





for(let i=0;i<26;i++){



let index =
(i+key)%26;



shifted +=
alphabet[index];





mapping.innerHTML +=

`

<div>

${alphabet[i]}

→

${alphabet[index]}

</div>

`;


}




cipherAlphabet.innerHTML =
shifted;



}









/* ==========================
       ANIMATION
========================== */


function animateResult(){



result.style.animation="none";



setTimeout(()=>{


result.style.animation=
"fade .5s ease";


},50);


}








/* ==========================
       INITIAL LOAD
========================== */


window.onload=function(){


updateVisualization();


console.log(
"CryptoLab Caesar Cipher Ready"
);


}