const txtName = document.getElementById('Name');
const txtNumber = document.getElementById('Number');
const btnAgregar = document.getElementById('btnAgregar');
const btnClear = document.getElementById('btnClear');

const alertValidaciones = document.getElementById('alertValidaciones');
const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');

function validarCantidad() {
    // Number: contiene información?, es un número?, >0
    if (txtNumber.value == "") {
        return false;
    }; // Tiene información?

    if (isNaN(txtNumber.value)) {
        return false;
    }; // Es un número?

    if (Number(txtNumber.value) <= 0) { //Pa
        return false;
    }; // Es mayor a 0?
    return true;
}; // Validar cantidad

btnAgregar.addEventListener('click', function (event) {
    event.preventDefault();

    // Limpiar
    txtName.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    // Validación la información de los campos 
    // Name: mínimo tres letras (que contenga información)
    if (txtName.value.length < 3) {
        txtName.style.border="thin red solid";
        // Mensaje de error
        alertValidacionesTexto.innerHTML = "<strong>El nombre del producto no es correcto<br/></strong>";
        alertValidaciones.style.display = "block";
    };
    
    if (!validarCantidad()) {
        txtNumber.style.border="thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>La cantidad no es correcta</strong>";
        alertValidaciones.style.display = "block";
    };


}); // btnAgregar click