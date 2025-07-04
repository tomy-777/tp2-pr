// TRABAJO HECHO POR TOMÁS ROMERO

// 1: HERENCIA.

class Figura {
    constructor(nombre,color){
        this.nombre = nombre;
        this.color = color;
    }
}

class Rectangulo extends Figura {
    constructor(nombre,color,largo,ancho){
        super(nombre,color);
        this.largo = largo;
        this.ancho = ancho;
    }

    calcAreaR(areaR){
    areaR = this.largo * this.ancho;
    return areaR;   
    }
    calcPerimetroR(perimetroR){
    perimetroR = this.largo*2 + this.ancho*2
    return perimetroR;
    }

    get getLargo(){
        return this.largo;
    }
    get getAncho(){
        return this.ancho;
    }
}
class Circulo extends Figura {
    constructor(nombrec,color,radio){
        super(nombrec,color);
        this.radio = radio;
        this.diametro = radio*2;
    }
        calcAreaC(areaC){
        areaC = Math.PI * this.radio**2;
        return areaC;
    }
        calcCircun(circunferencia){
        circunferencia = Math.PI * this.diametro;
        return circunferencia;
    }

    get getRadio(){
        return this.radio;
    }
    get getDiametro(){
        return this.diametro;
    }
}


// PUNTO 2: ABSTRACCIÓN y polimorfismo a la vez

class Vehiculo {
    #marca; 
    #modelo; 
    #color; 
    #kilometraje; // el # es para que sean privados
    #apagado;

    constructor(marca,modelo,color,kilometraje){

        if (this.constructor == Vehiculo) { // condicional donde se fuerza el error si se crea el objeto mediante la clase Vehiculo
            throw new Error("No se puede instanciar en base a la clase Vehiculo."); // THROW FUERZA EL ERROR
        } else {
            this.#marca = marca;
            this.#modelo = modelo;
            this.#color = color;
            this.#kilometraje = kilometraje;
            this.#apagado = true;
        }

    }

    encender(){
        throw new Error("Esta funcionalidad se debe aplicar en la clase hija");
    }
    apagar(){
        throw new Error("Esta funcionalidad se debe aplicar en la clase hija");
    }
    conducir(){
        throw new Error("Esta funcionalidad se debe aplicar en la clase hija");
    }
}

class Coche extends Vehiculo {
    constructor(marca,modelo,color,kilometraje){
        super(marca,modelo,color,kilometraje);
    }

    encender(){
        if (this.apagado == false) {
            console.log("El auto ya está encendido")
        } else {
            console.log(`El auto se encendió.`);
            this.apagado = false;
        }

    }
    apagar(){
        if (this.apagado == true) {
            console.log("El auto ya está apagado.")
        } else {
            console.log(`El auto se apagó.`);
            this.apagado = true;
        }

    }
    conducir(distKm){
        if (this.apagado == true ) {
            console.log("No se puede conducir porque el auto está apagado");
        } else {
            console.log(`Se han conducido ${distKm} kilómetros`);
            this.kilometraje += distKm;
        }

    }

}

class Bicicleta extends Vehiculo {
    constructor(marca,modelo,color,kilometraje){
        super(marca,modelo,color,kilometraje);
    }
    encender(){
        console.log("No se puede encender una bicicleta.");
    }
    apagar(){
        console.log("No se puede apagar una bicicleta.");
    }
    conducir(distKm){
        console.log(`Se han conducido ${distKm} kilómetros`);
        this.kilometraje += distKm;
    }

    
}


bici = new Bicicleta("olmo","nimbus 2000","verde",5);
cochecito = new Coche("Fiat","Six Hundred","Naranja",84000);

bici.encender();
bici.apagar();
bici.conducir(2);

cochecito.encender();
cochecito.conducir(25);
cochecito.encender();
cochecito.apagar();
cochecito.apagar();
cochecito.conducir();

// PUNTO 3: ENCAPSULAMIENTO

class cuentaBancaria {
    #saldo;
    #numeroCuenta = "";

    constructor(saldo,numeroCuenta){
        this.#saldo = saldo;
        this.#numeroCuenta = numeroCuenta;
    }

    depositar(cantidad){
        this.#saldo += cantidad
        console.log(`El depósito fue exitoso.`);
    }
    retirar(cantidad){
        if (cantidad > this.#saldo) {
            console.log("No se puede retirar más de lo que tiene.");
        } else {
            this.#saldo -= cantidad;
            console.log("El retiro fue exitoso.");
        }

    }

    get getSaldo(){
        return this.#saldo;
    }
}
const cuentaB1 = new cuentaBancaria(0,"12345");

cuentaB1.depositar(50000); // deposita 50000 a la cuenta

console.log(cuentaB1.getSaldo); // devuelve 50000

cuentaB1.retirar(25000);

console.log(cuentaB1.getSaldo);




// PUNTO 4: POLIMORFISMO

class Empleado {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    get calcularSalario(){
        return 0
    }
}

class empleadoPorHora extends Empleado {
    constructor(nombre,apellido,horasTrabajadas,tarifaHora){
        super(nombre,apellido);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaHora = tarifaHora
        }

    calcularSalario(){
        return this.tarifaHora*this.horasTrabajadas;        
    }
    
}
class empleadoFijo extends Empleado {
    constructor(nombre,apellido,salarioMensual){
        super(nombre,apellido);
        this.salarioMensual = salarioMensual;
    }

    calcularSalario(){
        return this.salarioMensual;        
    }
}

const empleados = [
    new empleadoPorHora("Fabián","Aniceto",29,5000), new empleadoFijo("Claudio","Morales",400000)
];

empleados.forEach(empleado => {
    console.log(`El empleado ${empleado.nombre} ${empleado.apellido} cobra $ ${empleado.calcularSalario()}`);
});

// 5: TODOOO!!!!!!!!!!

class Estudiante {
    #nombre;
    #universidad;

    constructor(nombre,universidad){
        if (this.constructor == Estudiante) {
            throw new Error("No se puede instanciar a partir de esta clase.")
        } else {
            this.nombre = nombre;
            this.universidad = universidad;
        }
    }   


    obtenerPromedio(){
        throw new Error("Este método se debe aplicar en una clase hija.")
    }
    mostrarInfo(){
        throw new Error("Este método se debe aplicar en una clase hija.")
    }
}

class estudianteDeGrado extends Estudiante {
    constructor(nombre,universidad,notas = {}){
        super(nombre,universidad);
        this.notas = notas;
    }

    obtenerPromedio(suma){
        suma = this.notas.reduce((sumaNotas,nota) => sumaNotas + nota, 0);
        return suma / this.notas.length;
    }

    mostrarInfo(){
        console.log(`Nombre de estudiante: ${this.nombre}`);;
        console.log(`Universidad dónde estudia: ${this.universidad}`);
        console.log(`Promedio de notas: ` + this.obtenerPromedio())
    }
}

class estudianteDePosgrado extends Estudiante {
    constructor(nombre,universidad,tesisCalificada){
        super(nombre,universidad);
        this.tesisCalificada = Boolean(tesisCalificada);
    }

    tesisCompletada(){
        if (this.tesisCalificada == true) {
            return "Tesis completada";
        } else {
            return "Tesis incompleta";
        }
    }

    mostrarInfo(){
        console.log(`Nombre de estudiante: ${this.nombre}`);;
        console.log(`Universidad dónde estudia: ${this.universidad}`);
        console.log(`Estado de tesis: ${this.tesisCompletada()}` )
    }
}


