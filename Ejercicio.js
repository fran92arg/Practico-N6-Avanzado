// function esNatural(num) {
//     // Devuelve true si el num es Natural
//     // Usa Recursividad
//     if (num===0) return true
//     else if(num<0) return false
//     return esNatural(num-1)
// }
// var rta
// console.log(esNatural(3))
// function esNatural(num) {
//     Devuelve true si el num es Natural
//     Usa Recursividad
//     if (num===0) return true
//     else if(num<0) return false
//     return esNatural(num-1)
// }

// console.log(esNatural(4))
var colores = ['Blanco', 'Negros', 'Rojo', 'Amarillo', 'Negros', 'Verde']
function Colores(colores) {
    // Aquellos colores negros cambiar su palabra a Black
    // Devuelve el arreglo
    for(var i=0;i<colores.length;i++){
        if(colores[i].toLowerCase()=="negros"){
            colores[i]="Black"
        }
    }
    return colores
}
console.log("Reemplazo: ",Colores(colores))
function Filtrado(colores) {
    // Del resultado de la funcion Colores() filtra aquellos colores llamados Black
    // ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']
    var arreglo=colores.filter(colores=>colores!=="Black")
    return arreglo
}
console.log("Filtrado: ",Filtrado(colores))
function Filtrar(personas){
    // Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
    // Mostrar arreglo
    var nuevo=personas.filter(personas=>personas.edad>=18)
    return nuevo
}

const personas = [

    { nombre: 'Carlos', edad: 20},
    { nombre: 'Esteban', edad: 15},
    { nombre: 'Franco', edad: 12},
    { nombre: 'Estela', edad: 19},
    { nombre: 'Juan', edad: 10},
    { nombre: 'Mirtha', edad: 17}
];

console.log("Filtrado: ",Filtrar(personas))


