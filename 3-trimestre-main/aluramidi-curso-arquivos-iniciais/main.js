

function tocaSom(){
    document.querySelector(idElementoAudio).play();
}

function tocaSom(idElementoAudio){

}


const listaDeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição - enquanto

while(contador < listaDeTeclas.length) {
    let contador = 0
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_splash')
    };
    contador = contador + 1;
}
