//carlos tosta - cectt@yahoo.com.br
//aula 3 - desenvolvendo páginas web com javascript
//função que soma o valor das 4 variaveis

function soma(nota1, nota2, nota3, nota4) {
    return nota1 + nota2 + nota3 + nota4;
}
alert(soma(10, 10, 5, 5));

var validar = 0;


//verifica se a idade é maior que 18 anos e retorna true ou false
function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade: ");
validaIdade(idade);
alert(validar);