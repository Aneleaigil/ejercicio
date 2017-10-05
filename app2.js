function isValidCard(comprobar){
  var array= [];
  var NroTdc = prompt("Ingrese por favor su Nro. de Tarjeta de Credito");// preguntado al usuario su Nro de TDC
  if(isNaN(NroTdc)){                                                    //metodo para comprobar que el valor ingresado sean solo numeros
  alert("Por favor ingresar solo numeros");                             // hasta aqui funciona bien
  }
  arrayInv= NroTdc.reverse();                                           // Se  invierte el orden del numero de TDC dado
  valor1= []; // se declaran variable para valor con indice impar
  valor2=[]; // se declaran variable para valor con indice impar
  for(i=0; i<=arrayInv.length; i++){ // para iterar con el array y buscar el elemento con idice par
    var Impar=0 // variable impar
    if (i%2==1)  // si indice del elemento no es divisible entre dos es impar
    Impar=true;
    else Impar=false;
    if((Impar*2)<=9){ // si es impar se multiplica x 2 menor o igual a 9
      valor1=valor1 + (Impar[i]*2); // se suma al valor del indice par y se multiplica x 2
      if ((valor1[i]*2)>9){ // si el resultado del valor indice impar x 2 es mayor a 9
        valor1=valor1+(1+((Impar[i]*2)-10)); // entonces se le suma 1 y se le resta 10 para dejar un resultado de un solo nro valido
      }
    }
    for (var j=0; j<valor1.length; j++){ // se hace otro for para iterar con el array y buscar el numero a sumar con los resultados de las multiplicaciones con el indexImpar
      valor2=valor2+valor1[i]; // suma del valor indice par con el resultado de la multiplicacion con el impar
      if (valor2%10===0){ // si este resultado de la suma de los dos valores entre 10 da 0
      true; // es verdadera o valida la tarjeta
      alert ("Nro de Tarjeta de credito valida") // mesaje de tarjeta de credito valida
    }else{ // sino es invalida
          alert("El numero ingresado de la tarjeta de credito es incorrecto");// muestra mensaje de tarjeta invalida
           false;
      }
    }
}
isValidCard
