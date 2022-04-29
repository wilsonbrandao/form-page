var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {

    //requisição api dados
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send(); //enviar requisção
    var erroAjax = document.querySelector("#erro-ajax");

    //tratando requisição
    xhr.addEventListener("load", () => {
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(paciente => adcionaPacienteNaTabela(paciente));
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })
    
})
