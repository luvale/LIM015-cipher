const cipher = {
  encode: function( offset , string )  { 
   if (offset === null || offset === 0) {
      throw new TypeError();
    }
    let resultado = "";
    for (let i= 0; i<string.length; i++){
      let ascii = string.charCodeAt(i);
      if (ascii >=65 && ascii <=90) {
        let newAscii = (ascii -65 + parseInt(offset)) %26 +65;
        let newString = String.fromCharCode(newAscii); 
        resultado += newString;
      }
      // Para que permita signos y espacios
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
    let resultado = "";
    for (let i= 0; i<string.length; i++){
      let ascii = string.charCodeAt(i); 
      if (ascii >=65 && ascii <=90 ) {
        let newAscii = (ascii -90 - parseInt(offset)) %26 +90;
        let newString = String.fromCharCode(newAscii); 
        resultado += newString;
      } 
      // Para que permita signos y espacios
      else {
        resultado += string[i];
      } 
    }
    return resultado;
  } 
}; 

export default cipher;
