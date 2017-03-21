
function deshabilitarCampo() {
    document.getElementById("tamanio2").value = document.getElementById("tamanio").value;
    document.getElementById("tamanio").disabled = true;
}

function agregarOperaciones() {
    var numeroOperaciones = Number(document.getElementById("numeroOperaciones").value);
    var operacionesCubo = document.getElementById("operacionesCubo");
    crearTabla(operacionesCubo);
    if (numeroOperaciones > 0 && numeroOperaciones < 101) {
        document.getElementById("numeroOperaciones2").value = document.getElementById("numeroOperaciones").value;
        document.getElementById("numeroOperaciones").disabled = true;
        for (var i = 0; i < Number(numeroOperaciones); i++) {
            crearSelect(i);
        }
    }
}

function crearTabla(operacionesCubo) {
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tblBody.setAttribute("id", "tblBody")
    var fila = document.createElement("tr");
    var columna1 = document.createElement("td");
    var columna2 = document.createElement("td");
    operacionesCubo.appendChild(tabla);
    tabla.appendChild(tblBody);
    tblBody.appendChild(fila);
    fila.appendChild(columna1);
    var textoColumna1 = document.createTextNode("Operacion");
    columna1.appendChild(textoColumna1);
    fila.appendChild(columna2);
    var textoColumna2 = document.createTextNode("Valor");
    columna2.appendChild(textoColumna2);
}

function crearSelect(i) {
    var tblBody = document.getElementById("tblBody");
    var fila = document.createElement("tr");
    tblBody.appendChild(fila);
    var columna1 = document.createElement("td");
    var columna2 = document.createElement("td");
    tblBody.appendChild(columna1);
    tblBody.appendChild(columna2);
    columna2.setAttribute("id", "col" + i);
    var fieldset = document.createElement("fieldset");
    columna1.appendChild(fieldset);
    var select = document.createElement("select");
    select.setAttribute("name", "tipoOperacion" + i);
    select.setAttribute("id", "tipoOperacion" + i);
    select.setAttribute("onChange", "crearCampoOperacion(tipoOperacion" + i + ", col" + i + "," + i + ");");
    fieldset.appendChild(select);
    var optgroup = document.createElement("optgroup");
    optgroup.label = "seleccione un tipo de Operación";
    select.appendChild(optgroup);
    var option0 = document.createElement("option");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    option0.text = " ";
    option0.value = "0";
    option0.selected = true;
    option1.text = "Update";
    option1.value = "update";
    option2.text = "Query";
    option2.value = "query";
    select.appendChild(option0);
    select.appendChild(option1);
    select.appendChild(option2);

}

function crearCampoOperacion(id, columnaOp, i) {
    if (id.value == "update") {
        var x1 = document.getElementById("x1" + i);
        var y1 = document.getElementById("y1" + i);
        var z1 = document.getElementById("z1" + i);
        var x2 = document.getElementById("x2" + i);
        var y2 = document.getElementById("y2" + i);
        var z2 = document.getElementById("z2" + i);
        if (x1 != null) {
            columnaOp.removeChild(x1);
            columnaOp.removeChild(y1);
            columnaOp.removeChild(z1);
            columnaOp.removeChild(x2);
            columnaOp.removeChild(y2);
            columnaOp.removeChild(z2);
        }
        var x = document.createElement("input");
        asignarAtributos(x, "x" + i, document.getElementById("tamanio2").value, "X");
        var y = document.createElement("input");
        asignarAtributos(y, "y" + i, document.getElementById("tamanio2").value, "Y");
        var z = document.createElement("input");
        asignarAtributos(z, "z" + i, document.getElementById("tamanio2").value, "Z");
        var w = document.createElement("input");
        asignarAtributos(w, "w" + i, "1000000000", "W");
        columnaOp.appendChild(x);
        columnaOp.appendChild(y);
        columnaOp.appendChild(z);
        columnaOp.appendChild(w);
    } else if (id.value == "query") {
        var x = document.getElementById("x" + i);
        var y = document.getElementById("y" + i);
        var z = document.getElementById("z" + i);
        var w = document.getElementById("w" + i);
        if (x != null) {
            columnaOp.removeChild(x);
            columnaOp.removeChild(y);
            columnaOp.removeChild(z);
            columnaOp.removeChild(w);
        }
        var x1 = document.createElement("input");
        asignarAtributos(x1, "x1" + i, document.getElementById("tamanio2").value, "X1");
        var y1 = document.createElement("input");
        asignarAtributos(y1, "y1" + i, document.getElementById("tamanio2").value, "Y1");
        var z1 = document.createElement("input");
        asignarAtributos(z1, "z1" + i, document.getElementById("tamanio2").value, "Z1");
        var x2 = document.createElement("input");
        asignarAtributos(x2, "x2" + i, document.getElementById("tamanio2").value, "X2");
        var y2 = document.createElement("input");
        asignarAtributos(y2, "y2" + i, document.getElementById("tamanio2").value, "Y2");
        var z2 = document.createElement("input");
        asignarAtributos(z2, "z2" + i, document.getElementById("tamanio2").value, "Z2");
        columnaOp.appendChild(x1);
        columnaOp.appendChild(y1);
        columnaOp.appendChild(z1);
        columnaOp.appendChild(x2);
        columnaOp.appendChild(y2);
        columnaOp.appendChild(z2);
    } else {
        var x = document.getElementById("x" + i);
        var y = document.getElementById("y" + i);
        var z = document.getElementById("z" + i);
        var w = document.getElementById("w" + i);
        var x1 = document.getElementById("x1" + i);
        var y1 = document.getElementById("y1" + i);
        var z1 = document.getElementById("z1" + i);
        var x2 = document.getElementById("x2" + i);
        var y2 = document.getElementById("y2" + i);
        var z2 = document.getElementById("z2" + i);
        if (x != null) {
            columnaOp.removeChild(x);
            columnaOp.removeChild(y);
            columnaOp.removeChild(z);
            columnaOp.removeChild(w);
        }
        if (x1 != null) {
            columnaOp.removeChild(x1);
            columnaOp.removeChild(y1);
            columnaOp.removeChild(z1);
            columnaOp.removeChild(x2);
            columnaOp.removeChild(y2);
            columnaOp.removeChild(z2);
        }
    }
}

function asignarAtributos(input, variable, maximo, placeholder) {
    input.setAttribute("name", variable);
    input.setAttribute("id", variable);
    input.setAttribute("type", "number");
    input.setAttribute("required", "true");
    input.setAttribute("min", "1");
    input.setAttribute("max", maximo);
    input.setAttribute("placeholder", placeholder);
}