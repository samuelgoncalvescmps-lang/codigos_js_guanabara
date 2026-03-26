var raio = document.getElementById('raio')
var altura = document.getElementById('Altura')
var res = document.getElementById('res')
var cm = document.getElementById('cm')
var m = document.getElementById('m')

function calcular() {
    //2Ab + Al    Ab= pi*r^2  Al= 2*pi*r*h

if (Number(raio.value) <= 0 || Number(altura.value) <= 0) {
    alert('Insira valores válidos')
} else {

res.innerHTML = `Área da base = ${3.14*(Number(raio.value))**2}
<p>Área lateral = ${2*3.14*Number(raio.value)*Number(altura.value)}</p>
<p>Área Total = ${(3.14*(Number(raio.value))**2)*2+2*3.14*Number(raio.value)*Number(altura.value)}
<p>Volume = ${(3.14*(Number(raio.value))**2)*Number(altura.value)}`

}
    
} 

//Não sei fazer as opções do select gerarem resultados diferentes, que burro dá zero pra ele 