//cada vocal cambia a estas letras

const vocales = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}
//función para mostrar el boton de copiar y ocultar texto
    function mostrarBotonCopiar() {
        let btnCopiar = document.getElementById("btn-copiar")
        btnCopiar.style.display = "grid";
        let parrafo = document.getElementById("mensaje-instruccion")
        parrafo.style.display = "none";
        parrafo.style.marginTop = "0px";
        let imagenOculta = document.getElementById("hero-dibujo")
        imagenOculta.style.display = "none";
    }
//función para mostrar el resultado del texto encriptado
    function mandarTexto(resultado) {
        let h2 = document.getElementById("texto-resultado");
        h2.textContent = resultado;
        let h2texto = document.getElementById("texto-resultado")
        h2texto.style.color = "#495057";
    }
//función para mostrar un PopUp
    function mostrarPopup(texto) {
        document.getElementById("mi-popup").style.display = "block";
        let textoPopup = document.getElementById("popup-texto");
        textoPopup.textContent = texto;
        }
//función para cerrar el PopUp
    function cerrarPopup() {
        document.getElementById("mi-popup").style.display = "none";
    }
//función para encriptar el texto del input
    function encriptarTexto(){
        let input = document.getElementById("ingresar-texto");
        let valorInput = input.value.toLowerCase();
        //si dan click en un boton sin ingresar un texto saldra el PopUp
            if(valorInput === "" ){
                mostrarPopup("Debe ingresar un texto");
            }
        //si ingresa una letra mayúscula,número,acento,o signos mostrara otro PopUp
            else if (!/^[a-z[A-Z]\s]+$/.test(valorInput)){
                mostrarPopup("No incluyas letras mayúsculas, números, acentos, signos ni símbolos especiales");
            }
        //si ingresa el texto de forma correcto las vocales seran cambiadas por las del objeto "vocales"
            else {
                var resultado = valorInput.replaceAll(/[aeiou]/gi, vocal => vocales[vocal] || vocal); 
                mandarTexto(resultado)
                mostrarBotonCopiar()
            }
        }
//función para desencriptar el texto 
    function desencriptarTexto(){
        let input = document.getElementById("ingresar-texto");
        let valorInput = input.value;
        //si dan click en un boton sin ingresar un texto saldra el PopUp
            if(valorInput === "" ){
                mostrarPopup("Debe ingresar un texto");
            }
        //si ingresa una letra mayúscula,número,acento,o signos mostrara otro PopUp
            else if (!/^[a-z[A-Z]\s]+$/.test(valorInput)){
                mostrarPopup("No incluyas letras mayúsculas, números, acentos, signos ni símbolos especiales");
            }
        //si ingresa el texto de forma correcto las vocales encriptadas cambiaran a su letra normal
            else{
                let resultado = valorInput.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
                mandarTexto(resultado)
                mostrarBotonCopiar()
            }
    }
//función para copiar al portapapeles el texto del resultado
    function copiar(){
        const h2Texto = document.getElementById("texto-resultado");
        navigator.clipboard.writeText(h2Texto.textContent);
    }   
