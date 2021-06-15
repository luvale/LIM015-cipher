const cipher = {
  encode: function( offset , string )  { 
   if (offset === null || offset === 0) {
      throw new TypeError();
    }
    //console.log(string + offset);
    let resultado = "";
    for (let i= 0; i<string.length; i++){
      //console.log(string[i]);
      let ascii = string.charCodeAt(i);
      //console.log(ascii); 
      if (ascii >=65 && ascii <=90) {
        let newAscii = (ascii -65 + parseInt(offset)) %26 +65;
        //console.log(newAscii);
        let newString = String.fromCharCode(newAscii); 
        //console.log(newString);
        resultado += newString;
      }
      // Para que permita "," "." "?" "!" y espacios
      else {
        resultado += string[i];
      } 
    } 
    return resultado;
  }, 
  decode: function ( offset , string ) { 
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    //console.log(string + offset);
    let resultado = "";
    for (let i= 0; i<string.length; i++){
      //console.log(string[i]);
      let ascii = string.charCodeAt(i);
      //console.log(ascii); 
      if (ascii >=65 && ascii <=90 ) {
        let newAscii = (ascii -90 - parseInt(offset)) %26 +90;
        //console.log(newAscii);
        let newString = String.fromCharCode(newAscii); 
        //console.log(newString);
        resultado += newString;
      } 
      else {
        resultado += string[i];
      } 
    }
    return resultado;
  } 
}; 

export default cipher;
