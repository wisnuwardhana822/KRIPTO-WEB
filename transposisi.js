// ===============================================
// CRYPTOLAB
// COLUMNAR TRANSPOSITION CIPHER
// PREMIUM FINAL JAVASCRIPT
// ===============================================


// ===============================
// ELEMENT
// ===============================

const plainText =
document.getElementById("plainText");


const cipherText =
document.getElementById("cipherText");


const columns =
document.getElementById("columns");


const grid =
document.getElementById("grid");


const statusBox =
document.getElementById("status");


const process =
document.getElementById("process");


const counter =
document.getElementById("counter");




// ===============================
// CHARACTER COUNTER
// ===============================


if(plainText){

plainText.addEventListener(
"input",
()=>{

counter.innerHTML =
"Characters : " + plainText.value.length;

});

}







// ===============================
// ENCRYPT
// ===============================


function encryptCipher(){


let text =
plainText.value
.toUpperCase()
.replace(/\s/g,"");



let col =
parseInt(columns.value);



if(text.length===0){

alert(
"Masukkan plaintext terlebih dahulu"
);

return;

}



if(col < 2){

alert(
"Jumlah kolom minimal 2"
);

return;

}




// membuat jumlah baris

let rows =
Math.ceil(
text.length / col
);




// membuat tabel

let table=[];


let index=0;



for(let r=0;r<rows;r++){


let row=[];


for(let c=0;c<col;c++){


row.push(
text[index] || ""
);


index++;


}


table.push(row);


}





// membaca kolom

let result="";



for(let c=0;c<col;c++){


for(let r=0;r<rows;r++){


if(table[r][c]){


result += table[r][c];


}



}


}





cipherText.value=result;



drawGrid(table);



process.innerHTML =
`${text} → ${result}`;



statusBox.innerHTML =
"Encrypt berhasil ✓";



}








// ===============================
// DECRYPT
// ===============================


function decryptCipher(){


let text =
cipherText.value
.toUpperCase()
.replace(/\s/g,"");



let col =
parseInt(columns.value);



if(text===""){

alert(
"Cipher kosong"
);

return;

}




let rows =
Math.ceil(
text.length / col
);




let table=[];



for(let r=0;r<rows;r++){


table.push(
new Array(col).fill("")
);


}



let index=0;



// isi berdasarkan kolom


for(let c=0;c<col;c++){


for(let r=0;r<rows;r++){



if(index < text.length){


table[r][c]=
text[index];


index++;


}


}



}




let result="";



table.forEach(row=>{


row.forEach(char=>{


if(char){

result+=char;


}


});


});




plainText.value=result;


cipherText.value=text;



drawGrid(table);



statusBox.innerHTML =
"Decrypt berhasil ✓";



counter.innerHTML =
"Characters : "
+
result.length;



}









// ===============================
// DRAW GRID PREMIUM
// ===============================


function drawGrid(table){



grid.innerHTML="";



let cols =
table[0].length;



grid.style.gridTemplateColumns =
`repeat(${cols},60px)`;




table.forEach(row=>{


row.forEach(char=>{



if(char!==""){



let box =
document.createElement("div");



box.className =
"cell";



box.innerHTML =
char;



grid.appendChild(box);



}



});



});



}









// ===============================
// COPY
// ===============================


function copyResult(){


if(!cipherText.value){

return;

}



navigator.clipboard.writeText(
cipherText.value
);



statusBox.innerHTML =
"Cipher berhasil disalin ✓";


}










// ===============================
// DOWNLOAD
// ===============================


function downloadCipher(){



let blob =
new Blob(
[
cipherText.value
],
{
type:"text/plain"
}
);



let link =
document.createElement("a");



link.href =
URL.createObjectURL(blob);



link.download =
"cryptolab-transposition.txt";



link.click();



}









// ===============================
// SWAP
// ===============================


function swapText(){


let temp =
plainText.value;



plainText.value =
cipherText.value;



cipherText.value =
temp;



counter.innerHTML =
"Characters : "
+
plainText.value.length;


}








// ===============================
// RESET
// ===============================


function resetCipher(){


plainText.value =
"CRYPTOGRAPHY";



cipherText.value =
"";



grid.innerHTML =
"";



process.innerHTML =
"CRYPTOGRAPHY → CPGPRTHYRYOA";



statusBox.innerHTML =
"Ready";



counter.innerHTML =
"Characters : 12";



}








// ===============================
// DASHBOARD
// ===============================


function goDashboard(){


window.location.href =
"index.html";


}





// ===============================
// AUTO START
// ===============================


window.onload=function(){


drawGrid(
[
["C","R","Y"],
["P","T","O"],
["G","R","A"],
["P","H","Y"]
]
);


}