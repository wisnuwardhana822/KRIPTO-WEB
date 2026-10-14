/* =====================================
        CryptoLab ROT13 ENGINE V2
        Developed by Wisnu Wardhana
===================================== */



const inputText =
document.getElementById("inputText");


const result =
document.getElementById("result");






/* =========================
        ROT13 CORE
========================= */


function rot13(text){


return text.replace(
/[a-zA-Z]/g,

function(char){


let code =
char.charCodeAt(0);



let base =
(code >=65 && code<=90)
?
65
:
97;



return String.fromCharCode(

(
code -
base +
13
)
%
26
+
base

);


}

);


}








/* =========================
        ENCRYPT
========================= */


function encryptROT13(){


let text =
inputText.value;



if(text.trim()===""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}



result.value =
rot13(text);



showAnimation();


}









/* =========================
        DECRYPT
========================= */


function decryptROT13(){


let text =
inputText.value;



if(text.trim()===""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}



result.value =
rot13(text);



showAnimation();


}








/* =========================
          SWAP
========================= */


function swapText(){



let temp =
inputText.value;



inputText.value =
result.value;



result.value =
temp;



}








/* =========================
          COPY
========================= */


function copyResult(){



if(result.value===""){


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









/* =========================
        DOWNLOAD
========================= */


function downloadResult(){



if(result.value===""){


alert(
"Tidak ada hasil"
);


return;


}




const blob =
new Blob(

[
result.value

],

{

type:
"text/plain"

}

);



const link =
document.createElement("a");



link.href =
URL.createObjectURL(blob);



link.download =
"ROT13_Result.txt";



link.click();



}








/* =========================
          RESET
========================= */


function resetText(){



inputText.value="";


result.value="";



}









/* =========================
        ANIMATION
========================= */


function showAnimation(){



result.style.animation="none";



setTimeout(()=>{


result.style.animation=
"fade .5s ease";


},50);



}







/* =========================
       DEMO READY
========================= */


console.log(
"CryptoLab ROT13 System Loaded"
);