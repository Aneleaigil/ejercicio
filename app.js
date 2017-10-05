function IsValidCard(comprobar){
do {
var array= [];
var NroTdc = prompt("Ingrese por favor su Nro. de Tarjeta de Credito");// preguntado al usuario su Nro de TDC
if(isNaN(NroTdc)){                                                    //metodo para comprobar que el valor ingresado sean solo numeros
alert("Por favor ingresar solo numeros");                             // hasta aqui funciona bien
}
arrayInv= NroTdc.reverse();
function comprobar(){                                          // Se  invierte el orden del numero de TDC dado
for (var i = 0; i<InvNumeroTdc.length; i++){ // para recorrer el array y poder buscar el indice
    var indices=[];
      var index = InvNumeroTdc.indexOf(i); // hallando el indice del array Numero de tarjeta invertida
    }while(index!=-1){
        indices.push(index);
        index=InvNumeroTdc.indexOf(i,index+1);
        indexImpar=index%2==1; // hallando el impar
        indexImpar=true;
        indexPar=index%2===0; // halando el par
        indexPar=true;
        var n1=0
        n1=indexImpar[i]*2;
           if(n1>=9)
           else if ((1+(n1*2)-10){
           n2= n1+indexPar[i];
           ValidCard= n2%10===0;
           return true;
           alert("Numero valido de Tarjeta de Credito");
         }else{
         alert("Numero invalido de Tarjerta de Credito");
}
}
}
}
isValidCard
