alert("¡Bienvenidos a credifacil!");
alert("Ingrese sus datos");
//ingreso de datos
function pedirNombre(){
    let ingreseSuNombre= prompt ("Ingrese su nombre");
let ingreseSuApellido= prompt ("Ingrese su apellido");
const VACIO = "";
if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {
    alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido)
}else{
    alert("Falta ingresar informacion")
    return pedirNombre();
}
}
pedirNombre ();
// Función para solicitar el préstamo
function solicitarMonto() {
    let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
    if (monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return solicitarMonto();
    }
    return monto;
}
function solicitarInteres() {
    let intereses = parseFloat(prompt("Ingrese la tasa de interés (%):"));
    if (intereses <= 0) {
        alert("Por favor, ingrese una tasa de interés válida.");
        return solicitarInteres();
    }
    return intereses;
}
function solicitarPlazo() {
    let plazo = parseInt(prompt("Ingrese el plazo del préstamo (en meses):"));
    if (plazo <= 0) {
        alert("Por favor, ingrese un plazo válido.");
        return solicitarPlazo();
    }
    return plazo;
}
// Función que simula el prestamo
function simuladorPrestamo() {
    alert("¡Bienvenido al simulador de prestamos!");
    alert("Ingrese los detalles del prestamo.");
    let monto = solicitarMonto();
    let interes = solicitarInteres();
    let plazo = solicitarPlazo();
    // Calcular el interes 
    let montoTotal = monto * (1 + (interes / 100));
    // Calcular la cuota mensual
    let cuotaMensual = montoTotal / plazo;
    // Mostrar el resultado
    let mensaje = "El monto total del prestamo es de $" + montoTotal + " " + "con una cuota mensual de $" + " " + cuotaMensual + " " + "en" + " " + plazo + " " +"meses";
    alert(mensaje);
}
simuladorPrestamo();