import { registrar,leer } from "./operaciones.mjs";

//Argumentos que podremos captar desde la terminar (Uso de process y argv)
const argumentos = process.argv.slice(2)

const operacion = argumentos[0]

//Operaciones posibles a ejecutar importadas desde .operaciones.mjs

if(operacion === 'registrar'){
    const[ ,Nombre, Edad, Raza, Color, Enfermedad] = argumentos
    registrar(Nombre, Edad, Raza, Color, Enfermedad)
}else if (operacion === 'leer'){
    leer()
}else{
    console.log('Operación no reconocida')
}

