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
    let monto = parseFloat(prompt("Ingrese el monto del préstamo"));
    if (monto <= 0) {
        alert("Ingrese un monto valido.");
        return solicitarMonto();
    }
    return monto;
}
function solicitarInteres() {
    let intereses = parseFloat(prompt("Ingrese la tasa de interés"));
    if (intereses <= 0) {
        alert("Ingrese un monto valido.");
        return solicitarInteres();
    }
    return intereses;
}
function solicitarCuotas() {
    let cuota = parseInt(prompt("Ingrese la cantidad de cuotas"));
    if (cuota <= 0) {
        alert("Ingrese un monto valido.");
        return solicitarCuotas();
    }
    return cuota;
}
// Función que simula el prestamo
function simuladorPrestamo() {
    alert("¡Bienvenido al simulador de prestamos!");
    alert("Ingrese los detalles del prestamo.");
    let monto = solicitarMonto();
    let interes = solicitarInteres();
    let cuota = solicitarCuotas();
    // Calcular el interes 
    let montoTotal = monto * (1 + (interes / 100));
    // Calcular la cuota
    let cuotaMensual = montoTotal / cuota;
    // Mostrar el resultado
    let mensaje = "El monto total del prestamo es de $" + montoTotal + " " + "con una cuota de $" + " " + cuotaMensual + " " + "en" + " " + cuota + " " +"meses";
    alert(mensaje);
}
simuladorPrestamo();