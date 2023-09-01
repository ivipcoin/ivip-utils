# ivip-utils

O módulo `ivip-utils` é uma biblioteca abrangente de utilitários projetada para simplificar e otimizar o desenvolvimento de projetos na plataforma IVIP. Com uma coleção de funções e ferramentas bem projetadas, o `ivip-utils` oferece uma variedade de recursos para lidar com tarefas comuns, desde manipulação de dados até interações com a API. Essa biblioteca facilita a criação de aplicativos eficientes na plataforma IVIP, reduzindo a complexidade do código e acelerando o processo de desenvolvimento. Seja lidando com operações assíncronas, formatação de dados ou gerenciamento de erros, o `ivip-utils` se destaca como um companheiro confiável para desenvolvedores que desejam aumentar a produtividade e a qualidade de seus projetos na plataforma IVIP.

## Instalação

Para instalar o `ivip-utils`, você pode usar o npm:

```bash
npm install ivip-utils
```

## Índice

- [ivip-utils](#ivip-utils)
  - [Instalação](#instalação)
  - [Índice](#índice)
  - [Funções de Utilitário](#funções-de-utilitário)
    - [Documentação](#documentação)
      - [`asyncForEach`](#asyncforeach)
      - [`uuidv4`](#uuidv4)
      - [`contains`](#contains)
      - [`safeGet`](#safeget)
      - [`deepEqual`](#deepequal)
      - [`getGlobalObject`](#getglobalobject)
      - [`defer`](#defer)
      - [`encodeString`](#encodestring)
      - [`decodeString`](#decodestring)
      - [`numberToBytes` e `bytesToNumber`](#numbertobytes-e-bytestonumber)
  - [Funções de Validação](#funções-de-validação)
    - [Uso Básico](#uso-básico)
      - [Verificando se um valor é uma matriz:](#verificando-se-um-valor-é-uma-matriz)
      - [Verificando se um valor é uma string:](#verificando-se-um-valor-é-uma-string)
      - [Verificando se um valor é um objeto:](#verificando-se-um-valor-é-um-objeto)
    - [Lista de Funções de Validação](#lista-de-funções-de-validação)
  - [Módulo `ascii85` - Codificação e Decodificação ASCII85](#módulo-ascii85---codificação-e-decodificação-ascii85)
    - [Funções Disponíveis](#funções-disponíveis)
      - [`encode`](#encode)
      - [`decode`](#decode)
    - [Exemplo de Uso](#exemplo-de-uso)
  - [Módulo SimpleEventEmitter](#módulo-simpleeventemitter)
    - [Importação](#importação)
    - [Construtor](#construtor)
    - [Métodos](#métodos)
      - [`on<T = any>(event: string, callback: (data: T) => void): SimpleEventEmitterProperty`](#ont--anyevent-string-callback-data-t--void-simpleeventemitterproperty)
      - [`off<T = any>(event: string, callback?: (data: T) => void): this`](#offt--anyevent-string-callback-data-t--void-this)
      - [`once<T = any>(event: string, callback?: (data: T) => void): Promise<T>`](#oncet--anyevent-string-callback-data-t--void-promiset)
      - [`emit(event: string, data?: any): this`](#emitevent-string-data-any-this)
      - [`emitOnce(event: string, data?: any): this`](#emitonceevent-string-data-any-this)
      - [`pipe(event: string, eventEmitter: SimpleEventEmitter): SimpleEventEmitterProperty`](#pipeevent-string-eventemitter-simpleeventemitter-simpleeventemitterproperty)
      - [`pipeOnce(event: string, eventEmitter: SimpleEventEmitter): Promise<any>`](#pipeonceevent-string-eventemitter-simpleeventemitter-promiseany)
    - [Exemplo de Uso](#exemplo-de-uso-1)
  - [Módulo BezierEasing](#módulo-beziereasing)
    - [Recursos Principais](#recursos-principais)
    - [Como Usar](#como-usar)
    - [Lista de Curvas de Bezier](#lista-de-curvas-de-bezier)
    - [Exemplos de Curvas de Bezier](#exemplos-de-curvas-de-bezier)
  - [Classe Color](#classe-color)
    - [Como Usar](#como-usar-1)
    - [Recursos](#recursos)
      - [Verificação de Cor](#verificação-de-cor)
      - [Conversão de Cor](#conversão-de-cor)
      - [Escurecimento e Clareamento](#escurecimento-e-clareamento)
      - [Mistura de Cores](#mistura-de-cores)
  - [Classe Base64](#classe-base64)
    - [Uso Básico](#uso-básico-1)
    - [Recursos](#recursos-1)
      - [Codificação e Decodificação](#codificação-e-decodificação)
      - [Manipulação de Dados UTF-8](#manipulação-de-dados-utf-8)
  - [Módulo JSONStringify](#módulo-jsonstringify)
    - [Uso Básico](#uso-básico-2)
    - [Recursos](#recursos-2)
      - [Função de Serialização](#função-de-serialização)
      - [Uso Conveniente](#uso-conveniente)
  - [Módulo mergeClasses](#módulo-mergeclasses)
    - [Uso Básico](#uso-básico-3)
    - [Recursos](#recursos-3)
      - [Mesclagem de Classes](#mesclagem-de-classes)
      - [Uso Conveniente](#uso-conveniente-1)
  - [Módulo `gl`](#módulo-gl)
    - [Funções Disponíveis](#funções-disponíveis-1)
      - [Funções de Matriz 4x4](#funções-de-matriz-4x4)
    - [Módulo `mat4` - Manipulação de Matrizes 4x4](#módulo-mat4---manipulação-de-matrizes-4x4)
      - [Funções Disponíveis](#funções-disponíveis-2)
        - [`adjoint`](#adjoint)
        - [`clone`](#clone)
        - [`copy`](#copy)
        - [`create`](#create)
        - [`determinant`](#determinant)
        - [`fromQuat`](#fromquat)
        - [`fromRotation`](#fromrotation)
        - [`fromRotationTranslation`](#fromrotationtranslation)
        - [`fromScaling`](#fromscaling)
        - [`fromTranslation`](#fromtranslation)
        - [`fromXRotation`](#fromxrotation)
        - [`fromYRotation`](#fromyrotation)
        - [`fromZRotation`](#fromzrotation)
        - [`frustum`](#frustum)
        - [`identity`](#identity)
        - [`invert`](#invert)
        - [`lookAt`](#lookat)
        - [`multiply`](#multiply)
        - [`ortho`](#ortho)
        - [`perspective`](#perspective)
        - [`perspectiveFromFieldOfView`](#perspectivefromfieldofview)
        - [`rotate`](#rotate)
        - [`rotateX`](#rotatex)
        - [`rotateY`](#rotatey)
        - [`rotateZ`](#rotatez)
        - [`scale`](#scale)
        - [`str`](#str)
        - [`translate`](#translate)
        - [`transpose`](#transpose)
  - [Contribuindo](#contribuindo)
  - [Licença](#licença)

## Funções de Utilitário

O módulo `ivip-utils` oferece uma coleção de funções de utilitário, incluindo `asyncForEach` e `uuidv4`, para facilitar tarefas comuns em JavaScript e Node.js. Essas funções são especialmente úteis quando você precisa lidar com operações assíncronas ou gerar identificadores UUID.

Você pode importar as funções de utilitário individualmente em seu código, conforme necessário. Aqui estão alguns exemplos de importações:

```typescript
import { asyncForEach, uuidv4 } from 'ivip-utils';
```

### Documentação

Aqui estão detalhes sobre as funções de utilitário disponíveis no módulo `ivip-utils`:

#### `asyncForEach`

A função `asyncForEach` permite iterar sobre uma matriz de forma assíncrona, aplicando uma função de retorno de chamada a cada elemento. É útil quando você precisa executar operações assíncronas em cada elemento de uma matriz.

- `array`: A matriz que você deseja iterar.
- `callback`: A função de retorno de chamada que será aplicada a cada elemento. Deve retornar uma `Promise`.

```typescript
import { asyncForEach } from 'ivip-utils';

async function asyncExample() {
  const numbers = [1, 2, 3, 4, 5];

  await asyncForEach(numbers, async (number, index) => {
    // Simula um trabalho assíncrono
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(`Processed ${number} at index ${index}`);
  });

  console.log('Async loop completed');
}

asyncExample();
```

#### `uuidv4`

A função `uuidv4` gera um identificador único universal (UUID) no formato versão 4.

- Retorna uma string que representa um UUID v4.

```typescript
import { uuidv4 } from 'ivip-utils';

const generatedUUID = uuidv4();

console.log('Generated UUID:', generatedUUID);
```

#### `contains`

A função `contains` verifica se um objeto contém uma chave específica.

- `obj`: O objeto a ser verificado.
- `key`: A chave a ser procurada no objeto.
- Retorna `true` se a chave existir no objeto, caso contrário, retorna `false`.

```typescript
import { contains } from 'ivip-utils';

const person = { name: 'John', age: 30 };

const hasName = contains(person, 'name');
const hasAddress = contains(person, 'address');

console.log('Has name property:', hasName); // true
console.log('Has address property:', hasAddress); // false
```

#### `safeGet`

A função `safeGet` permite acessar seguramente uma propriedade aninhada de um objeto, evitando erros se a propriedade não existir.

- `obj`: O objeto de onde a propriedade será acessada.
- `key`: A chave da propriedade a ser acessada no objeto.
- Retorna o valor da propriedade se ela existir, ou `undefined` se não existir.

```typescript
import { safeGet } from 'ivip-utils';

const person = { name: 'John', address: { city: 'New York' } };

const cityName = safeGet(person, 'address.city');
const countryName = safeGet(person, 'address.country');

console.log('City name:', cityName); // 'New York'
console.log('Country name:', countryName); // undefined
```

#### `deepEqual`

A função `deepEqual` verifica se dois objetos são iguais em profundidade, suportando arrays e objetos aninhados.

- `a` e `b`: Os objetos a serem comparados.
- Retorna `true` se os objetos forem iguais em profundidade, caso contrário, retorna `false`.

```typescript
import { deepEqual } from 'ivip-utils';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log('Objects are deep equal:', deepEqual(obj1, obj2)); // true
console.log('Objects are deep equal:', deepEqual(obj1, obj3)); // false
```

#### `getGlobalObject`

A função `getGlobalObject` retorna o objeto global correspondente ao ambiente em que o código está sendo executado (por exemplo, `window` no navegador ou `global` no Node.js).

- Retorna o objeto global.

```typescript
import { getGlobalObject } from 'ivip-utils';

const globalObject = getGlobalObject();

console.log('Global object:', globalObject);
```

#### `defer`

A função `defer` permite agendar a execução de uma função para o próximo ciclo de microtarefas.

- `fn`: A função a ser agendada para execução.

```typescript
import { defer } from 'ivip-utils';

function exampleFunction() {
  console.log('Function executed');
}

const deferredFunction = defer(exampleFunction);

console.log('Deferred function scheduled');

// Output:
// Deferred function scheduled
// Function executed
```

#### `encodeString`

A função `encodeString` converte uma string em uma matriz Uint8Array codificada em UTF-8.

- `str`: A string a ser codificada.
- Retorna uma matriz Uint8Array representando a codificação UTF-8 da string.

```typescript
import { encodeString } from 'ivip-utils';

const originalString = 'Hello, world!';

const encodedData = encodeString(originalString);

console.log('Original string:', originalString);
console.log('Encoded data:', encodedData);
```

#### `decodeString`

A função `decodeString` converte uma matriz Uint8Array ou array de números em uma string decodificada em UTF-8.

- `buffer`: A matriz Uint8Array, array de números ou TypedArrayLike a ser decodificado.
- Retorna a string decodificada.

```typescript
import { encodeString, decodeString } from 'ivip-utils';

const originalString = 'Hello, world!';

const encodedData = encodeString(originalString);
const decodedString = decodeString(encodedData);

console.log('Original string:', originalString);
console.log('Encoded data:', encodedData);
console.log('Decoded string:', decodedString);
```

#### `numberToBytes` e `bytesToNumber`

As funções `numberToBytes` e `bytesToNumber` convertem um número em uma matriz de bytes e vice-versa.

- `numberToBytes(number)`: Converte um número em uma matriz de bytes.
- `bytesToNumber(bytes)`: Converte uma matriz de bytes em um número.

```typescript
import { numberToBytes, bytesToNumber } from 'ivip-utils';

const originalNumber = 42;

const byteArray = numberToBytes(originalNumber);
const reconstructedNumber = bytesToNumber(byteArray);

console.log('Original number:', originalNumber);
console.log('Byte array:', byteArray);
console.log('Reconstructed number:', reconstructedNumber);
```

## Funções de Validação

O módulo `ivip-utils` oferece uma coleção de funções de validação para verificar diferentes tipos de valores em JavaScript. Essas funções podem ser úteis ao desenvolver aplicativos que requerem verificação de dados de entrada, validação de campos ou qualquer cenário em que a validação seja necessária.

Você pode importar as funções de validação individualmente em seu código, conforme necessário. Aqui estão alguns exemplos de importações:

```typescript
import { isArray, isObject, isString } from 'ivip-utils/validation';
```

### Uso Básico

Aqui estão alguns exemplos de como usar as funções de validação em seu código:

#### Verificando se um valor é uma matriz:

```typescript
const value = [1, 2, 3];
if (isArray(value)) {
  console.log('O valor é uma matriz.');
} else {
  console.log('O valor não é uma matriz.');
}
```

#### Verificando se um valor é uma string:

```typescript
const value = 'Olá, mundo!';
if (isString(value)) {
  console.log('O valor é uma string.');
} else {
  console.log('O valor não é uma string.');
}
```

#### Verificando se um valor é um objeto:

```typescript
const value = { name: 'John', age: 30 };
if (isObject(value)) {
  console.log('O valor é um objeto.');
} else {
  console.log('O valor não é um objeto.');
}
```

Você pode usar as funções de validação apropriadas para o tipo de valor que deseja verificar.

### Lista de Funções de Validação

Aqui está uma lista das funções de validação disponíveis no módulo `ivip-utils`:

- `isArray`: Verifica se um valor é uma matriz.
- `isTypedArray`: Verifica se um valor é uma matriz tipada ou instanciado.
- `isObject`: Verifica se um valor é um objeto.
- `isJson`: Verifica se um valor é uma string JSON válida.
- `isString`: Verifica se um valor é uma string.
- `isBoolean`: Verifica se um valor é um booleano.
- `isNumber`: Verifica se um valor é um número.
- `isNumberValid`: Verifica se um valor é um número válida sendo uma string ou um número.
- `isInt`: Verifica se um valor é um número inteiro.
- `isFloat`: Verifica se um valor é um número de ponto flutuante.
- `isNull`: Verifica se um valor é nulo.
- `isNotNumber`: Verifica se um valor não é um número válido.
- `isInfinity`: Verifica se um valor é infinito.
- `isDate`: Verifica se um valor é uma data válida.
- `isUndefined`: Verifica se um valor é indefinido.
- `isFunction`: Verifica se um valor é uma função.
- `isSymbol`: Verifica se um valor é um símbolo.
- `isBuffer`: Verifica se um objeto é um buffer.
- `isEmailValid`: Verifica se um endereço de email é válido.
- `isPasswordValid`: Verifica se uma senha atende aos critérios de validação.
- `isPhoneValid`: Verifica se um número de telefone é válido.
- `isUrlValid`: Verifica se uma URL é válida.
- `isEmpty`: Verifica se um objeto está vazio, ou seja, se não possui propriedades próprias.

Aqui está a documentação completa para o módulo `ascii85` importado de `ivip-utils`, que inclui as funções `encode` e `decode`:

## Módulo `ascii85` - Codificação e Decodificação ASCII85

O módulo `ascii85` do pacote `ivip-utils` oferece funções para codificação e decodificação de dados usando o esquema de codificação ASCII85. O ASCII85 é um esquema de codificação binário para texto que é frequentemente usado para representar dados binários de forma legível em texto, principalmente em documentos PostScript e PDF.

Você pode importar as funções do módulo `ascii85` conforme necessário. Aqui está um exemplo de importação:

```typescript
import ascii85 from 'ivip-utils/Ascii85';
```

### Funções Disponíveis

O módulo `ascii85` inclui duas funções principais para codificação e decodificação de dados:

#### `encode`

A função `encode` codifica um array de bytes (por exemplo, ArrayBuffer, Uint8Array ou array de números) em uma string ASCII85.

- `arr`: O array de bytes a ser codificado.
- Retorna a string ASCII85 resultante.

#### `decode`

A função `decode` decodifica uma string ASCII85 em um ArrayBuffer.

- `input`: A string ASCII85 a ser decodificada.
- Retorna um ArrayBuffer que contém os dados decodificados.

### Exemplo de Uso

Aqui está um exemplo de uso das funções `encode` e `decode` do módulo `ascii85`:

```typescript
import ascii85 from 'ivip-utils/Ascii85';

// Dados binários para codificar
const binaryData = new Uint8Array([72, 101, 108, 108, 111]); // "Hello" em ASCII

// Codifica os dados em uma string ASCII85
const encodedData = ascii85.encode(binaryData);
console.log(encodedData); // Saída: <~87cUR~

// Decodifica a string ASCII85 em dados binários
const decodedData = ascii85.decode(encodedData);
console.log(decodedData); // Saída: Uint8Array [ 72, 101, 108, 108, 111 ]
```

## Módulo SimpleEventEmitter

O `SimpleEventEmitter` é uma classe que permite emitir e escutar eventos em seu código. É útil para criar uma comunicação eficaz entre diferentes partes de seu programa.

### Importação

```javascript
import { SimpleEventEmitter } from 'ivip-utils';
```

### Construtor

```javascript
const emitter = new SimpleEventEmitter();
```

Cria uma instância de `SimpleEventEmitter` para que você possa começar a usar os métodos de emissão e escuta de eventos.

### Métodos

#### `on<T = any>(event: string, callback: (data: T) => void): SimpleEventEmitterProperty`

Este método é usado para se inscrever em um evento específico. Quando o evento é emitido, a função de retorno de chamada especificada será executada. Retorna um objeto `SimpleEventEmitterProperty` que pode ser usado para cancelar a inscrição posteriormente.

Exemplo:

```javascript
const subscription = emitter.on('eventoExemplo', (data) => {
  console.log('Evento ocorreu:', data);
});
```

#### `off<T = any>(event: string, callback?: (data: T) => void): this`

Este método é usado para cancelar a inscrição de um evento específico. Se nenhum callback for fornecido, todas as inscrições para o evento serão canceladas.

Exemplo:

```javascript
emitter.off('eventoExemplo', callback);
```

#### `once<T = any>(event: string, callback?: (data: T) => void): Promise<T>`

Este método é semelhante ao `on`, mas a função de retorno de chamada será executada apenas uma vez quando o evento for emitido. Retorna uma promessa que será resolvida quando o evento for emitido.

Exemplo:

```javascript
emitter.once('eventoExemplo').then((data) => {
  console.log('Evento ocorreu apenas uma vez:', data);
});
```

#### `emit(event: string, data?: any): this`

Este método é usado para emitir um evento com dados opcionais. Todos os ouvintes registrados para o evento serão acionados.

Exemplo:

```javascript
emitter.emit('eventoExemplo', { message: 'Olá, mundo!' });
```

#### `emitOnce(event: string, data?: any): this`

Este método é semelhante ao `emit`, mas os ouvintes registrados com `once` serão acionados apenas uma vez.

Exemplo:

```javascript
emitter.emitOnce('eventoExemplo', { message: 'Olá, mundo!' });
```

#### `pipe(event: string, eventEmitter: SimpleEventEmitter): SimpleEventEmitterProperty`

Este método é usado para redirecionar eventos de outro `SimpleEventEmitter`. Quando o evento especificado ocorrer no `eventEmitter` fornecido, ele será reemitido no `SimpleEventEmitter` atual.

Exemplo:

```javascript
emitter.pipe('eventoExterno', externalEmitter);
```

#### `pipeOnce(event: string, eventEmitter: SimpleEventEmitter): Promise<any>`

Este método é semelhante ao `pipe`, mas para eventos registrados com `once` no `eventEmitter` fornecido.

Exemplo:

```javascript
emitter.pipeOnce('eventoExterno', externalEmitter).then((data) => {
  console.log('Evento reemitido apenas uma vez:', data);
});
```

### Exemplo de Uso

```javascript
import { SimpleEventEmitter } from 'ivip-utils';

class Exemplo extends SimpleEventEmitter {
  constructor() {
    super();
    this.on('eventoExemplo', (data) => {
      console.log('Evento ocorreu:', data);
    });

    this.emit('eventoExemplo', { mensagem: 'Exemplo de evento' });
  }
}

const exemplo = new Exemplo();
```

Neste exemplo, uma classe `Exemplo` herda `SimpleEventEmitter` para que possa usar todos os métodos de emissão e escuta de eventos. Ele se inscreve em um evento chamado 'eventoExemplo' e emite esse evento com dados. Quando o evento é emitido, a função de retorno de chamada é chamada e exibe uma mensagem no console.

## Módulo BezierEasing

O módulo `BezierEasing` faz parte da biblioteca `ivip-utils`, e é uma poderosa ferramenta em JavaScript/TypeScript que permite a criação e utilização de funções de interpolação personalizadas baseadas em curvas de Bezier. Essas curvas são amplamente utilizadas em animações e transições, permitindo um controle preciso sobre a evolução de valores ao longo do tempo.

### Recursos Principais

* **Criação de Curvas de Bezier**: O módulo `BezierEasing` facilita a criação de curvas de Bezier personalizadas especificando os pontos de controle.

* **Interpolação Suave**: Com o `BezierEasing` do `ivip-utils`, você pode interpolar valores de forma suave e natural, ideal para animações fluidas e transições de interface do usuário.

* **Integração Flexível**: A biblioteca `ivip-utils` pode ser facilmente integrada em projetos JavaScript e TypeScript, oferecendo uma interface de fácil utilização.

### Como Usar

```typescript
import { BezierEasing } from 'ivip-utils';

// Crie uma instância de BezierEasing com pontos de controle personalizados
const customEasing = new BezierEasing(0.25, 0.1, 0.25, 1.0);

// Use a função `to(x)` para obter valores interpolados ao longo da curva
const easedValue = customEasing.to(0.5); // Exemplo: 0.6484375
```

### Lista de Curvas de Bezier

- **linear**: Uma curva de Bezier linear que resulta em uma transição uniforme, sem aceleração ou desaceleração.

- **elastic**: Uma curva de Bezier elástica que simula um efeito elástico suave, como um objeto sendo esticado e liberado.

- **ease**: Uma curva de Bezier que proporciona uma aceleração gradual no início e uma desaceleração gradual no final da transição.

- **ease-in**: Uma curva de Bezier que proporciona uma aceleração rápida no início da transição.

- **ease-in-elastic**: Uma curva de Bezier que combina a aceleração rápida do `ease-in` com um efeito elástico suave.

- **ease-in-bounce**: Uma curva de Bezier que combina a aceleração rápida do `ease-in` com um efeito de salto suave.

- **ease-in-expo**: Uma curva de Bezier que proporciona uma aceleração rápida no início, seguida por uma desaceleração suave.

- **ease-in-sine**: Uma curva de Bezier que produz uma aceleração suave no início da transição, semelhante a um movimento senoidal.

- **ease-in-quad**: Uma curva de Bezier que proporciona uma aceleração quadrática no início da transição.

- **ease-in-cubic**: Uma curva de Bezier que proporciona uma aceleração cúbica no início da transição.

- **ease-in-back**: Uma curva de Bezier que cria uma aceleração suave com um pequeno efeito de "rebote" no início da transição.

- **ease-in-quart**: Uma curva de Bezier que proporciona uma aceleração quártica no início da transição.

- **ease-in-quint**: Uma curva de Bezier que proporciona uma aceleração quintica no início da transição.

- **ease-in-circ**: Uma curva de Bezier que produz uma aceleração suave no início da transição, semelhante a um movimento circular.

- **ease-in-out**: Uma curva de Bezier que proporciona uma aceleração gradual no início e uma desaceleração gradual no final da transição, com uma suavização no meio.

- **ease-in-out-elastic**: Uma curva de Bezier que combina a suavização do `ease-in-out` com um efeito elástico suave.

- **ease-in-out-bounce**: Uma curva de Bezier que combina a suavização do `ease-in-out` com um efeito de salto suave.

- **ease-in-out-sine**: Uma curva de Bezier que produz uma aceleração suave no início e uma desaceleração suave no final da transição, semelhante a um movimento senoidal.

- **ease-in-out-quad**: Uma curva de Bezier que proporciona uma aceleração quadrática no início e uma desaceleração quadrática no final da transição.

- **ease-in-out-cubic**: Uma curva de Bezier que proporciona uma aceleração cúbica no início e uma desaceleração cúbica no final da transição.

- **ease-in-out-back**: Uma curva de Bezier que cria uma aceleração suave com um pequeno efeito de "rebote" no início e no final da transição.

- **ease-in-out-quart**: Uma curva de Bezier que proporciona uma aceleração quártica no início e uma desaceleração quártica no final da transição.

- **ease-in-out-quint**: Uma curva de Bezier que proporciona uma aceleração quintica no início e uma desaceleração quintica no final da transição.

- **ease-in-out-expo**: Uma curva de Bezier que proporciona uma aceleração exponencial no início e uma desaceleração exponencial no final da transição.

- **ease-in-out-circ**: Uma curva de Bezier que produz uma aceleração suave no início e uma desaceleração suave no final da transição, semelhante a um movimento circular.

- **ease-out**: Uma curva de Bezier que proporciona uma desaceleração gradual no final da transição.

- **ease-out-elastic**: Uma curva de Bezier que combina uma desaceleração gradual com um efeito elástico suave.

- **ease-out-bounce**: Uma curva de Bezier que combina uma desaceleração gradual com um efeito de salto suave.

- **ease-out-sine**: Uma curva de Bezier que produz uma desaceleração suave no final da transição, semelhante a um movimento senoidal.

- **ease-out-quad**: Uma curva de Bezier que proporciona uma desaceleração quadrática no final da transição.

- **ease-out-cubic**: Uma curva de Bezier que proporciona uma desaceleração cúbica no final da transição.

- **ease-out-back**: Uma curva de Bezier que cria uma desaceleração suave com um pequeno efeito de "rebote" no final da transição.

- **ease-out-quart**: Uma curva de Bezier que proporciona uma desaceleração quártica no final da transição.

- **ease-out-quint**: Uma curva de Bezier que proporciona uma desaceleração quintica no final da transição.

- **ease-out-expo**: Uma curva de Bezier que proporciona uma desaceleração exponencial no final da transição.

- **ease-out-circ**: Uma curva de Bezier que produz uma desaceleração suave no final da transição, semelhante a um movimento circular.

- **fast-out-slow-in**: Uma curva de Bezier que proporciona uma aceleração rápida no início e uma desaceleração suave no meio da transição, adequada para transições de interface do usuário.

- **fast-out-linear-in**: Uma curva de Bezier que proporciona uma aceleração rápida no início e uma transição linear no meio, adequada para transições de interface do usuário.

- **linear-out-slow-in**: Uma curva de Bezier que proporciona uma transição linear no início e uma desaceleração suave no meio, adequada para transições de interface do usuário.
  
Cada uma dessas curvas de Bezier tem um propósito específico e pode ser escolhida com base no comportamento desejado da animação ou transição em seu projeto.

### Exemplos de Curvas de Bezier

O `BezierEasing` do `ivip-utils` permite criar uma variedade de curvas de Bezier, desde transições suaves até efeitos de elasticidade e saltos.

```typescript
// Exemplo de curva de Bezier suave
const smoothEasing = new BezierEasing(0.25, 0.1, 0.25, 1.0);

// Exemplo de curva de Bezier elástica
const elasticEasing = BezierEasing.easeInElastic;

// Exemplo de curva de Bezier com salto
const bounceEasing = BezierEasing.easeInOutBounce;
```

O `BezierEasing` do `ivip-utils` oferece controle total sobre a forma da curva de Bezier para atender às suas necessidades específicas de animação.

```typescript
import { BezierEasing } from 'ivip-utils';

// Defina uma função para ser executada durante a animação
function updateValue(x: number) {
    // Atualize o valor com base em x (valor interpolado)
    console.log('Valor interpolado:', x);
}

// Inicie a animação com o método setInterval
const duration = 1000; // Duração da animação em milissegundos
const delay = 16; // Atraso entre cada quadro em milissegundos (aproximadamente 60 FPS)
const easing = new BezierEasing(0.42, 0.0, 1.0, 1.0); // Use a curva de Bezier personalizada
//const easing = "ease-in-elastic";
//const easing = BezierEasing.easeInElastic;
//const easing = (t:number) => t;

const timerDelay = BezierEasing.setInterval(updateValue, delay, duration, easing);

// Após a duração da animação, o timerDelay será definido como undefined e a animação será interrompida automaticamente.
```

Neste exemplo, criamos uma instância de `BezierEasing` com uma curva personalizada, definimos uma função `updateValue` que será chamada durante a animação para atualizar um valor com base no valor interpolado `x`, e então iniciamos a animação usando o método `setInterval`. Certifique-se de ajustar a duração, o atraso e a [curva de Bezier](#lista-de-curvas-de-bezier) de acordo com suas necessidades específicas.

## Classe Color

A classe `Color` é uma parte da biblioteca `ivip-utils` e é projetada para facilitar a manipulação e conversão de cores em diferentes formatos. Ela oferece métodos para criar, manipular e obter informações sobre cores em formatos como hexadecimal, RGB, HSL, HSV, CMYK e HWB. Além disso, fornece recursos para realizar operações comuns em cores, como escurecimento, clareamento, conversão entre formatos e muito mais.

### Como Usar

Aqui estão alguns exemplos de uso básico da classe `Color`:

```typescript
import { Color } from 'ivip-utils';

// Criar uma instância de Color com uma cor hexadecimal
const myColor = new Color('#FF0000');

// Verificar se a cor é válida
if (myColor.isValidColor) {
    // Obter informações sobre a cor
    console.log('Tipo:', myColor.type); // Tipo da cor (hex)
    console.log('Valor em hexadecimal:', myColor.hex);
    console.log('Valor em RGB:', myColor.rgb);
    console.log('Valor em HSL:', myColor.hsl);
    console.log('Valor em HSV:', myColor.hsv);
    console.log('Valor em CMYK:', myColor.cmyk);
    console.log('Valor em HWB:', myColor.hwb);
    console.log('Valor como string:', myColor.string);
    console.log('Valor como vetor:', myColor.vector);
    
    // Realizar operações com a cor
    const blendedColor = myColor.blend('#00FF00', 0.5); // Mistura com outra cor
    const darkenedColor = myColor.darken(0.2); // Escurece a cor
    const lightenedColor = myColor.lighten(0.2); // Clareia a cor
}
```

### Recursos

#### Verificação de Cor

Você pode verificar se uma string é uma representação válida de cor usando o método estático `isColor`:

```typescript
const isValid = Color.isColor('#FF0000'); // true
```

#### Conversão de Cor

A classe `Color` oferece métodos estáticos para criar uma instância a partir de diferentes formatos de cor:

```typescript
const color1 = Color.hex('#FF0000'); // Cria uma instância a partir de um valor hexadecimal
const color2 = Color.rgb(255, 0, 0); // Cria uma instância a partir de valores RGB
const color3 = Color.hsl(0, 100, 50); // Cria uma instância a partir de valores HSL
// ... e assim por diante
```

#### Escurecimento e Clareamento

Você pode escurecer ou clarear uma cor usando os métodos `darken` e `lighten`. O argumento é um valor entre 0 (nenhuma mudança) e 1 (cor totalmente escura ou clara):

```typescript
const darkenedColor = myColor.darken(0.2); // Escurece a cor em 20%
const lightenedColor = myColor.lighten(0.2); // Clareia a cor em 20%
```

#### Mistura de Cores

Você pode misturar duas cores usando os métodos `blend` e `static blend`:

```typescript
const blendedColor = myColor.blend('#00FF00', 0.5); // Mistura com outra cor
const blendedColorStatic = Color.blend('#FF0000', '#00FF00', 0.5); // Mistura duas cores estáticas
```

## Classe Base64

A classe `Base64` é uma parte da biblioteca `ivip-utils` e é projetada para facilitar a codificação e decodificação de dados em formato Base64. Ela oferece métodos para codificar e decodificar strings em Base64, bem como funções para manipulação de dados no formato UTF-8.

### Uso Básico

Aqui estão alguns exemplos de uso básico da classe `Base64`:

```typescript
import { Base64 } from 'ivip-utils';

// Codificar uma string em Base64
const originalString = 'Hello, World!';
const encodedString = Base64.encode(originalString);

console.log('String original:', originalString);
console.log('String codificada em Base64:', encodedString);

// Decodificar uma string Base64
const decodedString = Base64.decode(encodedString);

console.log('String decodificada:', decodedString);
```

Neste exemplo, criamos uma instância da classe `Base64` e usamos os métodos `encode` e `decode` para codificar e decodificar uma string em Base64. A classe também fornece métodos estáticos para realizar essas operações diretamente.

### Recursos

#### Codificação e Decodificação

Você pode usar os métodos `encode` e `decode` para codificar e decodificar strings em Base64:

```typescript
const encodedString = Base64.encode('Hello, World!'); // Codifica a string
const decodedString = Base64.decode(encodedString); // Decodifica a string
```

#### Manipulação de Dados UTF-8

A classe `Base64` oferece métodos estáticos para manipulação de dados UTF-8, como `utf8_encode` e `utf8_decode`:

```typescript
const utf8EncodedString = Base64.utf8_encode('Olá, Mundo!'); // Codifica em UTF-8
const utf8DecodedString = Base64.utf8_decode(utf8EncodedString); // Decodifica de UTF-8
```

## Módulo JSONStringify

O módulo `JSONStringify` é uma parte da biblioteca `ivip-utils` e fornece uma função simples para transformar um objeto JavaScript em uma string JSON. Esta função é útil quando você precisa serializar um objeto para poder transmiti-lo, armazená-lo ou transferi-lo de forma mais conveniente.

### Uso Básico

Aqui está um exemplo simples de como usar a função `JSONStringify`:

```typescript
import { JSONStringify } from 'ivip-utils';

const obj = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const jsonString = JSONStringify(obj);

console.log('Objeto serializado em JSON:', jsonString);
```

Neste exemplo, importamos a função `JSONStringify` e a usamos para transformar um objeto JavaScript em uma string JSON.

### Recursos

#### Função de Serialização

O módulo `JSONStringify` fornece uma função simples para serializar objetos JavaScript em strings JSON.

```typescript
const jsonString = JSONStringify(obj);
```

#### Uso Conveniente

A serialização de objetos é uma tarefa comum ao trabalhar com dados em JavaScript. O `JSONStringify` torna essa tarefa mais conveniente, permitindo que você transforme objetos em strings JSON com facilidade.

## Módulo mergeClasses

O módulo `mergeClasses` é uma parte da biblioteca `ivip-utils` e fornece uma função poderosa para mesclar duas classes de objetos JavaScript, combinando seus parâmetros e propriedades em uma única classe. Essa função é útil quando você precisa combinar ou estender as funcionalidades de duas classes em seu código.

### Uso Básico

Aqui está um exemplo simples de como usar a função `mergeClasses`:

```typescript
import { mergeClasses } from 'ivip-utils';

class ClassA {
  constructor(a) {
    this.a = a;
  }
}

class ClassB {
  constructor(b) {
    this.b = b;
  }
}

const mergedClass = mergeClasses(ClassA, ClassB);

const instance = new mergedClass('Hello, World!');

console.log('Instância resultante:', instance);
```

Neste exemplo, temos duas classes, `ClassA` e `ClassB`, cada uma com seu próprio parâmetro de construtor. Usamos a função `mergeClasses` para criar uma nova classe combinada que possui ambos os parâmetros de `ClassA` e `ClassB`. Em seguida, criamos uma instância da classe combinada e a inicializamos com um valor.

### Recursos

#### Mesclagem de Classes

O módulo `mergeClasses` oferece uma função poderosa para mesclar duas classes de objetos JavaScript, combinando seus parâmetros e propriedades em uma única classe.

```typescript
const mergedClass = mergeClasses(ClassA, ClassB);
```

#### Uso Conveniente

Mesclar classes é uma tarefa comum ao trabalhar com herança ou extensão de funcionalidades em JavaScript. O `mergeClasses` torna essa tarefa mais conveniente, permitindo que você combine as classes de forma simples e eficaz.

Aqui está a documentação completa para o módulo `mat4` do pacote `ivip-utils`, que fornece várias funções para manipulação de matrizes 4x4 em JavaScript:

## Módulo `gl`

O módulo `gl` do pacote `ivip-utils` oferece uma série de funções úteis para trabalhar com gráficos WebGL, especialmente com matrizes 4x4. Essas funções são frequentemente usadas para aplicar transformações em objetos 3D renderizados em um contexto WebGL.

Você pode importar as funções do módulo `gl` conforme necessário. Aqui está um exemplo de importação:

```typescript
import * as gl from 'ivip-utils/gl';
```

### Funções Disponíveis

O módulo `gl` inclui várias funções que são úteis ao trabalhar com gráficos WebGL e matrizes 4x4. A maioria dessas funções usa matrizes 4x4 para realizar transformações em objetos 3D renderizados. Abaixo estão as funções disponíveis:

#### Funções de Matriz 4x4

O módulo `gl` exporta as funções do módulo `mat4` do pacote `ivip-utils`. Consulte a documentação mais abaixo para obter detalhes sobre essas funções.

### Módulo `mat4` - Manipulação de Matrizes 4x4

O módulo `mat4` do pacote `ivip-utils/gl` oferece uma série de funções para criação, manipulação e operações em matrizes 4x4. Matrizes 4x4 são amplamente usadas em gráficos 3D e transformações, como rotação, translação e escala.

Você pode importar as funções de matriz 4x4 individualmente em seu código, conforme necessário. Aqui estão alguns exemplos de importações:

```typescript
import { mat4 } from 'ivip-utils/gl';
```

#### Funções Disponíveis

Aqui está uma lista de funções disponíveis no módulo `mat4`, juntamente com suas descrições:

##### `adjoint`

A função `adjoint` calcula o adjunto de uma matriz 4x4.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- Retorna a matriz de destino `out`.

##### `clone`

A função `clone` cria uma nova matriz 4x4 inicializada com os valores de uma matriz existente.

- `a`: A matriz a ser clonada.
- Retorna uma nova matriz 4x4.

##### `copy`

A função `copy` copia os valores de uma matriz de origem para uma matriz de destino.

- `out`: A matriz de destino.
- `a`: A matriz de origem.
- Retorna a matriz de destino `out`.

##### `create`

A função `create` cria uma nova matriz 4x4 inicializada como a matriz de identidade.

- Retorna uma nova matriz de identidade 4x4.

##### `determinant`

A função `determinant` calcula o determinante de uma matriz 4x4.

- `a`: A matriz de origem.
- Retorna o determinante como um número.

##### `fromQuat`

A função `fromQuat` cria uma matriz de rotação 4x4 a partir de um quaternion de rotação.

- `out`: A matriz de destino.
- `q`: O quaternion de rotação.
- Retorna a matriz de destino `out`.

##### `fromRotation`

A função `fromRotation` cria uma matriz de rotação 4x4 a partir de um ângulo e um vetor de eixo.

- `out`: A matriz de destino.
- `rad`: O ângulo de rotação em radianos.
- `axis`: O vetor de eixo de rotação.
- Retorna a matriz de destino `out`.

##### `fromRotationTranslation`

A função `fromRotationTranslation` cria uma matriz 4x4 a partir de uma rotação quaternion e um vetor de translação.

- `out`: A matriz de destino.
- `q`: O quaternion de rotação.
- `v`: O vetor de translação.
- Retorna a matriz de destino `out`.

##### `fromScaling`

A função `fromScaling` cria uma matriz de escala 4x4 a partir de um vetor de escala.

- `out`: A matriz de destino.
- `v`: O vetor de escala.
- Retorna a matriz de destino `out`.

##### `fromTranslation`

A função `fromTranslation` cria uma matriz de translação 4x4 a partir de um vetor de translação.

- `out`: A matriz de destino.
- `v`: O vetor de translação.
- Retorna a matriz de destino `out`.

##### `fromXRotation`

A função `fromXRotation` cria uma matriz de rotação 4x4 em torno do eixo X a partir de um ângulo.

- `out`: A matriz de destino.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out`.

##### `fromYRotation`

A função `fromYRotation` cria uma matriz de rotação 4x4 em torno do eixo Y a partir de um ângulo.

- `out`: A matriz de destino.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out`.

##### `fromZRotation`

A função `fromZRotation` cria uma matriz de rotação 4x4 em torno do eixo Z a partir de um ângulo.

- `out`: A matriz de destino.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out`.

##### `frustum`

A função `frustum` gera uma matriz de projeção de frustum com os limites especificados.

- `out`: A matriz de destino.
- `left`: O limite esquerdo do frustum.
- `right`: O limite direito do frustum.
- `bottom`: O limite inferior do frustum.
- `top`: O limite superior do frustum.
- `near`: A distância do plano de visão próximo.
- `far`: A distância do plano de visão distante.
- Retorna a matriz de destino `out`.

##### `identity`

A função `identity` define uma matriz como a matriz de identidade.

- `out`: A matriz de destino.
- Retorna a matriz de destino `out`.

##### `invert`

A função `invert` calcula a inversa de uma matriz 4x4.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- Retorna a matriz de destino `out` ou `null` se a matriz não for inversível.

##### `lookAt`

A função `lookAt` gera uma matriz de visualização (look-at) com as posições do olho, ponto de foco e vetor "up" especificados.

- `out`: A matriz de destino.
- `eye`: A posição do observador (olho).
- `center`: O ponto para o qual o observador está olhando.
- `up`: O vetor que define a direção "para cima".
- Retorna a matriz de destino `out`.

##### `multiply`

A função `multiply` multiplica duas matrizes 4x4.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A primeira matriz.
- `b`: A segunda matriz.
- Retorna a matriz de destino `out`.

##### `ortho`

A função `ortho` gera uma matriz de projeção ortogonal com os limites especificados.

- `out`: A

 matriz de destino.
- `left`: O limite esquerdo do volume de visualização.
- `right`: O limite direito do volume de visualização.
- `bottom`: O limite inferior do volume de visualização.
- `top`: O limite superior do volume de visualização.
- `near`: A distância do plano de visualização próximo.
- `far`: A distância do plano de visualização distante.
- Retorna a matriz de destino `out`.

##### `perspective`

A função `perspective` gera uma matriz de projeção perspectiva com os parâmetros especificados.

- `out`: A matriz de destino.
- `fovy`: O campo de visão vertical em radianos.
- `aspect`: A proporção de aspecto (largura / altura).
- `near`: A distância do plano de visão próximo.
- `far`: A distância do plano de visão distante.
- Retorna a matriz de destino `out`.

##### `perspectiveFromFieldOfView`

A função `perspectiveFromFieldOfView` gera uma matriz de projeção perspectiva com base em um campo de visão especificado.

- `out`: A matriz de destino.
- `fov`: Um objeto com as seguintes propriedades: `upDegrees`, `downDegrees`, `leftDegrees`, `rightDegrees`.
- `near`: A distância do plano de visão próximo.
- `far`: A distância do plano de visão distante.
- Retorna a matriz de destino `out`.

##### `rotate`

A função `rotate` aplica uma rotação a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `rad`: O ângulo de rotação em radianos.
- `axis`: O vetor de eixo de rotação.
- Retorna a matriz de destino `out` ou `null` se a matriz não for válida.

##### `rotateX`

A função `rotateX` aplica uma rotação em torno do eixo X a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out` ou `null` se a matriz não for válida.

##### `rotateY`

A função `rotateY` aplica uma rotação em torno do eixo Y a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out` ou `null` se a matriz não for válida.

##### `rotateZ`

A função `rotateZ` aplica uma rotação em torno do eixo Z a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `rad`: O ângulo de rotação em radianos.
- Retorna a matriz de destino `out` ou `null` se a matriz não for válida.

##### `scale`

A função `scale` aplica uma escala a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `v`: O vetor de escala.
- Retorna a matriz de destino `out`.

##### `str`

A função `str` converte uma matriz 4x4 em uma representação de string legível.

- `a`: A matriz a ser convertida em string.
- Retorna a representação de string da matriz.

##### `translate`

A função `translate` aplica uma translação a uma matriz 4x4 existente.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- `v`: O vetor de translação.
- Retorna a matriz de destino `out`.

##### `transpose`

A função `transpose` transpõe uma matriz 4x4, trocando as linhas pelas colunas.

- `out`: A matriz de destino onde o resultado será armazenado.
- `a`: A matriz de origem.
- Retorna a matriz de destino `out`.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar problemas ou tiver melhorias para sugerir, por favor, abra uma issue neste repositório.

## Licença

Este projeto é licenciado sob a licença [MIT](LICENSE).