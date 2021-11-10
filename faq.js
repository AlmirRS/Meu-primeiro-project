//BUSCAR OS ITENS DA TELA 
const itensPerguntasERespostas = document.querySelectorAll('.item');

//ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function(){

//VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
const estaAtiva = item.classList.contains('ativo')

//EU PRECISO FECHAR TODAS
itensPerguntasERespostas.forEach(function(item){
    item.classList.remove('ativo')
})

//SE A PERGUNTA NÃO ESTA TIVA 
if(!estaAtiva){
//ABRIR A RESPOSTA ATUAL
item.classList.add('ativo')
}

})
})