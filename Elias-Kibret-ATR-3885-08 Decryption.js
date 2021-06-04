// Additive Cipher
//Decryption 
//______________________________________________________
const cipher_Text = window.prompt("please Enter Cipher text").toUpperCase();
/*Accept string input and Change to small letters  */
var regex = /[A-Z,]/g;
/* this is a regural expresion just to valid to accept letter only hence Additive cipher is works for 26 alphabet only*/
var valid = cipher_Text.match(regex).toString().replace(/,/g, "");
const key = +window.prompt("please Enter Key");
var plain_Text_Index = [];
var plain_Text = [];
for (var index = 0; index < valid.length; index++) {
if(key>valid.charCodeAt(index)-65)
{
plain_Text_Index.push(((26+(valid.charCodeAt(index)-65)-key)+97))
}
else
{
  plain_Text_Index.push(((Math.abs(valid.charCodeAt(index) - 65 - key) % 26) + 97));
  }
   
  plain_Text.push(String.fromCharCode(plain_Text_Index[index]));
  /*this part is used to convert ASCII code to character */
}

alert(plain_Text.toString().replace(/,/g, ""));


/*this part is used to show the Encripted form of plain text*/
