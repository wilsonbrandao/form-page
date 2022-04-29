var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){ //"input" evento de digitar algo no <input>
    this.value;
    console.log(this.value)

    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        pacientes.forEach ((paciente) => {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var regex = new RegExp(this.value, "i");
            if (!regex.test(nome)){
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        });
    }else {
        pacientes.forEach((paciente) => {
            paciente.classList.remove("invisivel");
        });
    }
});
