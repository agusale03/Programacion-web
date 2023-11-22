/* Crear variables */
 /*let a = 1;

 let b = 3; */

 /* Modifico una variable*/
/* a = 5 */


 /* Tipos de datos primitivos

 string = cadena de caracteres
 Number = integer y float
 boolean = verdadero o falso

 */

 /* Console.log() es como el print en oython*/

 /*

 +Suma
 -Resta
 / Division cociente
 * Multipliacion
 % Division resto
 ** Potencia

 */

 
/* Operadores logicos 

== igual
|| distinto
> mayor
>= mayor o igual
< menor
<= menor o igual
=== igualdad estricta (valor y tipo de dato)
!== diferencia estricta (valor y tipo de dato)

*/


/* DOM */

/* let parrafoHTML= document.getElementByID
("parrafo") ----> de esta manera almaceno el objeto parrafo.

y si ahora quiero aplicarle un metodo directamente uso la variable ---> 

parrafoHTML.inner.Text = "Hola mundo"
*/

/* si quiero poner el script en el head debo poner defer sino lo pongo en el body*/




var inversionistasArray = [];
var empresasArray = [];

    function solicitarEmail() {
        var email = prompt("Por favor, ingrese su dirección de correo electrónico:");
        alert("Gracias por proporcionar su email: " + email);
        return email;
    }

    function solicitarNombreDeLaEmpresa() {
        var nombreDeLaEmpresa = prompt("Por favor ingrese el nombre de su empresa/emprendimiento");
        alert("Bienvenido integrante de " + nombreDeLaEmpresa + ". Aquí encontrarás tu inversor ideal");
        return nombreDeLaEmpresa;
    }

    function solicitarNombreInversionista() {
        var nombreInversionista = prompt("Hola Inversor! Por favor ingrese su nombre:");
        var telefonoCelular = prompt("Ingrese un número para poder contactarlo");
        alert("Perfecto! " + nombreInversionista + " aquí encontrarás potenciales empresas");
        return { nombre: nombreInversionista, telefono: telefonoCelular };
    }

    function ingresarInformacion(tipoUsuario) {
        if (tipoUsuario === "inversionista") {
            var inversionistaInfo = solicitarNombreInversionista();
            inversionistasArray.push(inversionistaInfo);
            console.log("Información del Inversionista:", inversionistaInfo);
            alert("Gracias, " + inversionistaInfo.nombre + ". Aquí encontrarás potenciales empresas.");
        } else if (tipoUsuario === "empresa") {
            var nombreDeLaEmpresa = solicitarNombreDeLaEmpresa();
            var emailEmpresa = solicitarEmail();
            empresasArray.push({ nombre: nombreDeLaEmpresa, email: emailEmpresa });
            console.log("Información de la Empresa:", { nombre: nombreDeLaEmpresa, email: emailEmpresa });
            alert("Bienvenido integrante de " + nombreDeLaEmpresa + ". Aquí encontrarás tu inversor ideal.");
        } else {
            alert("Tipo de usuario no reconocido. Por favor, seleccione 'inversionista' o 'empresa'.");
        }
    }
