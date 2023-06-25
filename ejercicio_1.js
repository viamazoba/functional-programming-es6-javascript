const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
const arrDuplicado = arr.map((element)=>{return element*2});

// utilizar el método filter para filtrar los números pares de arr
const arrPares = arr.filter((element)=>{return element%2===0});

// utilizar el método reduce para sumar todos los elementos
const total = arr.reduce((sum,element)=> (sum += element));