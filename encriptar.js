
var btnEncriptar = document.querySelector(".ButtonEncriptar");
var btnDesEncriptar = document.querySelector(".ButtonDesencriptar");
var resettxt=document.querySelector(".MSJEntrada");
var btnCopiar=document.querySelector(".ButtonCopy");

var textosalida = document.querySelector(".boxmensajesalida");

mostrarmunheco();
btnEncriptar.onclick = presionaencriptar;

btnDesEncriptar.onclick = presionaDesencriptar;

resettxt.onclick=resetexto;
btnCopiar.onclick=copiar;

function presionaencriptar(){

   m= msjencriptar(recuperatexto());
   textosalida.textContent=m;
   ocultarmunheco();
   
   return m;

    
}


function msjencriptar(mensaje){
    
    var msj = mensaje;
    var msjEn = "";

    for (var i = 0; i < msj.length; i++) {
        
        if (msj[i]=="e") {
            msjEn=msjEn+"enter";  
        }
        else if (msj[i]=="i") {
            msjEn=msjEn+"imes";
            
        }
        else if (msj[i]=="a") {
            msjEn=msjEn+"ai";
            
        }
        else if (msj[i]=="o") {
            msjEn=msjEn+"ober";
            
        }
        else if (msj[i]=="u") {
            msjEn=msjEn+"ufat";
            
        }
        else{
            msjEn=msjEn+msj[i];
        }
    }
    return msjEn;
}

function presionaDesencriptar(){
    m=msjDesencriptar(recuperatexto());
    textosalida.textContent=m;
   ocultarmunheco();
   
   return m;
     
 }

 function msjDesencriptar(entradaTexto){
    var msj = entradaTexto;
    var msjDes = "";
    
    for (var i = 0; i < msj.length; i++) {
       
        if (msj[i]=="e") {
            msjDes=msjDes+"e";
            i=i+4; 
        }
        else if (msj[i]=="i") {
            msjDes=msjDes+"i";
            i=i+3;
            
        }
        else if (msj[i]=="a") {
            msjDes=msjDes+"a";
            i=i+1;
            
        }
        else if (msj[i]=="o") {
            msjDes=msjDes+"o";
            i=i+3;
            
        }
        else if (msj[i]=="u") {
            msjDes=msjDes+"u";
            i=i+3;
        }
        else if(msj[i]== ""){
            msjDes="No ha ingresado nigun texto a desencriptar";
        }
        else{
            msjDes=msjDes+msj[i];
        }
        
    }
    return msjDes;
 }


 function recuperatexto(){
    var entradaTexto = document.querySelector(".MSJEntrada");
    return entradaTexto.value;
}

 function ocultarmunheco(){
     document.getElementById("ocultarcosas").style.display = "none";
     document.getElementById("mensajeoculto").style.display = "";
   
 }

 function mostrarmunheco(){
    document.getElementById("ocultarcosas").style.display = "";
    document.getElementById("mensajeoculto").style.display = "none";

 }

 function copiar(){

    var textocopiadoalclipboard = document.getElementById('finalmsj').innerHTML;

    navigator.clipboard.writeText(textocopiadoalclipboard);
    resettxt.value=textocopiadoalclipboard;

    return textocopiadoalclipboard;
}

function resetexto(){
    resettxt.value="";
    mostrarmunheco();

}