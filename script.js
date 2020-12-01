let numero = prompt('Ingrese un numero');

//let tipoDat = typeof(numero);

numero = Number(numero);

if (isNaN(numero)){
    alert('Recargue la pagina e ingrese un numero');
}else{
    if (numero > 10 && numero < 50){
        alert('El numero se encuentra entre 10 y 50!');
    }
}

