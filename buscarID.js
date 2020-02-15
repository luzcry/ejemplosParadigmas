//estilo imperativo

const array = [
    {id: 'uno', name: 'el primero'},
    {id: 'dos', name: 'el segundo'},
    {name: 'no tengo id'}
];

//para calcular los ids primero haces un arrglo vacio donde irán los resultados

const ids = [];

//luego haces un bucle para recorrer el arreglo
for(let i = 0; i < array.length; i++){
//el tercer objeto no tiene id, se hace una condicional
//si el elemento actual tiene un id almacenalo en ids
if(array[i].id) {
    ids.push(array[i].id);
    }
}

//console.log(ids);
//un arreglo con dos elementos 

//punto de vista declarativo: estilo funcional
//filter recibe una funcion como argumento y lo invoca para cada elemento, checkea el retorno de la funcion del booleano
const ids2 = array
.filter(item => typeof item.id === 'string')
.map(item => item.id)

console.log (ids2);
