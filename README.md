#### Pseudo Codigo de Programa ValidCard
###### Prompt ( Pregunta al usuario para ingresar Nro. de TDC)
  ###### condicional if : si el valor dado es distinto a number y es cadena de texto
    ###### entonces mostrar alert ("Ingrese un numero valido de Tdc")
    ######  metodo de array.reverse (retorna en orden inverso un array dado)
  ######  se declaran variable para valor con indice impar y el indice par
    ###### luego hice un for para iterar  con el array y buscar el elemento con idice par y hacer el algoritmo de luhm.
      ###### se hace un if para determinar el impar
  ###### diciendo que si no es divisible exacto entre dos es impar, y debe ser impar porque en la programacion se cuenta desde 0.
    ###### luego se hace otro condicional donde se indica que si el resultado de ese valor con idice impar da mayor a 9 se hace otra operacion donde se reduzca ese resultado a un solo valor.
    ######  la siguiente operacion de sumarle 1 al resultado y restarle 10, ya que debe ser menor a 10.
  ######   Luego se hace otro for para iterar con el array y buscar el otro valor para ser sumado con los resultados de la multiplicaciones con el valor indice impar
  ###### luego este resultado de la suma entre valores obtenidos en la primera parte mas los valores de indices pares dividido entre 10 da igual a 0, el Nro de Tarjeta de credito es valida, y manda una alerta al usuario que informa que es valida
  ###### y si no da 0  manda una alerta que dice que la tarjeta es invalida
