let num = [5,8,4]

num[3] = 6
num.push(7)

num.sort() //organiza os bagulho em ordem crescente
num.push(1)

console.log (`Nosso vetor é o ${num}`)
console.log (`o primeiro vetor é o ${num[0]}`)

for(let pos=0;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num ) {      //Para(cada pos em num) {console.log(num[pos])} TEM 1 POS PARA CADA POSIÇÂO DENTRO DA VARIÁVEL COMPOSTA NUM (0,1,2,3,4,5)
  console.log(num[pos])     //O "pos" é uma variável que foi declarada dentro do for, ele se refere aos valores dentro do array e é repetido até que todos sejam mencionados
}

let achei = num.indexOf(7) //Revela a posição [] do valor 7 detro do vetor
if (achei == -1) {
    console.log("O valor não foi encontrado") //esse comando substitui a posição -1 (quando um valor não é encontrado)
} else {
    console.log(`O valor está na posição ${achei}`)
}