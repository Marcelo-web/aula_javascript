function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b><i>Obrigado por clicar!</i></b>";
    //alert("Obrigado por clicar");
}

function redirecionar() {
    //Duas formas para abrir um site - a 1ª abre em outra aba e a 2ª abre na mesma janela
    window.open("https://digitalinnovation.one/");
    window.location.href = "http://www.globalacademy.com/courses/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load() {
    slider = document.getElementById("myRange");
    result = document.getElementById("result");
    result.innerHTML = slider.value +  " Cº "  +   " = " + calculaParaFahrenheit(slider.value)  + " Fº"  ;
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

function mostrarValor(elemento) {
    document.getElementById("valorSelecionado").innerText = elemento.value;
}

function obtemValorRange(elemento) {
    tempCelsius = elemento.value;
    far = calculaParaFahrenheit(tempCelsius);
    result.innerHTML = tempCelsius +  " Cº "  +   " = " + far  + " Fº"  ;
}

function calculaParaFahrenheit(celsius){
    return ( celsius * 1.8 + 32).toFixed(2); 
}

/*Funções*/
// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novonome) {
//     return frase.replace(nome, novonome);
// }


// var validar  = 0;
// function validaIdade(idade) {
//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// console.log(soma(3, 4));
// console.log(setReplace("A casa está na tonalidade azul celeste", "azul celeste", "verde musgo"));

// var idade  = eval(prompt("Qual a sua idade?"));
// console.log(validaIdade(idade));



/*Datas*/
// var d = new Date();
// console.log(d);
// console.log(d.getDate());
// console.log(d.getMonth() + 1);
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());


/*Laços de repetição*/
// var count = 0;
// while(count <= 5){
//     console.log(count);
//     count++;
// }

//  for(count = 0 ; count <= 5; count++){
//      console.log(count);
//  } 

// var cont  = 0;
// do{
//     console.log(cont);
//     cont++;
// }while(cont <= 5);

/*Condicional IF*/
// var idade = eval(prompt("Qual a sua idade? "));

// if(idade >= 18){
//     alert("maior de idade");
// }else{
//     alert("menor de idade");
// }


/*lista de dicionários*/
// var frutas = [{nome: "limão", cor: "verde"}, {nome: "melão", cor: "amarela"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);
// console.log(frutas[1].nome);

/*dicionário  - tipo objeto json*/
/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/


//var lista = ["maçã", "pêra", "laranja", "carambola", "ameixa", "abacate"]
//console.log(lista[1]);
//lista.push("uva");              //adiciona ao último da lista
//lista.pop();                    //remove o último da lista
//lista.unshift("abacaxi");       //adiciona no começo da lista
//lista.shift();                  //remove o primeiro da lista

//var secao = lista.slice(2,4);     //obtém uma seção da lista (com exceção do último elemento do índice)

//var result = lista.splice(2,4 , "caju", "goiaba")    ;                
/* splice() - remove elemento(s) de um array e,  se necessário,
 insere novos elementos em seu lugar. Conta-se a partir da
 posição inicial 2 , quatro elementos a frente e os remove
 para inserir "caju" e "goiaba" -> ["maçã", "pêra", "caju", "goiaba"]
*/
//console.log(lista.join(" - "));   //junta um separador
//console.log(lista.length());      //obtém o tamanho da lista
//console.log(lista.toString());    //transforma o array numa string
//console.log(lista.reverse());     //inverte a ordem dos elementos da lista
//console.log(lista);



// var nome = "Marcelo";
// var n1 = 30;
// var n2 = 10;
// var frase = "Japão é o melhor time do mundo";
//alert( nome + " tem " + n1 + " anos");
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());