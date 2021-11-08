// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    medico: [
        {
            "id": 1,
            "imagem":'./img/m-01.jpg',
            "nome": "Dr. Luiz Antonio Coelho",
            "crm": "Dr. Luiz Antonio Coelho",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "especialidade": "Ortopedista",
            "preco": "R$290",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "luz-or@gmail.com",
            "telefone": "3826-1638",
            "telefone2": "3826-2045"
        },
        {
            "id": 2,
            "imagem":'./img/m-02.jpg',
            "nome": "Dra. Marcos Cesar",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "São Paulo",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drmarcos@yahoo.com.br",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 3,
            "imagem":'./img/m-03.jpg',
            "nome": "Dra. Marina Bucker",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "São Paulo",
            "convenio": "unimed",
            "especialidade": "Ortopedista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "marina-ort@april.br",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 4,
            "imagem":'./img/m-04.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 5,
            "imagem":'./img/m-05.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 6,
            "imagem":'./img/m-06.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 7,
            "imagem":'./img/m-07.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 8,
            "imagem":'./img/m-08.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 9,
            "imagem":'./img/m-09.jpg',
            "nome": "Dra. Bucker Marina",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Dermatologista",  
            "preco": "R$350",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "drabucker@gmail.com",
            "telefone": "3245-7812",
            "telefone2": "3245-7845"
        },
        {
            "id": 10,
            "imagem":'http://lorempixel.com/100/70/people/10',
            "nome": "Dr. Sergio",
            "cnpj/cpf": "00.000.001/0001-25",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "especialidade": "Ortopedista",
            "preco": "R$250",
            "jornada": "segunda a sexta",
            "horario": "08:00 a 11:00 13:00 a 16:00",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874"
        }
    ],


    paciente: [
                    
        {
            "id": 1,
            "imagem":'./img/p-01.jpg',
            "nome": "José Henrique",
            "cpf": "000.000.004-45",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",          
            "mes": "Janeiro",          
        },
        {
            "id": 2,
            "imagem":'./img/p-02.jpg',
            "nome": "Marcos Daniel",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Janeiro",
        },
        {
            "id": 3,
            "imagem":'./img/p-03.jpg',
            "nome": "Fernanda Ferreira",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Março",
        },
        {
            "id": 4,
            "imagem":'./img/p-04.jpg',
            "nome": "Guilherme Mateus",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Junho",
        },
        {
            "id": 5,
            "imagem":'./img/p-05.jpg',
            "nome": "Bruno Oliveira",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
        },
        {
            "id": 6,
            "imagem":'./img/p-06.jpg',
            "nome": "Rodrigo Costa",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
        }
       
    ],

    horario: [
                    
        {
            "id": 1,
            "horario": "08:00 ás 09:10",           
        },
        {
            "id": 2,
            "horario": "09:30 ás 10:40",           
        },
        {
            "id": 3,
            "horario": "11:00 ás 12:10",           
        },
        {
            "id": 4,
            "horario": "14:00 ás 15:10",           
        },
        {
            "id": 5,
            "horario": "15:30 ás 16:40",           
        },
        {
            "id": 6,
            "horario": "16:50 ás 18:00",           
        }
       
    ]


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
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        

            "id": novoId,
            "nome": contato.nome,
            "cnpj/cpf": contato.cnpj/cpf,
            "cidade": contato.cidade,
            "convenio": contato.convenio,
            "especialidade": contato.especialidade,
            "preco": contato.preco,
            "jornada": contato.jornada,
            "horario": contato.horario,
            "email": contato.email,
            "telefone": contato.telefone,
            "telefone2": contato.telefone2
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.cnpj/cpf,
    db.data[index].telefone = contato.cidade,
    db.data[index].cidade = contato.convenio,
    db.data[index].categoria = contato.especialidade,
    db.data[index].categoria = contato.preco,
    db.data[index].categoria = contato.jornada,
    db.data[index].categoria = contato.horario,
    db.data[index].categoria = contato.email,
    db.data[index].categoria = contato.telefone,
    db.data[index].website = contato.telefone2

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}