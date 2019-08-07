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
