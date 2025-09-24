# qa-portfolio-projects
Um portfólio de projetos de automação de testes web, API e manuais usando JavaScript.

# Portfolio de Testes de Qualidade de Software

Olá! Eu sou Eduardo Braz da Motta, e este é o meu portfólio de projetos de testes de software.
Aqui, você encontrará exemplos práticos do meu trabalho em automação de testes, validação de APIs e documentação de testes manuais.

---

### **Habilidades e Ferramentas**

* **Automação Web:** Selenium WebDriver, Playwright, Mocha, Chai, JavaScript
* **Testes de API:** Postman, Jest
* **CI/CD:** GitHub Actions
* **Metodologias:** Testes Funcionais, Testes de Regressão, Testes Manuais

---

### **Projetos**

#### **1. Automação Web (UI)**
* **Descrição:** Neste projeto, desenvolvi um conjunto de testes de regressão automatizados para garantir a funcionalidade crítica do site Banco Web. O framework, construído com Selenium WebDriver e JavaScript, cobre testes end-to-end do fluxo de login, pesquisa de produtos e validação de elementos da página, garantindo que as funcionalidades principais operem como esperado.
* **Ferramentas:** Selenium WebDriver, Mocha, Chai.
* **Status:** Em desenvolvimento.
* **Acessar:** http://localhost:4000

#### **2. Testes de API**
* **Descrição:** Análise e automação de testes para a API pública [Nome da API]. O projeto contém uma coleção de testes no Postman e scripts automatizados com Jest e Axios, focados em validar os endpoints de GET, POST, PUT e DELETE. O objetivo é garantir que a API se comporte de forma consistente e segura.
* **Ferramentas:** Postman.
* **Status:** Em desenvolvimento.
* **Acessar:** 

#### **3. Testes Manuais**
* **Descrição:** Este projeto demonstra o ciclo de vida de um teste manual, desde o planejamento até a execução e o reporte de defeitos. Contém planos de teste definindo o escopo e a estratégia, casos de teste detalhados em formato tabular, e exemplos de relatórios de bugs que seguem as melhores práticas do mercado, com informações claras para o time de desenvolvimento.
* **Documentação:** 
---

Primeiro teste executado: login positivo e login negativo.

# Projeto de Testes de Login com Playwright

Este repositório contém os testes de automação de interface para a funcionalidade de login de uma aplicação web, utilizando a ferramenta Playwright. O projeto abrange tanto o cenário de sucesso (login com credenciais válidas) quanto o cenário de falha (login com credenciais inválidas).

### 🚀 Tecnologias Utilizadas

* **Playwright:** Framework de automação de testes para navegadores.
* **JavaScript:** Linguagem de programação utilizada para escrever os testes.

### ✅ Cenários de Teste

O projeto de testes de login foi estruturado para garantir a robustez da funcionalidade, cobrindo os seguintes cenários:

1.  **Cenário Positivo (Happy Path):**
    * **Objetivo:** Verificar se o login é bem-sucedido com credenciais corretas.
    * **Verificações:**
        * A aplicação redireciona para a página principal após o login.
        * O elemento principal da página de destino é exibido corretamente.

2.  **Cenário Negativo (Sad Path):**
    * **Objetivo:** Garantir que a aplicação lida corretamente com credenciais inválidas.
    * **Verificações:**
        * Uma mensagem de erro apropriada é exibida na tela.
        * A aplicação não redireciona o usuário, mantendo-o na página de login.

### 💡 Minha Jornada e Aprendizados

Durante o desenvolvimento deste projeto, tive a oportunidade de migrar de uma abordagem inicial com **Selenium** para o **Playwright**. Essa transição foi crucial. Percebi que, embora o Selenium seja uma ferramenta poderosa, o Playwright me ofereceu maior agilidade e confiabilidade, especialmente com seu sistema de espera automática e sua configuração mais simples.

O Playwright não só me ajudou a escrever testes mais robustos, como também permitiu que eu os executasse de forma nativa em múltiplos navegadores (Chromium, Firefox e WebKit), garantindo que a funcionalidade de login se comportasse como esperado em todos os ambientes.

### ⚙️ Como Executar os Testes

1.  **Pré-requisitos:** Certifique-se de ter o Node.js instalado na sua máquina.
2.  **Instalação:**
    ```bash
    npm install
    ```
3.  **Executar os testes:**
    ```bash
    npx playwright test
    ```
    * O comando acima irá executar todos os testes em Chromium, Firefox e WebKit.
    
    Para visualizar o relatório em HTML após a execução, use:
    ```bash
    npx playwright show-report
    ```

### 📈 Resultado dos Testes

![Imagem do terminal mostrando os 12 testes passados]
*(Insira aqui a imagem do seu terminal mostrando "12 passed")*

Este resultado demonstra que tanto o teste de login positivo quanto o negativo foram bem-sucedidos em todos os navegadores testados.


### **Contato**

* **LinkedIn:** www.linkedin.com/in/eduardo-motta-qa

* **Email:** eduardomotta72@gmail.com
