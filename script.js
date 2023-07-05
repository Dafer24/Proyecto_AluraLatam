function encryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    var result = encrypt(text);
    
    document.getElementById("internal-text").value = result;
}

function decryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    
    if (isEncrypted(text)) {
        var result = decrypt(text);
        document.getElementById("internal-text").value = result;
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
    var result = document.getElementById("internal-text");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

/*
const internalText = document.getElementById("internal-text");
internalText.value = "Ningún mensaje fue encontrado";


const externalText = document.getElementById("external-text");
const internalText = document.getElementById("internal-text");

externalText.addEventListener("input", function() {
    if (externalText.value.trim() !== "") {
        internalText.value = "";
    } else {
        internalText.value = "Ningún mensaje fue encontrado";
    }
    
});
*/

