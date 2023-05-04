
/*function encriptarTexto() {
    var z = document.querySelector(".texto");
    var y = document.querySelector(".texto-desencriptado");
    var x = document.querySelector(".texto-no-encontrado");
    var boton = document.querySelector(".copiar");

    if (x.style.display === "none") {
        x.style.display = "flex";
        boton.style.display = "none";
        y.style.display = "none";
    } 
    else {
        let palabra = z.value;
        if (palabra != ""){
            let i = 0;
            let p1 = "ai";
            let p2 = "enter";
            let p3 = "imes";
            let p4 = "ober";
            let p5 = "ufat";
            while (i < palabra.length) {
                if (palabra[i] === "a") {
                    palabra = palabra.slice(0, i) + p1 + palabra.slice(i + 1);
                    i += p1.length;
                } 
                else if (palabra[i] === "e"){ 
                    palabra = palabra.slice(0, i) + p2 + palabra.slice(i + 1);
                    i += p2.length;
                }
                else if (palabra[i] === "i"){ 
                    palabra = palabra.slice(0, i) + p3 + palabra.slice(i + 1);
                    i += p3.length;
                }
                else if (palabra[i] === "o"){ 
                    palabra = palabra.slice(0, i) + p4 + palabra.slice(i + 1);
                    i += p4.length;
                }
                else if (palabra[i] === "u"){ 
                    palabra = palabra.slice(0, i) + p5 + palabra.slice(i + 1);
                    i += p5.length;
                }
                else {
                    i++;
                }
            }
            y.textContent = palabra;
            x.style.display = "none";
            boton.style.display = "block";
            y.style.display = "block";
        }
        else {
            x.style.display = "flex";
            boton.style.display = "none";
            y.style.display = "none";
        }
    }
}

function desencriptarTexto() {
    var z = document.querySelector(".texto");
    var y = document.querySelector(".texto-desencriptado");
    var x = document.querySelector(".texto-no-encontrado");
    var boton = document.querySelector(".copiar");

    if (x.style.display === "none") {
        x.style.display = "flex";
        boton.style.display = "none";
        y.style.display = "none";
    } 
    else {
        let palabra = z.value;
        if (palabra != ""){
            let i = 0;
            let p1 = "a";
            let p2 = "e";
            let p3 = "i";
            let p4 = "o";
            let p5 = "u";
            while (i < palabra.length) {
                if (palabra[i] === "ai") {
                    palabra = palabra.slice(0, i) + p1 + palabra.slice(i + 1);
                    i += p1.length;
                } 
                else if (palabra[i] === "enter"){ 
                    palabra = palabra.slice(0, i) + p2 + palabra.slice(i + 1);
                    i += p2.length;
                }
                else if (palabra[i] === "imes"){ 
                    palabra = palabra.slice(0, i) + p3 + palabra.slice(i + 1);
                    i += p3.length;
                }
                else if (palabra[i] === "ober"){ 
                    palabra = palabra.slice(0, i) + p4 + palabra.slice(i + 1);
                    i += p4.length;
                }
                else if (palabra[i] === "ufat"){ 
                    palabra = palabra.slice(0, i) + p5 + palabra.slice(i + 1);
                    i += p5.length;
                }
                else {
                    i++;
                }
            }
            y.textContent = palabra;
            x.style.display = "none";
            boton.style.display = "block";
            y.style.display = "block";
        }
        else {
            x.style.display = "flex";
            boton.style.display = "none";
            y.style.display = "none";
        }
    }
}
*/
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


