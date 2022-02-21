//1 capturar os valore
//1.a capturar os campos de inserir valores
//1.b capturar os valores inseridos
//2 armazenar valores de alguma forma (objeto)
//3 criar funções fazer os calculos  nas sessoes 1 e 2
// 4 inserir dados de valores e atualizar a interface.

const dadosArmazenados= {
    orcamento: 0,
    despesas: 0,
    saldo:0,
};

const campoInputOrcamento=document.querySelector('.formularioEntradaOrcamento input')
const buttonCalcular=document.querySelector('.formularioEntradaOrcamento button')
     
buttonCalcular.addEventListener('click', capturarValorOrcamento);

    function capturarValorOrcamento(){
        const valorOrcamento=Number(campoInputOrcamento.value);
        dadosArmazenados.orcamento=valorOrcamento;
        dadosArmazenados.saldo=valorOrcamento;   
        atualizarInterface();    
        console.log(capturarValorOrcamento);
};    

const campoInputDespesaNome=document.querySelector('.formularioEntradaDespesas__nome');
const campoInputDespesaValor=document.querySelector('.formularioEntradaDespesas__valor');;
const buttonDespesa=document.querySelector('.formularioEntradaDespesas button');

buttonDespesa.addEventListener('click', capturarValorDespesa);

    function capturarValorDespesa(){
        const nomeDespesa=campoInputDespesaNome.value;
        const valorDespesa=Number(campoInputDespesaValor.value);
       
        dadosArmazenados.despesas+=valorDespesa;
        dadosArmazenados.saldo-=valorDespesa;

        atualizarInterface();

        incluirDespesasInterface(nomeDespesa, valorDespesa);
    };

    const orcamento=document.querySelector('.secaoImpressaoResultados_orcamento p');
    const despesas=document.querySelector('.secaoImpressaoResultados_despesas p');
    const saldo=document.querySelector('.secaoImpressaoResultados_saldo p');

    function atualizarInterface(){

        orcamento.innerText=`+R$ ${dadosArmazenados.orcamento} ` ;
        despesas.innerText=`-R$ ${dadosArmazenados.despesas} ` ;
        saldo.innerText= `R$ ${dadosArmazenados.saldo} `;
    }
   const listaDespesas=document.querySelector('.containerDespesas_lista');

   function incluirDespesasInterface(nomeDespesa, valorDespesa){
       const li= document.createElement('li');
       const h3= document.createElement('h3');
       const p= document.createElement('p');
       const img= document.createElement('img');
       
       h3.innerText = nomeDespesa;
       p.innerText = `R$ ${valorDespesa}`;
   
       img.src = './assets/img/trash.svg';
       img.alt = 'Icone lixeira';

       img.addEventListener('click', removerDespesa);

       li.dataset.valor = valorDespesa;
       li.appendChild(h3);
       li.appendChild(p);
       li.appendChild(img);
   
       listaDespesas.appendChild(li); 
  }

  function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode;
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);

    dadosArmazenados.despesas -= valorDespesaClicada;
    dadosArmazenados.saldo += valorDespesaClicada;
    
    atualizarInterface();
    despesaClicada.remove();
}

 
    