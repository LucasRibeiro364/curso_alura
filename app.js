// Solicita as informações ao usuário
let mediaGasolina = parseFloat(prompt("Qual a média (Km/L) do seu carro na gasolina?"));
let mediaAlcool = parseFloat(prompt("Qual a média (Km/L) do seu carro no álcool?"));
let valorGasolina = parseFloat(prompt("Qual o valor (R$) do litro da gasolina?"));
let valorAlcool = parseFloat(prompt("Qual o valor (R$) do litro do álcool?"));

// Calcula o custo por quilômetro para cada combustível
let custoPorKmGasolina = valorGasolina / mediaGasolina;
let custoPorKmAlcool = valorAlcool / mediaAlcool;

// Prepara a mensagem final
let mensagem = "";

// Compara os custos e constrói a mensagem detalhada
if (custoPorKmAlcool < custoPorKmGasolina) {
  let diferenca = custoPorKmGasolina - custoPorKmAlcool;
  let porcentagemEconomia = (diferenca / custoPorKmGasolina) * 100;

  mensagem = "Compensa mais colocar **ÁLCOOL**!\n\n";
  mensagem += "Confira os cálculos:\n";
  mensagem += `Custo por Km (Gasolina): R$ ${custoPorKmGasolina.toFixed(3)}/Km\n`;
  mensagem += `Custo por Km (Álcool): R$ ${custoPorKmAlcool.toFixed(3)}/Km\n\n`;
  mensagem += `Ao optar pelo álcool, você economiza aproximadamente ${porcentagemEconomia.toFixed(2)}% por quilômetro rodado.`;

} else if (custoPorKmGasolina < custoPorKmAlcool) {
  let diferenca = custoPorKmAlcool - custoPorKmGasolina;
  let porcentagemEconomia = (diferenca / custoPorKmAlcool) * 100;

  mensagem = "Compensa mais colocar **GASOLINA**!\n\n";
  mensagem += "Confira os cálculos:\n";
  mensagem += `Custo por Km (Gasolina): R$ ${custoPorKmGasolina.toFixed(3)}/Km\n`;
  mensagem += `Custo por Km (Álcool): R$ ${custoPorKmAlcool.toFixed(3)}/Km\n\n`;
  mensagem += `Ao optar pela gasolina, você economiza aproximadamente ${porcentagemEconomia.toFixed(2)}% por quilômetro rodado.`;

} else {
  mensagem = "O custo por quilômetro é **IGUAL** para ambos os combustíveis.\n\n";
  mensagem += "Confira os cálculos:\n";
  mensagem += `Custo por Km (Gasolina): R$ ${custoPorKmGasolina.toFixed(3)}/Km\n`;
  mensagem += `Custo por Km (Álcool): R$ ${custoPorKmAlcool.toFixed(3)}/Km\n\n`;
  mensagem += "A escolha é sua, pois não há diferença econômica.";
}

// Exibe a mensagem final
alert(mensagem);