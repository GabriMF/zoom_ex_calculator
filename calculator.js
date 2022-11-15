/*  - cajon input donde meter el precio
    - cajon output donde mostrar el precio con iba
        - hacer div para cajon input y su texto
        - hacer div para cajon output y su texto
        - hacer variable input
        - hacer variable output
        - hacer funcion para calcular iva dependiendo del input
------------------------------------------------------------------------------------*/


function iva_calculate(){
    console.log('funciona');
let input = document.getElementsByClassName('input_box');
let output = input * 1.21;
document.getElementsByClassName('output_box').innerHtml = (output);
}
iva_calculate();
