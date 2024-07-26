let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtML = document.querySelector(elemento);
    elementoHtML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numerodeUsuario =parseInt(document.getElementById('valorUsuario').value);

    if (numerodeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numerodeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El numero es menor');
        }else{
            asignarTextoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    let valorCaja= document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
   }else{

   if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}
function condicionesIniciales(){
    asignarTextoElemento('H1', 'Juego del nmero secreto');
    asignarTextoElemento('p', 'Escoge un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();