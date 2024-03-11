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
        vertices.innerHTML = `O discriminante &Delta; é: ${delta} <br>A coordenada do vértice da parábola é: <bolder>(${vx},${vy})</bolder`;
        resultRoots.classList.add('result-roots2');
        result.classList.add('result2');
        vertices.classList.add('vertices2');
        // roots.classList.add('roots-border');

    } else if (delta === 0) {   
        const x = -b / (2 * a);

        result.innerHTML = 'Existe apenas uma raiz real.';
        roots.innerHTML = `x = ${x}`;
        vertices.innerHTML = `O discriminante (o nosso &Delta;) é: ${delta} <br>A coordenada do vértice da parábola é: <bolder>(${vx},${vy})</bolder`;
        resultRoots.classList.add('result-roots2')
        result.classList.add('result2');
        vertices.classList.add('vertices2');

    } else {
        vertices.style.display = "none";
        // result.classList.add('noRoots');
        result.innerHTML = 'Não existem raízes reais.';
        roots.innerHTML = '';
        resultRoots.classList.add('result-roots2')
        result.classList.add('result2');
    }
});

function goToNext(event, nextFieldID) {
    if (event.key === "Enter") {
        event.preventDefault();
        var nextField = document.getElementById(nextFieldID);
        nextField && nextField.focus();
    }
}

function validateForm(){
    const valueA = document.getElementById( 'a' ).value
    const valueB = document.getElementById( 'b' ).value
    const valueC = document.getElementById( 'c' ).value

    if (valueA === '' || valueB === '' || valueC === ''){
        window.alert("Digite os coeficientes A, B e C!")
        return false
}else{
    return true
}
}