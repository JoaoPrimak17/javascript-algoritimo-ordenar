const {edGalho, edFolha} = require('./array');


function Juntalista(lista1, lista2){
    let ListaFinal = [];

    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    let atual = 0;

    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];
        if (produtoAtualLista1.preco < produtoAtualLista2.preco){
            ListaFinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
    }else{
        ListaFinal[atual] = produtoAtualLista2;
        posicaoAtualLista2++;
    }
    atual++;
  }
  while (posicaoAtualLista1 < lista1.length){
    ListaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }
  while (posicaoAtualLista2 < lista2.length){
    ListaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++
  }  return ListaFinal;
}
console.log(Juntalista(edGalho,edFolha));