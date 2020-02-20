//crear un constructor

function Robot(name) {
    this.name = name;
}
//se le aplica un metodo 'say'
Robot.prototype.say = function () {
    console.log('hi, I\'m ' + this.name);
};
//vamos a crear un robot y colocarle un nombre
const ada = new Robot('ada');
ada.say();

console.log(ada instanceof Robot);
console.log(robot.prototype.isPrototypeOf(ada));

//Ejemplo diferente usando object.create
//crea un objeto nuevo que tiene como prototipo un objeto que le mandamos como argumento
//es comun cuando uno necesita logica de inicializacion hacerlo sobre el propio objeto en vez de meterlo en una funcion con init

const robot = {
    init: function (name) {
        this.name = name;
        return this;
    },
    say: function () {
        console.log('hi, I\'m ' + this.name);
    }
};
/*envolver en una funcion
function createRobot(name) {
    const obj = Object.create(robot);
    obj.name = name; 
    return obj;
}
se sustituye en el ejemplo por init al comienzo*/

//crea un objeto nuevo y le asigna un prototipo
const ada = Object.create(robot, {
    name: {
        value = 'ada';
        enumerable: true
    }
});

ada.say();