function Note(text) {
    this.text = text || '';
    this.createdAt = new Date ();
    this.completed = false;
}
/*Hemos declarado una función (Note) que hace uso de una pseudo variable llamada this. La presencia de this,
 junto con la convención de usar la primera letra en mayúscula, nos indican que esta función está escrita para ser
  invocada con el keyword new. Este tipo de función es lo que conocemos como un constructor. Los constructores son 
  funciones cuyo propósito es crear un objeto, inicializarlo y ofrecernos una manera de especificar el prototipo que 
  tendrán los objetos creados con este constructor. */
//añadirle funcionalidad a traves del prototipo

Note.prototype.toString = function () {
    let str = '[' + (this.completed ?  'X' : ' ') + ']';
    str += ' | ' + this.createdAt.toDateString(); + '| text';
    str += ' | ' + this.text;
    return str;
};
/*Cuando invocamos un constructor precedido de new, la pseudo-variable this es una referencia al nuevo objeto creado 
al invocar el constructor
Cuando usamos constructores, es importante acordarnos de usar new a la hora de invocarlos, si no, el constructor
retornará undefined.*/
const note = new Note ('comprar arroz');
console.log(note.toString);
//herencia prototipal

/*Todo es un objeto
Los objetos se comunican enviando y recibiendo mensajes (en términos de objetos)
Los objetos deben tener su propia memoria (en términos de objetos)
Todo objeto es una instancia de una clase (que debe ser un objeto)
La clase tiene el comportamiento compartido para las instancias (como objetos en un programa)
Para evaluar un programa, se pasa el control al primer objeto y el resto se trata como su mensaje.*/