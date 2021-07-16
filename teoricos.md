**1. O que é o ES6?**

ECMAScript (ES) é o nome oficial para linguagem de programação JavaScript. ES6, também chamada de ECMAScript 2015, é a versão do ECMAScript que é padronizada e suportada pelos principais navegadores modernos (i.e., Chrome, Firefox, Edge, Safari e Opera) e pelo Node.js.

**2. Exemplifique algumas features introduzidas no ES6.**

Exemplos de features introduzidas no ES6 são:

* As palavras-chave let e const para a criação de variáveis com escopo de bloco e de constantes, respectivamente.
* Arrow functions para a criação de funções anônimas.
* A criação de classes, por meio da palvra-chave *class*, para facilitar a escrita de código orientado a objetos.
* A abstrção *Promise* para a criação de objetos que facilitem a escrita de código assíncrono. Por meio de promises podemos separar com maior facilidade o código que produz resultados de maneira assíncrona do código que aguarda para consumir os resultados gerados.  

**3. Qual a diferença entre var, let e const?**

Os comandos var e let são utilizados para a criação de variáveis. A principal diferença entre os dois comandos é o escopo da variável criada. Utilizando *var*, definimos o escopo da variável como sendo a função onde a variável foi criada. Já com o comando *let*, o escopo da variável fica limitado ao bloco (e.g., bloco if, expressão isolada, etc) no qual a declaração foi realizada.
Por fim, o comando *const* é utilizada para a criação de constantes, que são variáveis com valor imutável. Todas elas podem ter o escopo global caso sejam declaradas fora de qualquer função ou bloco.  

**4. O que é destructuring e para quais propósitos pode ser utilizado?**

*Destructuring* é uma forma de extrair multiplas propriedades de um objeto ou array para variáveis separadas. Pode ser utilizado para melhorar a legibidade de um código que acesse diferentes propriedades de um mesmo objeto ou array.  

**5. O que é o DOM?**

DOM é uma sigla para Document Object Model (Modelo de Objeto de Documento) que é um padrão definido pela W3C. O DOM oferece uma interface padronizada para acessar os elementos de uma página HTML por meio de código JavaScript. Por meio do DOM um código JavaScript é capaz de acessar e alterar o conteúdo, a estrutura e o estilo de um documento HTML. O DOM define os elementos, as propriedades dos elementos, os métodos para acessar os elementos e os eventos que cada elemento pode disparar. 

**6. Quais problemas o JavaScript assíncrono soluciona?**

A execução de códigos assíncronos é suportada nativamente pela linguagem JavaScript. Isso significa que não é necessária a utilização de frameworks ou threads para isso. Essa característica se justifica pelo fato do JavaScript ser uma linguagem projetada para uso em navegadores. Os navegadores, por natureza, devem suportar a execução de diferentes trechos de código com base em eventos que acontecem durante o uso de uma página (e.g., clique de mouse, requisições AJAX, etc). Como o JavaScript, por padrão, executa em uma única thread e uma página não pode ficar travada a cada evento, os eventos que podem demorar mais tempo (e.g., esperar uma ação do usuário, esperar a conclusão de uma requisição, etc) são enfileirados e executados de maneira assíncrona sem bloquear o fluxo principal de execução.    

**7. Para que servem os comandos async e await?**

Os comandos *async/await* devem sempre ser utilizados em conjunto e servem para a criação de funções que executam código assíncrono. 
Elas podem ser utilizadas para simplificar o uso de promises de maneira síncrona. Toda função criada com async retorna uma promise como resultado. O comando await faz com que a função async espere pela conclusão do código assíncrono antes de finalizar sua execução e retornar uma promise. 

**8. Quais as vantagens de se usar Promises ao invés de callbacks?**

Do ponto de vista funcional, ambas opções podem atingir o mesmo objetivo. O uso de Promises se mostra mais vantajoso no sentido de tornar o código mais organizado e fácil de entender. Quando temos uma função *x* que precisa esperar o código assíncrono de outra função *y* terminar de executar, podemos passar *y* como parâmetro para *x*, dessa forma *x* pode executar operações inicias e, em seguida, chamar *y*. Considerando que o código de *y* é assíncrono, *x* será chamado de volta para continuar sua execução assim que *y* terminar de executar. Esse tipo de código é bastante comum em JavaScript. O grande problema é que podemos ter múltiplas chamadas do tipo callback aninhadas. O resultado acaba sendo um código complexo com vários callbacks aninhados. Esse tipo de código é prejudicial pois dificulta o entendimento e, consequentemente, torna o programa mais propenso a defeitos. Tal situação é tão comum que existe um termo na indústria para descrevê-la: *callback hell*.

Com o uso de Promises, conseguimos resolver o problema descrito acima, já que as Promises nos permitem organizar a chamada de múltiplos callbacks por meio dos comandos *then* e *catch*.