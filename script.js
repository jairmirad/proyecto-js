let nombre=prompt ("Bienvenido al simulador de Plazo Fijo del Banco Limite, ingrese su nombre")
let apellido=prompt ("Ingrese su apellido")
const anio=2023

let nombreApellido= nombre +(" ")+ apellido;
let anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))

while(isNaN (anioNacimiento)){
    alert("ingreso un valor no numérico")
    anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))
}
const aniomin=1920

while(anioNacimiento < aniomin || anioNacimiento>anio){
        alert("ingreso un valor incorrecto");
        anioNacimiento=parseInt (prompt("Ingrese su año de nacimiento"))
    }

let edad=anio-anioNacimiento

let numenDias= parseInt (prompt (" ingrese la cantidad de días que quiere hacer el plazo fijo ( de 30 hasta 120 días)" ))

if ( numenDias<30 || numenDias>120 ){
    numenDias= parseint( prompt("Ingrese un valor correcto "))
}    
else{
    let montoPuesto=parseInt (prompt("Ingrese el monto que desea depositar"))
    const interesDia =0.205479
    let montoPago=montoPuesto*interesDia+montoPuesto
    alert ("Usted recibirá " + montoPago )
}