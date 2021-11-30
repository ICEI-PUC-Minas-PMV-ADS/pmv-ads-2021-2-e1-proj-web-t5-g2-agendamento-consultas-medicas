// declara um conjunto inicial de contatos
var db_contatos_inicial = {


    paciente: [
                    
        {
            "id": 1,
            "imagem":'./img/p-01.jpg',
            "nome": "Fernanda ",
            "sobrenome":"Ferreira",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "fernanda-med@gmail.biz",
            "endereco": "Rua Copacabana 11",
            "cidade": "Rio de Janeiro"
        },
        {
            "id": 2,
            "imagem":'./img/p-02.jpg',
            "nome": "Marcos",
            "sobrenome":"Daniel",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "marcos-med@gmail.biz",
            "endereco": "Av dos Andradas 22",
            "cidade": "Belo Horizonte"
            
        },
        {
            "id": 3,
            "imagem":'./img/p-03.jpg',
            "nome": "José",
            "sobrenome": "Henrique",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "jose-med@gmail.biz",
            "endereco": "Av Alvares Cabral 33",
            "cidade": "Belo Horizonte"
      
        },
        {
            "id": 4,
            "imagem":'./img/p-04.jpg',
            "nome": "Maria ",
            "sobrenome":"da Silva",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "maria-med@gmail.biz",
            "endereco":"Rua treze de maio 44",
            "cidade": "Belo Horizonte"
            
        },
        {
            "id": 5,
            "imagem":'./img/p-05.jpg',
            "nome": "Bruno",
            "sobrenome":"Oliveira",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "bruno-med@gmail.biz",
            "endereco":"Rua Afonso 55",
            "cidade": "Belo Horizonte"
        },
        {
            "id": 6,
            "imagem":'./img/p-06.jpg',
            "nome": "Rodrigo ",
            "sobrenome":"Costa",
            "cpf": "000.000.004-45",
            "convenio": "unimed",
            "telefone": "3974-5847",
            "email": "rodrigo-med@gmail.biz",
            "endereco":"Rua Alfredo 66",
            "cidade": "Belo Horizonte"
        },
       
    ],

   


}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.paciente.length != 0) 
      novoId = db.paciente[db.paciente.length - 1].id + 1;
    let novoContato = {
        

            "id": novoId,
            "nome": contato.nome,
            "sobrenome": contato.sobrenome,
            "cpf": contato.cpf,
            "convenio": contato.convenio,
            "telefone": contato.telefone,
            "email": contato.email,
            "endereco": contato.endereco,
            "cidade": contato.cidade,

    };

    // Insere o novo objeto no array
    db.paciente.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.paciente.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.paciente[index].nome = contato.nome,
    db.paciente[index].sobrenome = contato.sobrenome,
    db.paciente[index].cpf = contato.cpf,
    db.paciente[index].convenio = contato.convenio,
    db.paciente[index].telefone = contato.telefone,
    db.paciente[index].email = contato.email,
    db.paciente[index].endereco = contato.endereco,
    db.paciente[index].cidade = contato.cidade,

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.paciente = db.paciente.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
