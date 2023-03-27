const form = document.querySelector('.form');
const input = document.querySelector('.cepUsuario');

const returnRua = document.querySelector('.retornoRUA');
const returnBairro = document.querySelector('.retornoBAIRRO');
const returnCidade = document.querySelector('.retornoCIDADE');
const returnUf = document.querySelector('.retornoUF');
const returnCep = document.querySelector('.retornoCEP');
const returnDDD = document.querySelector('.retornoDDD');

const consultaCEP = (cep) => { 
        if(cep.length !==8){
            alert('CEP INVALIDO!'); 
            return;
        }

    const APIResponse = fetch(`https://viacep.com.br/ws/${cep}/json`).then(function(response){
        response.json().then(function(data){        
        console.log(data);        
        returnDados(data);
        })
    })
}

function returnDados(dados){
    returnRua.innerHTML = dados.logradouro;
    returnBairro.innerHTML = dados.bairro;
    returnCidade.innerHTML = dados.localidade;
    returnUf.innerHTML = dados.uf;
    returnCep.innerHTML = dados.cep;
    returnDDD.innerHTML = dados.ddd;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    consultaCEP(input.value);  
    input.value = '';   
})


