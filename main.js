let nomeUsuário = ""; 
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuário == ""){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textcontent = "seja muito bem vindo";
}else{
    elemento.textcontent = nomeUsuário;
}
