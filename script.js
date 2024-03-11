const form = document.querySelector('form');
const result = document.querySelector('.result');
const roots = document.querySelector('.roots');
const resultRoots = document.querySelector('.result-roots');
const vertices = document.querySelector('.vertices');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const a = e.target.a.value;
    const b = e.target.b.value;
    const c = e.target.c.value;

    // Calc the discriminant
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        const vx = -b / (2 * a);
        const vy = -delta / (4 * a);

        result.innerHTML = 'Existem duas raízes reais e distintas.';
        roots.innerHTML = `x<sub>1</sub> = ${x1}, x<sub>2</sub> = ${x2}`;
        vertices.innerHTML = `O discriminante (&Delta;) é: ${delta} <br>O vértice da parábola está na coordenada: <bolder>(${vx},${vy})</bolder`;
        roots.classList.add('roots-border');
        result.classList.add('result2');
        resultRoots.classList.add('result-roots2');
        vertices.classList.add('vertices2');
    } else if (delta === 0) {   
        result.innerHTML = 'Existe apenas uma raiz real.';
        const x = -b / (2 * a);
        roots.innerHTML = `x = ${x}`;
        result.classList.add('oneRoot');
        roots.classList.add('roots-border');
    } else {
        result.classList.add('noRoots');
        result.innerHTML = 'Não existem raízes reais.';
        roots.innerHTML = '';
    }
});