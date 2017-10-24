var comparar= function(arreglo1,arreglo2){
if(arreglo1.length !== arreglo2.length){
  return false;
  //document.write("tus arreglos no son iguales")
}else{
  //document.write("tus arreglos  son iguales")
  for(var i=0;i<arreglo.length; i +=1){
    if(arreglo1[i] !== arreglo2[i]){
     return false;
    }
  }
  document.write("Todas las condiciones se cumplen")
  return true;
}
}

var array1=[1,2,3,4,5,6,7,8,9,10];
var array2=[1,2,3,4,5,6,7,8,9,10];
