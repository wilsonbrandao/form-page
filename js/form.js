
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteformulario(form);
    var erros = validaPaciente(paciente);

   if(erros.length > 0){
       exibeMensagensErro(erros);
        return;
   }
 
    //Aaciona paciente na tabela
    adcionaPacienteNaTabela(paciente)
    form.reset();
    document.querySelector("ul").innerHTML = "";
});

function adcionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function obtemPacienteformulario (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    
    //Adiciona os dados (td) dentro da linha (tr). 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td; 
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco");
        
    if(!validaPeso(paciente.peso)) 
        erros.push("O peso é inválido");
    
    if(!validaAltura(paciente.altura)) 
        erros.push("A altura é inválida");
    
    if(paciente.gordura.length == 0 )
        erros.push("A gordura não pode ser em branco");
 
    if(paciente.peso.length == 0 )
        erros.push("O peso não pode ser em branco");
    
    if(paciente.altura.length == 0 )
        erros.push("A altura não pode ser em branco");
  
    return erros;
}

function exibeMensagensErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    

}

