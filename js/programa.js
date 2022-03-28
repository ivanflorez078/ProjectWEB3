$(document).ready(function(){
  $("#titulo").mouseenter(function(){
    $("#titulo").css("background-color", "black");
    $("#titulo").css("color", "white");
  });
  $("#titulo").mouseleave(function(){
    $("#titulo").css("background-color", "bisque");
    $("#titulo").css("color", "black");
  });
  $("button").click(function(obtenerParesImpares){
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;
    var digito = 0;
    var numero4D = parseInt(document.getElementById('numero4D').value);
    if(numero4D < 1000 || numero4D > 9999)
    {
        alert("El numero no es de 4 digitos, intente de nuevo");
    }
    else
    {
        digito = parseInt(numero4D/1000);
        if (digito == 0){
          cantidadCeros++;
        }
        else{
          if (digito%2 === 0){ /*para identificar si es par o impar */
            cantidadPares++;
          }
          else{
            if(digito%2 === 1)
            {
                cantidadImpares++;
            }
          }
        }

        digito = parseInt((numero4D%1000/100));
         if (digito == 0){
          cantidadCeros++;
        }
        else{
          if (digito%2 === 0){ /*para identificar si es par o impar */
            cantidadPares++;
          }
          else{
            if(digito%2 === 1)
            {
                cantidadImpares++;
            }
          }
        }
        digito = parseInt(numero4D%1000%100/10);
        if (digito == 0){
          cantidadCeros++;
        }
        else{
          if (digito%2 === 0){ /*para identificar si es par o impar */
            cantidadPares++;
          }
          else{
            if(digito%2 === 1)
            {
                cantidadImpares++;
            }
          }
        }
        digito = (numero4D%10);
        if (digito == 0){
          cantidadCeros++;
        }
        else{
          if (digito%2 === 0){ /*para identificar si es par o impar */
            cantidadPares++;
          }
          else{
            if(digito%2 === 1)
            {
                cantidadImpares++;
            }
          }
        }
        document.getElementById('pares').value = cantidadPares;
        document.getElementById('impares').value = cantidadImpares;
        document.getElementById('ceros').value = cantidadCeros;

    } 
  });
  
  });
  