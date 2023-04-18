const vocales = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}
    function mostrarBotonCopiar() {
        let btnCopiar = document.getElementById("btn-copiar")
        btnCopiar.style.display = "grid";
        let parrafo = document.getElementById("mensaje-instruccion")
        parrafo.style.display = "none";
        parrafo.style.marginTop = "0px";
        let imagenOculta = document.getElementById("hero-dibujo")
        imagenOculta.style.display = "none";
    }
    function mandarTexto(resultado) {
        let h2 = document.getElementById("texto-resultado");
        h2.textContent = resultado;
        let h2texto = document.getElementById("texto-resultado")
        h2texto.style.color = "#495057";
    }

    function mostrarPopup(texto) {
        document.getElementById("mi-popup").style.display = "block";
        let textoPopup = document.getElementById("popup-texto")
        textoPopup.textContent = texto;
        }

    function cerrarPopup() {
        document.getElementById("mi-popup").style.display = "none";
    }

    function encriptarTexto(){
        let input = document.getElementById("ingresar-texto") ;
        let valorInput = input.value.toLowerCase();
            if(valorInput === "" ){
                mostrarPopup("Debe ingresar un texto");
            }
            else if (!/^[a-z\s]+$/.test(valorInput)){
                mostrarPopup("No incluyas números, acentos, signos ni símbolos especiales")
            }else {
                var resultado = valorInput.replaceAll(/[aeiou]/gi, vocal => vocales[vocal] || vocal); 
                mandarTexto(resultado)
                mostrarBotonCopiar()
            }
        }
    function desencriptarTexto(){
        let input = document.getElementById("ingresar-texto") ;
        let valorInput = input.value;
            if(valorInput === "" ){
                mostrarPopup("Debe ingresar un texto");
            }
            else if (!/^[a-z\s]+$/.test(valorInput)){
                mostrarPopup("No incluyas números, acentos, signos ni símbolos especiales")
            }else{
                let resultado = valorInput.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u")
                mandarTexto(resultado)
                mostrarBotonCopiar()
            }
    }

    function copiar(){
        const h2Texto = document.getElementById("texto-resultado");
        navigator.clipboard.writeText(h2Texto.textContent);
    }   