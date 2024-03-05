// Função para calcular as raízes da equação quadrática
function calcularRaizes(a, b, c) {
    // Fórmula de Bhaskara
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
    return { x1, x2 };
  }
  
  // Obter os coeficientes do formulário
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  
  // Calcular as raízes
  const raizes = calcularRaizes(a, b, c);
  
  // Exibir os resultados
  document.getElementById("resultado").innerHTML = `
    <p>x1 = ${raizes.x1}</p>
    <p>x2 = ${raizes.x2}</p>
  `;
  
  // Gerar mensagens informativas
  if (delta > 0) {
    // Raízes reais distintas
    document.getElementById("mensagem").innerHTML = "A equação possui duas raízes reais distintas.";
  } else if (delta === 0) {
    // Raíz real única
    document.getElementById("mensagem").innerHTML = "A equação possui uma única raiz real.";
  } else {
    // Raízes complexas
    document.getElementById("mensagem").innerHTML = "A equação possui duas raízes complexas.";
  }
  
