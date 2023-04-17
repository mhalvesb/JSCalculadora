
// Obtendo os valores do HTML
let botoes = document.querySelectorAll("button"); // Obtem todos os botões do HTML
let result = document.getElementById("result"); // Obtem a barra de resultados



// Modificando o HTML
botoes.forEach(item => { // Loop de todos os botões
    item.addEventListener("click", () =>{ // Adiciona o evento de clique nos botões
        if(item.innerHTML === "="){ // Verifica o valor dentro do HTML
            let [left, right] = result.innerHTML.split(/\+|\-|\x|\%/); // Divide o lado esquerdo pelo lado direito depois do operador
            let operator = result.innerHTML.match(/\+|\-|\x|\%/) // Verifica qual é o operador que está sendo utilizado
           result.innerHTML = operator[0] === "+" ? Number(left) + Number(right) : operator[0] === "-" ? Number(left) - Number(right) : operator[0] === "x" ? Number(left) * Number(right) : operator[0] === "%" ? Number(left) / Number(right) : false;  
        } else  if(item.innerHTML === "C"){ // Se o valor dentro do HTML do botão for "C"
            result.innerHTML = ""; // Ele vai definir o valor como nulo
        } else {
            result.innerHTML += item.innerHTML; // Caso as opções acima não sejam validas ele apenas implementa os valores.
        }
    })
})