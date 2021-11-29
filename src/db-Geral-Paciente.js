// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    paciente: [{
            "id": 1,
            "imagem": './img/p-01.jpg',
            "nome": "Fernanda Ferreira",
            "cpf": "000.000.004-45",
            "cidade": "Rio de Janeiro",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Janeiro",
            "status": "Agendados"
        },
        {
            "id": 2,
            "imagem": './img/p-02.jpg',
            "nome": "Marcos Daniel",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Janeiro",
            "status": "Agendados"
        },
        {
            "id": 3,
            "imagem": './img/p-03.jpg',
            "nome": "José Henrique",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Março",
            "status": "Agendados"
        },
        {
            "id": 4,
            "imagem": './img/p-04.jpg',
            "nome": "Maria da Silvia",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Junho",
            "status": "Agendados"
        },
        {
            "id": 5,
            "imagem": './img/p-05.jpg',
            "nome": "Bruno Oliveira",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Agendados"
        },
        {
            "id": 6,
            "imagem": './img/p-06.jpg',
            "nome": "Rodrigo Costa",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
            "status": "Agendados"
        },
        {
            "id": 7,
            "imagem": './img/p-07.jpg',
            "nome": "Bruno Oliveira",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Agendados"
        },
        {
            "id": 8,
            "imagem": './img/p-08.jpg',
            "nome": "Marie P. Irizarry",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
            "status": "Cancelado"
        },
        {
            "id": 9,
            "imagem": './img/p-09.jpg',
            "nome": "Breno Alves Castro",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Janeiro",
            "status": "Cancelado"
        },
        {
            "id": 10,
            "imagem": './img/p-10.jpg',
            "nome": "Ryan Barros Rocha",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Março",
            "status": "Cancelado"
        },
        {
            "id": 11,
            "imagem": './img/p-11.jpg',
            "nome": "Douglas Goncalves",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Junho",
            "status": "Cancelado"
        },
        {
            "id": 12,
            "imagem": './img/p-12.jpg',
            "nome": "Erick Cardoso",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Cancelado"
        },
        {
            "id": 13,
            "imagem": './img/p-13.jpg',
            "nome": "José Fernandes Barros",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
            "status": "Concluído"
        },
        {
            "id": 14,
            "imagem": './img/p-14.jpg',
            "nome": "Lucas Cardoso Costa",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Concluído"
        },
        {
            "id": 15,
            "imagem": './img/p-15.jpg',
            "nome": "José Alves Souza",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
            "status": "Concluído"
        },
        {
            "id": 16,
            "imagem": './img/p-16.jpg',
            "nome": "Kauan Ribeiro",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Janeiro",
            "status": "Concluído"
        },
        {
            "id": 17,
            "imagem": './img/p-17.jpg',
            "nome": "Morris V. Parker",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Março",
            "status": "Concluído"
        },
        {
            "id": 18,
            "imagem": './img/p-18.jpg',
            "nome": "Sofia Sousa Azevedo",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Junho",
            "status": "Concluído"
        },
        {
            "id": 19,
            "imagem": './img/p-19.jpg',
            "nome": "Alyssa R. Cervantez",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Concluído"
        },
        {
            "id": 20,
            "imagem": './img/p-20.jpg',
            "nome": "Sarah J. Bolton",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Dezembro",
            "status": "Concluído"
        },
        {
            "id": 21,
            "imagem": './img/p-21.jpg',
            "nome": "Danielle J. Kieffer",
            "cpf": "000.000.004-45",
            "cidade": "Belo Horizonte",
            "convenio": "unimed",
            "email": "sergio-med@gmail.biz",
            "telefone": "3974-5847",
            "telefone2": "3974-5874",
            "mes": "Abril",
            "status": "Concluído"
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
    if (db.paciente.length != 0)
        novoId = db.paciente[db.paciente.length - 1].id + 1;
    let novoContato = {


        "id": novoId,
        "nome": contato.nome,
        "cpf": contato.cpf,
        "cidade": contato.cidade,
        "convenio": contato.convenio,
        "email": contato.email,
        "telefone": contato.telefone,
        "telefone2": contato.telefone2,
        "status": contato.status

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
        db.paciente[index].cpf = contato.cpf,
        db.paciente[index].cidade = contato.cidade,
        db.paciente[index].convenio = contato.convenio,
        db.paciente[index].email = contato.email,
        db.paciente[index].telefone = contato.telefone,
        db.paciente[index].telefone2 = contato.telefone2,
        db.paciente[index].status = contato.status

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {
    // Filtra o array removendo o elemento com o id passado
    db.paciente = db.paciente.filter(function (element) {
        return element.id != id
    });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}