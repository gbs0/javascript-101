## Explain About `Javascript `
> Falar sobre a diferença entre `Java` vs `JS` e a sintaxe de `ES6` que iremos utilizar no workshop

## Introduce `JS Bin`
> Ferramenta que utilizaremos no workshop p/ escrever `Javascript`

> `https://jsbin.com/?js,console`

## Explaing about types of `Data` in JS

> **String:** Tipo de dado que representa qualquer caractere;

> **Numbers:** É um tipo de dado que representa números inteiros e decimais, tanto positivos quanto negativos.

> **Boolean:** Um `boolean` possui somente 2 valores: `true` ou `false`

> **Arrays:** Dados que representam `listas`, eles possuem um **indíce** que representa sua posição dentro do Array

> **Hashes:** Estrutura de dados que possui como indíce `chave` e `valor`

> **Null:** Representa um objeto nulo, ou um objeto vazio

> **Undefined:** Representa um objeto **indefinido**, ou seja, ele não existe durante a execução do código

> **Váriaveis:** Espaço na memória que utilizamos para salvar um dado, seja ele de qual tipo for (Fazer analogia com a caixa do slide)
> *****

#### First Exercise
> • 1º Exercicio do workshop: Concatenar/juntar duas `strings` para criarmos uma saudação ao user.

```json
let name = "Name";
const greetings = `Hello ${name}`;
console.log(greetings);
```
*****

## Explaing about `Conditionals` in JS

**If | "Se":** Se uma condicional for `true`, o operador retonará o valor de `console.log();`

```
	if (weather === "rainy") {	
  		console.log("Take an umbrella!”);
	}
```

**Else | "Ou":** Caso a primeira condição não seja atendida, o código irá automáticamente rodar a próxima condição do `else`

```
	if (weather === "rainy") {
  		console.log("Take an umbrella!”);
	} else {
  		console.log(“Just go out!”);
	}
```

**Else if | "Mas se" :** Caso uma condicional não seja válida, o código irá rodar a próxima condição atendida

```
	if (weather === "rainy") {
  		console.log("Take an umbrella");
	} else if (weather === "stormy") {
  		console.log("Stay at home!”);
	} else {
  		console.log(“Just go out!”);
	}
```
*****

## Explaing about Boolean Algebra `&&`, `||`, `!`

> **&& | "And" Operator:** Boolean que retorna `true` quando **duas** váriaveis são **verdadeiras**

>| a        | b           | result  |
| ------------- |:-------------:| -----:|
| false      | false | false |
| false      | true      |   false |
| true | false      |    false |
| true | true      |    `true` |

  
```
	let rain = true;
	let wind = true;

	if (rain && wind) {
  		console.log("Really stay at home!”);
  	}

```
*****
> **|| | "Or" Operator:** Boolean que retorna `true` quando uma das **duas** váriaveis são **verdadeiras**

>| a        | b           | result  |
| ------------- |:-------------:| -----:|
| false      | false | false |
| false      | true      |   `true` |
| true | false      |    `true` |
| true | true      |    `true` |
  
```
	let day = "Saturday";

	if (day === "Saturday" || day === "Sunday") {
  		console.log("It's the week-end!");
	}
```
*****
> **! | "Not" Operator:** Boolean que retorna o oposto de um boolean na **própria** variável

>| a        | result           | 
| ------------- |:-------------:|
| true      | false |
| false      | `true`      |

```
	let sunny = true;

	if (!sunny) {
  		console.log("Cancel the beach");
	}
```
*****


## Explaing about `Loops`

#### • for & forEach:
Explicar a diferença entre `for` e `forEach`.

**for:** Utilizamos normalmente para contadores e iteradores (`i`, `i++`)

**forEach:** Utilizamos normalmente quando queremos passar por cada elemento de um objeto

> • 2º Exercicio do workshop: Listar os nomes dentro de uma variável contendo apenas a letra "B"

```json
const names = ["Ben", "Bob", "John"];
let bNames = "";

names.forEach((name) => {
  if (name[0] === "B") {
    console.log(name);
  }
});
```
#### • While:
Roda o código **enquanto** uma variável for verdadeira

> • Demonstrar com uma variável de Array e explicar o contator `i` em relação ao índice da variável

```json
const beattles = ["Paul", "Ringo", "John", "George"];
let i = 0;

while (i < beatles.length) {
  console.log(beatles[i]);
  i += 1;
}
```
 
## Explaing about `Functions`

Funções são como caixas mágicas, recebem algum dado em sua entrada, processam esse dado e produzem um resultado especifíco

Funções geralmente precisam de `argumentos`, que são os dados com o qual a função irá lidar

> • 3º Exercicio do workshop: Escrever uma função de `calculadora` que multiplica os parametros recebidos entre si

```json
const multiply = (first, last) => {
  console.log(first * last);
};

multiply(5, 2);
```

## Explaing about `DOM`

Manipulação o **DOM** atráves de um motor que processa e copila o JavaScript em uma linguagem em + baixo nível

• Compila `JS` + em **Linguagem de Máquina**

> É uma engine Open Source criada pelo Google

```

```
> 4º Exercicio do workshop: Extrair texto de uma variável proveniente do Google Chrome


>  **Single Title:**

`document.querySelector(".title")`

> **Extract Text from Title:**

`document.querySelector(".title")`

> **All Titles:**

`document.querySelectorAll(".title");`

> **All Posts:**

`document.querySelectorAll(".title");`

> **Single Post:**

`document.querySelectorAll(".title")[0];`

> **All Images:**

`document.querySelectorAll("img");`

> **Single Images:**

`document.querySelectorAll("img")[0];`


## Explaing about `Event Handling`

Conseguimos adicionar estados e atribuí-los por meio de 
`Event Handlers`. 

São gatilhos que quando determinadas ações são feitas, podemos determinar comportamentos para qualquer componente HTML

> 5º Exercicio do workshop: Adicionar eventos `onclick` em um objeto HTML, a partir de uma biblioteca em JS


```
// Timeline
const tl = new TimelineMax({paused:true});

// HTML Elements
const vinyl = document.querySelector(".vinyl");
const playButton = 
document.querySelectorAll("button")[0];
const reverseButton = 
document.querySelectorAll("button")[1];
const stopButton = 
document.querySelectorAll("button")[2];

tl.to(vinyl, 1, 
{rotation:360, repeat:-1, ease:Linear.easeInOut}); 

playButton.onclick = function() {
  tl.play();
  console.log("Playing vinyl");
}

stopButton.onclick = function() {
  tl.pause();
	console.log("Pause vinyl");
}

reverseButton.onclick = function() {
	tl.reverse();
	console.log("Reverse vinyl");
}
```


