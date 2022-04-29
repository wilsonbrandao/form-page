var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function (event) {
    //event.target.parentNode.remove();
    var alvoEvent = event.target; //td --> A célula
    var paiDoAlvo = alvoEvent.parentNode; //tr --> a Linha
    
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function() {
        paiDoAlvo.remove();
    }, 500);
})

/* pacientes.forEach(paciente => {
    paciente.addEventListener("dblclick", function (){
        this.remove(); //this na DOM não funciona com arrow function
    }); //evento de doubleClick = dblclick
}); */
