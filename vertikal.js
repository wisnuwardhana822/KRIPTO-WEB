// =========================================
// CRYPTOLAB
// VERTICAL PERMUTATION CIPHER
// FINAL PREMIUM JAVASCRIPT
// =========================================



// ================================
// ELEMENT
// ================================


const plainText =
document.getElementById("plainText");


const cipherText =
document.getElementById("cipherText");


const columnsInput =
document.getElementById("columns");


const grid =
document.getElementById("grid");


const statusBox =
document.getElementById("status");


const process =
document.getElementById("process");





// ================================
// ENCRYPT
// ================================


function encryptCipher(){


let text =
plainText.value
.toUpperCase()
.replace(/\s/g,"");



let cols =
parseInt(columnsInput.value);



if(text.length===0){

alert("Masukkan plaintext terlebih dahulu");

return;

}



if(cols<2){

alert("Minimal kolom 2");

return;

}





// jumlah baris

let rows =
Math.ceil(text.length / cols);




// membuat tabel vertikal


let table=[];


let index=0;



for(let r=0;r<rows;r++){


let row=[];


for(let c=0;c<cols;c++){


row.push(
text[index] || ""
);


index++;


}


table.push(row);


}






// ===============================
// BACA VERTIKAL
// ===============================


let result="";



for(let c=0;c<cols;c++){


for(let r=0;r<rows;r++){



if(table[r][c]){


result += table[r][c];


}


}


}






cipherText.value=result;




drawGrid(table);



process.innerHTML=

text+" → "+result;




statusBox.innerHTML=

"Encrypt berhasil ✓";



}









// ================================
// DECRYPT
// ================================


function decryptCipher(){


let text =
cipherText.value
.toUpperCase()
.replace(/\s/g,"");



let cols =
parseInt(columnsInput.value);



if(text===""){


alert("Cipher kosong");


return;


}





let rows =
Math.ceil(text.length / cols);



let table=[];




for(let r=0;r<rows;r++){


table.push(
new Array(cols).fill("")
);


}





let index=0;




// isi kembali berdasarkan kolom



for(let c=0;c<cols;c++){



for(let r=0;r<rows;r++){



if(index < text.length){


table[r][c]=text[index];


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



drawGrid(table);



process.innerHTML=

text+" → "+result;



statusBox.innerHTML=

"Decrypt berhasil ✓";



}









// ================================
// DRAW GRID
// ================================


function drawGrid(table){



grid.innerHTML="";



grid.style.gridTemplateColumns =

`repeat(${table[0].length},60px)`;





table.forEach(row=>{


row.forEach(char=>{



if(char!==""){



let box =
document.createElement("div");



box.className="cell";



box.innerHTML=char;



grid.appendChild(box);



}



});


});



}









// ================================
// COPY
// ================================


function copyResult(){



navigator.clipboard.writeText(

cipherText.value

);



statusBox.innerHTML=

"Cipher berhasil disalin ✓";


}









// ================================
// DOWNLOAD
// ================================


function downloadCipher(){



let file = new Blob(

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
URL.createObjectURL(file);



link.download =
"vertical-permutation.txt";



link.click();



}









// ================================
// SWAP
// ================================


function swapText(){



let temp =
plainText.value;



plainText.value =
cipherText.value;



cipherText.value =
temp;



}









// ================================
// RESET
// ================================


function resetCipher(){



plainText.value="";



cipherText.value="";



grid.innerHTML="";



process.innerHTML=

"Belum ada proses";



statusBox.innerHTML=

"Ready";



}









// ================================
// DASHBOARD
// ================================


function goDashboard(){


window.location.href="index.html";


}







// ================================
// COUNTER
// ================================


plainText.addEventListener(
"input",
()=>{


let counter =
document.getElementById("counter");


if(counter){


counter.innerHTML =

"Characters : "
+
plainText.value.length;


}



}
);