import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function Calc() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [result, setResult] = useState('');
    const [roots, setRoots] = useState('');
    const [vertices, setVertices] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const delta = Math.pow(b, 2) - 4 * a * c;
        const vx = -b / (2 * a);
        const vy = -delta / (4 * a);

        if (delta > 0) {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);

            setResult('Existem duas raízes reais e distintas.');
            setRoots(`x₁ = ${x1}, x₂ = ${x2}`);
            setVertices(`O discriminante Δ é: ${delta} A coordenada do vértice da parábola é: (${vx},${vy})`);

        } else if (delta === 0) {
            const x = -b / (2 * a);

            setResult('Existe apenas uma raiz real.');
            setRoots(`x = ${x}`);
            setVertices(`O discriminante Δ é: ${delta} <br/> A coordenada do vértice da parábola é: (${vx},${vy})`);

        } else {
            setResult('Não existem raízes reais.');
            setVertices(`A coordenada do vértice da parábola é: (${vx},${vy})`);
            setRoots('');
        }
        
    };
    
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>

                <h1>Calcule as raízes <br/> e os vértices</h1>

                <input type="number" id="a" value={a} onChange={(e) => setA(parseInt(e.target.value))} placeholder="Coeficiente a" />

                <input type="number" id="b" value={b} onChange={(e) => setB(parseInt(e.target.value))} placeholder="Coeficiente b" />

                <input type="number" id="c" value={c} onChange={(e) => setC(parseInt(e.target.value))} placeholder="Coeficiente c" /><br/>

                <span className="btns">
                    <button className='btnCalcReset' type="submit">CALCULAR</button>
                    <button  className='btnCalcReset' type="reset">REFAZER</button>
                </span>
                
            </form>
            {isVisible && (
            <div className="resultAll">
                <div className="result">{result}</div>
                <div className="roots">{roots}</div>
                <div className="vertices">{vertices}</div>
            </div>
            )}
        </div>
    );
}

export default Calc;
