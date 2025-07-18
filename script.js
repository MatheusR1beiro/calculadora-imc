document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-imc");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
            resultado.textContent = "Números inválidos!";
            resultado.style.color = "#d93025";
            return;
        }

        const imc = peso/(altura * altura);
        const imcFormatado = imc.toFixed(2);

        let classificacao = "";
        let cor = "";

        if(imc <= 18.5){
            classificacao = "Abaixo do peso";
            cor = "#f4b400";
        }else if(imc <= 24.9){
            classificacao = "Peso ideal";
            cor = "#0f9d58";
        }else if(imc <= 29.9){
            classificacao = "Sobrepeso";
            cor = "#fbbc05";
        }else{
            classificacao = "Obesidade";
            cor = "#d93025";
        }

        resultado.textContent = `Seu imc é: ${imcFormatado}; classificaçao: (${classificacao})`;
        resultado.style.color = cor;
    })

})    