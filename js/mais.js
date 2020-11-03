var nome = "Carlos Tosta";
var idade = 42;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Brasil é o melhor time do mundo"
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase.toLocaleUpperCase());
console.log(frase.toLowerCase());
console.log(n1 * n2);

var lista = ["maçã", "pêra", "laranja"]; // variavel tipo array
//lista.push("uva"); //adiciona uva na lista
//lista.pop(""); ///remove o último elemento da lista
console.log(lista);
console.log(lista[1]);
console.log(lista.length); //exibve o tamanho da lista
console.log(lista.reverse); //mostra os elementos de forma invertida
console.log(lista.toString); //transforma os elementos em string
console.log(lista.join(" - ")) //transforma os elementos em string e separa com traços
alert(lista[1]); //exibe um alerta com o elemento 1 da lista

var fruta = { nome: "maçã", cor: "vermelha" }; //variavel tipo dicionário
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]; //variavel tipo dicionários
console.log(frutas[1].nome);
alert(frutas.cor);