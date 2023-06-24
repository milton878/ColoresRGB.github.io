// variables
const inputRojo = document.querySelector('#rojo');
const inputVerde = document.querySelector('#verde');
const inputAzul = document.querySelector('#azul');
// -----parrafos
const textoRojo = document.querySelector('#texto-rojo');
const textoVerde = document.querySelector('#texto-verde');
const textoAzul = document.querySelector('#texto-azul');

// tomo los valores de los textos
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// reemplazo los valores
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// como actualizar el color y el parrafo
function actualizarColor(rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    // actualizar el body en el dom
    document.body.style.backgroundColor = colorRGB;
}
// para que se vean los cambios en html
// actualizo rojo
inputRojo.addEventListener('change', (e)=>{
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);

})
// actualizo verde
inputVerde.addEventListener('change', (e)=>{
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);

})
// acutalizo azul
inputAzul.addEventListener('change', (e)=>{
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);

})