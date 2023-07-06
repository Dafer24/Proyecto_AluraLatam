function encryptText() {
    var text = document.getElementById("external-text").value.toLowerCase(); // Obtiene el texto ingresado y lo convierte a minúsculas
    var result = encrypt(text); // Encripta el texto
    
    document.getElementById("internal-text").innerHTML = result; // Muestra el resultado en el elemento con id "internal-text"
}

function decryptText() {
    var text = document.getElementById("external-text").value.toLowerCase(); // Obtiene el texto ingresado y lo convierte a minúsculas
    
    if (isEncrypted(text)) { // Comprueba si el texto está encriptado
        var result = decrypt(text); // Desencripta el texto
        document.getElementById("internal-text").innerHTML = result; // Muestra el resultado en el elemento con id "internal-text"
    } else {
        alert("El texto no está encriptado. No se puede desencriptar."); // Muestra una alerta si el texto no está encriptado
    }
}

function encrypt(text) {
    text = text.replace(/e/g, "enter"); // Reemplaza todas las "e" por "enter"
    text = text.replace(/i/g, "imes"); // Reemplaza todas las "i" por "imes"
    text = text.replace(/a/g, "ai"); // Reemplaza todas las "a" por "ai"
    text = text.replace(/o/g, "ober"); // Reemplaza todas las "o" por "ober"
    text = text.replace(/u/g, "ufat"); // Reemplaza todas las "u" por "ufat"
    
    return text; // Devuelve el texto encriptado
}

function decrypt(text) {
    if (isEncrypted(text)) { // Comprueba si el texto está encriptado
        text = text.replace(/enter/g, "e"); // Reemplaza todas las "enter" por "e"
        text = text.replace(/imes/g, "i"); // Reemplaza todas las "imes" por "i"
        text = text.replace(/ai/g, "a"); // Reemplaza todas las "ai" por "a"
        text = text.replace(/ober/g, "o"); // Reemplaza todas las "ober" por "o"
        text = text.replace(/ufat/g, "u"); // Reemplaza todas las "ufat" por "u"

        return text; // Devuelve el texto desencriptado
    } else {
        return text; // Devuelve el texto original si no está encriptado
    }
}

function isEncrypted(text) {
    var keywords = ["enter", "imes", "ai", "ober", "ufat"]; // Palabras clave para detectar si el texto está encriptado
    for (var i = 0; i < keywords.length; i++) {
        if (text.indexOf(keywords[i]) !== -1) { // Comprueba si alguna palabra clave está presente en el texto
            return true; // Retorna verdadero si está encriptado
        }
    }
    return false; // Retorna falso si no está encriptado
}

function copyResult() {
    const internalText = document.getElementById("internal-text"); // Obtiene el elemento con id "internal-text"
    const resultText = internalText.innerText; // Obtiene el texto dentro del elemento
    
    // Crear un elemento de textarea temporal para copiar el resultado
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = resultText; // Establece el valor del textarea temporal como el texto a copiar
    document.body.appendChild(tempTextarea); // Agrega el textarea temporal al cuerpo del documento
    
    // Seleccionar y copiar el contenido del textarea temporal
    tempTextarea.select(); // Selecciona el contenido del textarea temporal
    document.execCommand("copy"); // Ejecuta el comando de copiar
    
    // Eliminar el textarea temporal
    document.body.removeChild(tempTextarea); // Elimina el textarea temporal del cuerpo del documento
}
