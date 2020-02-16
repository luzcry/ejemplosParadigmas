//estilo procedural

const array = [
    {id: 'uno', name: 'el primero'},
    {id: 'dos', name: 'el segundo'},
    {name: 'no tengo id'}
];
function hasId(obj) {
    return obj && typeof obj.id === 'string';
}
function getIds(arr) {
    const ids = [];
    for (let i = 0; i < arr.length; i++) {
        if (hasid(arr[i])) {
            ids.push(array[i].id);
        }
    }
    return ids;
}
console.log(getIds(array)); // ['uno', 'dos']
console.log(hasId()); // false
console.log(hasId({name: 'foo'})); // false
console.log(hasId({id: 'uno'})); // true

console.log(getIds(array));