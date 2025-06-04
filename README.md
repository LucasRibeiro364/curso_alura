## Uso de `alert` e `prompt` em JavaScript

### `alert`
A função `alert` exibe uma caixa de diálogo simples no navegador com uma mensagem para o usuário e um botão "OK" para fechar. É usada para fornecer informações ou notificações, como mensagens de erro ou confirmações.

**Exemplo:**
```javascript
alert("Acesso ao sistema garantido");
```
- Exibe: Uma mensagem pop-up com o texto "Acesso ao sistema garantido".
- Não retorna valores e pausa a execução até o usuário clicar em "OK".

### `prompt`
A função `prompt` exibe uma caixa de diálogo com um campo de entrada de texto, permitindo que o usuário insira dados. Ela retorna o valor digitado como uma string ou `null` se o usuário cancelar.

**Exemplo:**
```javascript
let senha = prompt("Digite sua senha:");
```
- Exibe: Um pop-up com um campo de texto e botões "OK" e "Cancelar".
- Retorna: O texto digitado ou `null` se cancelado.

### Exemplo Combinado
```javascript
let senha = prompt("Digite sua senha:");
if (senha == "senhaDoSistema") {
    alert("Acesso ao sistema garantido");
} else {
    alert("Senha incorreta");
}
```
- Solicita uma senha com `prompt`.
- Usa `alert` para informar se a senha está correta ou não.

**Nota:** Ambas as funções são síncronas e podem pausar a execução do código, o que pode não ser ideal para aplicações modernas. Considere alternativas como modais personalizados para interfaces mais sofisticadas.





## Concatenação em JavaScript

### O que é Concatenação?
Concatenação é o processo de combinar duas ou mais strings em JavaScript para formar uma nova string. É comumente usado para construir mensagens dinâmicas, combinar valores de variáveis ou formatar textos.

### Como Funciona?
Em JavaScript, a concatenação de strings pode ser realizada de diferentes maneiras:

1. **Operador `+`**:
   O operador `+` é usado para juntar strings ou combinar strings com outros tipos de dados (que são convertidos para strings automaticamente).

   **Exemplo:**
   ```javascript
   let nome = "João";
   let saudacao = "Olá, " + nome + "!";
   alert(saudacao); // Exibe: Olá, João!
   ```

2. **Template Literals (Template Strings)**:
   Usando crases (\`) e `${expressão}`, é possível criar strings mais legíveis e incorporar expressões diretamente. Introduzido no ES6, é uma alternativa moderna ao operador `+`.

   **Exemplo:**
   ```javascript
   let nome = "Maria";
   let saudacao = `Olá, ${nome}!`;
   alert(saudacao); // Exibe: Olá, Maria!
   ```

3. **Método `concat()`**:
   O método `concat()` combina strings, retornando uma nova string sem alterar as originais.

   **Exemplo:**
   ```javascript
   let inicio = "Bem-vindo, ";
   let fim = "usuário!";
   let mensagem = inicio.concat(fim);
   alert(mensagem); // Exibe: Bem-vindo, usuário!
   ```

### Integração com `alert` e `prompt`
A concatenação é frequentemente usada com `prompt` para capturar entradas do usuário e com `alert` para exibir mensagens personalizadas.

**Exemplo Combinado:**
```javascript
let senha = prompt("Digite sua senha:");
let mensagem = "A senha digitada foi: " + senha;
alert(mensagem); // Exibe a senha fornecida pelo usuário
```

**Usando Template Literals:**
```javascript
let senha = prompt("Digite sua senha:");
alert(`A senha digitada foi: ${senha}`);
```

### Boas Práticas
- **Template Literals** são recomendados para maior legibilidade e facilidade ao incluir variáveis ou expressões.
- Evite concatenar grandes quantidades de strings em loops; use arrays com `join()` para melhor desempenho.
- Certifique-se de que os valores concatenados são strings ou convertidos adequadamente para evitar erros.

**Nota:** Concatenar valores não-string (como números) com `+` pode levar a resultados inesperados devido à coerção de tipos. Use `String()` ou template literals para maior controle.

**Exemplo com Coerção:**
```javascript
let numero = 42;
let texto = "O número é " + numero; // Funciona, converte número para string
alert(texto); // Exibe: O número é 42
```