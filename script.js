function encryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    var result = encrypt(text);
    
    document.getElementById("internal-text").value = result;
}

function decryptText() {
    var text = document.getElementById("external-text").value.toLowerCase();
    var result = decrypt(text);
    
    document.getElementById("internal-text").value = result;
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
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    
    return text;
}

function copyResult() {
    var result = document.getElementById("internal-text");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles.");
}

const externalText = document.getElementById("external-text");
const internalText = document.getElementById("internal-text");

externalText.addEventListener("input", function() {
    if (externalText.value.trim() !== "") {
        internalText.value = "Ningun mensaje fue encontrado " + externalText.value;
    } else {
        internalText.value = "";
    }
});