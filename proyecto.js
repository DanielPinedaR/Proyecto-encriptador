
const textArea = document.querySelector(".texto");
const mensajeResuleto = document.querySelector(".texto-resuelto");
const textoNoEncontrado = document.querySelector(".texto-no-encontrado");
const btnCopiar = document.querySelector(".copiar");

function encriptarTexto(){
    if (textArea.value !== ""){
        mensajeResuleto.style.display = "flex";
        textoNoEncontrado.style.display = "none";
        btnCopiar.style.display = "block";
        const textoEncriptado = encriptar(textArea.value)
        mensajeResuleto.value = textoEncriptado
    }
    else {
        mensajeResuleto.style.display = "none";
        textoNoEncontrado.style.display = "flex";
        btnCopiar.style.display = "none";
    }
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptarTexto(){
    if (textArea.value !== ""){
        mensajeResuleto.style.display = "flex";
        textoNoEncontrado.style.display = "none";
        btnCopiar.style.display = "block";
        const textoDesencriptado = desencriptar(textArea.value)
        mensajeResuleto.value = textoDesencriptado
    }
    else {
        mensajeResuleto.style.display = "none";
        textoNoEncontrado.style.display = "flex";
        btnCopiar.style.display = "none";
    }
}

function desencriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o", "ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptado
}

function copiarTexto(){
    navigator.clipboard.writeText(mensajeResuleto.value).then(() => {
        alert("Texto copiado");
    }). catch(() => {
        alert("Textp NO copiado");
    });
}


