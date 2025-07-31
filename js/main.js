/////////////////////////////////////////////////////// DECLARACIÓN DE VARIABLES Y CONSTANTES
const txtName = document.getElementById('Name');
const txtNumber = document.getElementById('Number');
const btnAgregar = document.getElementById('btnAgregar');
const btnClear = document.getElementById('btnClear');

const alertValidaciones = document.getElementById('alertValidaciones');
const alertValidacionesTexto = document.getElementById('alertValidacionesTexto');
const tablaListaCompras = document.getElementById('tablaListaCompras');
const cuerpoTabla = tablaListaCompras.getElementsByTagName('tbody').item(0); // trae contenido de otro elemento, no del document

const contadorProductos = document.getElementById('contadorProductos');
const productosTotal = document.getElementById('productosTotal');
const precioTotal = document.getElementById('precioTotal');

let cont = 0; // contador
let costoTotal = 0;
let totalProductos = 0;

/////////////////////////////////////////////////////// FUNCIONES 

// Validación de la entrada "cantidad"
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

// Genera un precio al azar
function getPrecio() {
    return Math.round(Math.random() * 10000) / 100;
}; // getPrecio

/////////////////////////////////////////////////////// EVENTOS

// Botón agregar
btnAgregar.addEventListener('click', function (event) {
    event.preventDefault();
    // Bandera siempre que presiono el botón agregar
    let isValid = true;

    // Limpiar
    txtName.style.border = "";
    txtNumber.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    // Validación la información de los campos 
    // Name: mínimo tres letras (que contenga información)
    if (txtName.value.length < 3) {
        txtName.style.border = "thin red solid";
        // Mensaje de error
        alertValidacionesTexto.innerHTML = "<strong>El nombre del producto no es correcto<br/></strong>";
        alertValidaciones.style.display = "block";
        isValid = false; //Bandera en falso si no está todo en orden
    };

    if (!validarCantidad()) {
        txtNumber.style.border = "thin red solid";
        alertValidacionesTexto.innerHTML += "<strong>La cantidad no es correcta</strong>";
        alertValidaciones.style.display = "block";
        isValid = false; //Bandera en falso si no está todo en orden
    };

    if (isValid) { //Aquí ya se hace la comparación de si es true
        cont++;
        let precio = getPrecio();
        let row = ` <tr> 
                        <td>${cont}</td>
                        <td>${txtName.value}</td>
                        <td>${txtNumber.value}</td>
                        <td>${precio}</td>
                    </tr> `

        // Agregar los elementos a la tabla
        cuerpoTabla.insertAdjacentHTML('beforeend', row);

        // Actualización del resumen
        contadorProductos.innerText = cont; // Botón rojo resumen
        totalProductos+= Number(txtNumber.value);
        productosTotal.innerText = totalProductos;
        costoTotal+= (precio*Number(txtNumber.value));
        precioTotal.innerText = new Intl.NumberFormat("es-MX", 
                    { style: "currency", currency: "MXN" }).format(costoTotal);
    

        // Limpiar los campos
        txtName.value = '';
        txtNumber.value = '';
        // Manda el cursor al campo de nombre 
        txtName.focus();
    }; // isValid


}); // btnAgregar click