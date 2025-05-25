import { registrar,leer } from "./operaciones.mjs";

const argumentos = process.argv.slice(2)

const operacion = argumentos[0]

if(operacion === 'registrar'){
    const[ ,Nombre, Edad, Raza, Color, Enfermedad] = argumentos
    registrar(Nombre, Edad, Raza, Color, Enfermedad)
}else if (operacion === 'leer'){
    leer()
}else{
    console.log('Operación no reconocida')
}

