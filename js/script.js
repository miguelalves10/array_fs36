// como criar uma array/lista vazio
const nomes = [];


const nomePessoas = ['Alberto', 'Pedro', 'Dárquio', 'Rafa'];



const anos = [12, 25, 30, '10']

// como adicionar um elemento na lista
nomes.push('Miguel Alves');

// console.log(nomes);

nomes.push('Edmar');

// console.log(nomes);

nomes.push(2);

// console.log(nomes);


const idades = [1, 23, 92, 8, 58, 60, 20, 87, 22, 36]

// console.log(idades);
// console.log(idades[5]);

// iterar uma array
for(let index = 0; index < idades.length; index++ ) {
    //console.log(idades[index]);
}

idades.forEach(function(value, index) {
    console.log(value * 3);
})