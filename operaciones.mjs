import fs from 'fs'

//Funciion para registrar
const registrar = (Nombre, Edad, Raza, Color, Enfermedad) => { 
    //Cambié los nombres de las variables porque eran muy feos
    try {
        const data = fs.readFileSync('citas.json', 'utf8')
        const citas = JSON.parse(data)
        //Verificando si falta un campo
        if(!Nombre || !Edad || !Raza || !Color|| !Enfermedad){
            console.log('Por favor introduzca todos los datos!')
            return
        }
        // Declarando un nuevo registro
        const new_cita = {
            Nombre,
            Edad,
            Raza,
            Color,
            Enfermedad
        }
        //Agregando el registro
        citas.push(new_cita)
        fs.writeFileSync('citas.json', JSON.stringify(citas))
        console.log(`Se ha resgistrado de forma correcta la cita para ${Nombre}`)
    } catch (error) {
        console.error('No se puedo registrar la cita debido al siguiente error:',error)
        console.log('Intente Nuevamente')
    }
}

//Función para leer
const leer = () => {
    try {
        const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
        console.log(data)
    } catch (error) {
        console.log('No se pudo leer el archivo debido al siguiente error:',error)
    }
}


export {registrar, leer} 