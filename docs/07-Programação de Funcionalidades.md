# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. O respectivo endereço (URL) e outras orientações de acesso são apresentadas na sequência.

## Pagina Inicial (RF-01, RF-02 e RF-03)
A tela principal do sistema apresenta login, senha e tipo de acesso. 
Os dados cadastrados e carregados são armazenadas no LocalStorage com estruturas dados baseado em JSON. Um 
exemplo da tela é apresentada na Figura 1.

![Index](img/01-Tela-Inicial-Online.png)

                Figura 1 - Tela Principal
                
### Requisitos atendidos
- RF-01
- RF-02
- RF-03

### Artefatos da funcionalidade
- index.html
- login.js
- style-Index.css
- logo.png

### Estrutura de Dados

![Index](img/JS-login.png)

### Instruções de acesso
1. Abra um navegador de Internet e informe a seguinte URL: https://replit.com/@hugokioshi ou https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t5-g2-agendamento-consultas-medicas/src/index.html
2. A tela de login é a primeira funcionalidade exibida pelo aplicativo.

## Cadastro (RF-04 e RF-05)
A  tela permite ao usuário que faça um pré-cadastro  preenchendo os requisitos: Usuário, Nome, E-mail, CPF/CNPJ, Telefone e senha.

![CadastroLogin](img/Cad-On.png)

### Artefatos da funcionalidade
- index.html
- login.js
- style-Index.css

### Instruções de acesso
1. Abra um navegador de Internet e informe a seguinte URL: https://replit.com/@hugokioshi ou https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2021-2-e1-proj-web-t5-g2-agendamento-consultas-medicas/src/index.html.
2. Clica em novo usuário e preenche o formulário.


## Painel Paciente/ Consultar Médicos (RF-06)
O paciente consegue agendar consultas utilizando seu login de acesso, com possibilidade de filtrar: Cidades, Especialidade e Convênio.

![CadastroLogin](img/RF-06.png)

### Artefatos da funcionalidade
- panel-paciente.html
- style-PadraoH.css
- db-Geral.js
- logo.png

### Estrutura de Dados

![Index](img/JS-Geral.png)

## Alteração de dados Médicos (RF-07)
O administrador consegue alterar informações do médico como: Nome, CPF, Valor, Especialidade, Horário, Jornada, E-mail, Telefone.

![MeuCadMedico](img/RF-07.png)

### Artefatos da funcionalidade
- meucadastro-medico.html
- style-PadraoH.css
- db-Geral.js
- logo.png

### Estrutura de Dados

![Index](img/JS-Geral.png)





## Consultas Marcadas do médico 
O médico consegui  visualizar e finalizar as suas consultas marcadas  

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g2-agendamento-consultas-medicas/blob/2ecf45f386d90affd0900e8d797b5164d72a873b/docs/img/AgendaCRUD.jpeg 

### Artefatos da funcionalidade
- AgendaMed.HTML
- StyleMedArea.CSS
- appColsuta.js

## Consultas Agendadas 
Onde o paciente verá as consultas que tem marcadas 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t5-g2-agendamento-consultas-medicas/blob/41b2e59c10f9f59b02807c97c863dcdc3e059591/docs/img/agendadas.jpg

### Artefatos da funcionalidade
- indexagendAmento.HTML
- styleagenAgendameto.CSS



> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
