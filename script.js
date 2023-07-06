function encryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    var result = encrypt(text);
    
    document.getElementById("internal-text").innerHTML = result;
}

function decryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    
    if (isEncrypted(text)) {
        var result = decrypt(text);
        document.getElementById("internal-text").innerHTML = result;
    } else {
        alert("El texto no está encriptado. No se puede desencriptar.");
    }
}

function encrypt(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    
    return text;
}

function decrypt(text) {
    if (isEncrypted(text)) {
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");

        return text;
    } else {
        return text;
    }
}

function isEncrypted(text) {
    var keywords = ["enter", "imes", "ai", "ober", "ufat"];
    for (var i = 0; i < keywords.length; i++) {
        if (text.indexOf(keywords[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function copyResult() {
    const internalText = document.getElementById("internal-text");
    const resultText = internalText.innerText;
    
    // Crear un elemento de textarea temporal para copiar el resultado
    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = resultText;
    document.body.appendChild(tempTextarea);
    
    // Seleccionar y copiar el contenido del textarea temporal
    tempTextarea.select();
    document.execCommand("copy");
    
    // Eliminar el textarea temporal
    document.body.removeChild(tempTextarea);
  }