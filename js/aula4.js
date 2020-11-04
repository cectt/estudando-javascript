//aula 4 - manipulando elementos da página
// carlos tosta - cectt@yahoo.com.br
//função que é carregada junto com o carregamenta da página
function load() {
    alert("página carregada");
}

//função que altera o elemento h3 agradecimento
function clicou() {
    //alert("Obrigado por clicar!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

//função para redicionar para outro site
function redirecionar() {
    window.open("https://www.quantumtecnologia.com.br/"); //abre em uma nova aba
    window.location.href = "https://www.quantumtecnologia.com.br/"; //abre mna mesma aba
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}