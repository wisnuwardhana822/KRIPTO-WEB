/* ===================================
      CryptoLab Atbash Cipher
      JavaScript Premium V1

      Developed by Wisnu Wardhana
=================================== */



const inputText =
document.getElementById("inputText");


const result =
document.getElementById("result");





/* ==========================
      ATBASH ENGINE
========================== */


function atbash(text){



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

base +

25 -

(
code-base
)


);



}


);



}








/* ==========================
        ENCRYPT
========================== */


function encryptAtbash(){



let text =
inputText.value;



if(text.trim()==""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}




result.value =
atbash(text);



animateResult();



}









/* ==========================
        DECRYPT
========================== */


function decryptAtbash(){



let text =
inputText.value;



if(text.trim()==""){


alert(
"Masukkan teks terlebih dahulu"
);


return;


}




// Atbash bersifat simetris
// encrypt dan decrypt menggunakan fungsi sama


result.value =
atbash(text);



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

[
result.value

],

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
"Atbash-Cipher-Result.txt";



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
       READY
========================== */


console.log(
"CryptoLab Atbash Cipher Ready"
);