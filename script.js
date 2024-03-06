// Função para calcular as raízes da equação quadrática
function calcularRaizes(a, b, c) {
  // Fórmula de Bhaskara
  const delta = b ** 2 - 4 * a * c;

  if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return { x1, x2, delta };
  } else if (delta === 0) {
      const x1 = -b / (2 * a);
      return { x1, delta };
  } else {
      return { delta };
  }
}

// Obter os coeficientes do formulário
document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  // Calcular as raízes
  const resultado = calcularRaizes(a, b, c);

  // Exibir os resultados e mensagens
  document.getElementById("resultado").innerHTML = `
      <p>x1 = ${resultado.x1 !== undefined ? resultado.x1 : "Não existe raíz"}</p>
      <p>x2 = ${resultado.x2 !== undefined ? resultado.x2 : "Não existe raíz"}</p>
  `;

  document.getElementById("mensagem").innerHTML = `
      <p>${mensagemDelta(resultado.delta)}</p>
  `;
});

// FRetorna a mensagem de acordo com o valor de delta
function mensagemDelta(delta) {
  if (delta > 0) {
      return "Duas raízes reais diferentes.";
  } else if (delta === 0) {
      return "Duas raízes reais iguais.";
  } else {
      return "Não existem raízes reais.";
  }
}
