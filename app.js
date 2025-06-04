alert("Boas vindas ao nosso site");
let quantidadeMilhas = prompt("Digite sua quantidade milhas");

// Converte a string para um número inteiro
quantidadeMilhas = parseInt(quantidadeMilhas); 

let porcentagemDesconto = 0;

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
    alert("Seu desconto é de " + porcentagemDesconto + "%"); // Adicionado um texto explicativo
} else {
    if(quantidadeMilhas > 5000){
        porcentagemDesconto = porcentagemDesconto + 10;
        alert("Seu desconto é de " + porcentagemDesconto + "%"); // Adicionado um texto explicativo
    }
    else{
        alert("Você não tem desconto")
    }
}