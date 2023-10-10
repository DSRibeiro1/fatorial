"user strict"
const historico = [];

function calcular() {
  const numeroInput = document.getElementById('numero de cores');
  const resultadoDisplay = document.getElementById('resultado');

  const numero = parseInt(numeroInput.value);

  if (isNaN(numero) || numero < 0) {
    resultadoDisplay.textContent = 'Por favor, insira quantidade de cores.';
    return;
  }

  const fatorial = calcular(numero);
  resultadoDisplay.textContent = `O fatorial de cores ${numero} é ${fatorial}.`;

  // Adiciona o cálculo ao histórico
  historico.push({ numero, fatorial });
  exibirHistorico();
}

function calcular(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * calcular(numero - 1);
  }
}

function exibirHistorico() {
  const historicoList = document.getElementById('historico');
  historicoList.innerHTML = '';

  for (const item of historico) {
    const listItem = document.createElement('li');
    listItem.textContent = `Fatorial de cores ${item.numero}: ${item.fatorial}`;
    historicoList.appendChild(listItem);
  }

}
