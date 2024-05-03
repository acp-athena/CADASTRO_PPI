import express from 'express';
import path from 'path';

const porta = 3000;

var listaFilmes = [];

const app = express();
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/cadastro', (req,resp)=>{
    const nome = req.query.nome;
    const genero = req.query.genero;
    const data = req.query.data;
    const nota = req.query.nota;

    listaFilmes.push({
        nome: nome,
        genero: genero,
        data: data,
        nota: nota,
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Cadastro retorno</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div>')
    resp.write(`<h1>Filme ${nome} cadastrado com sucesso!</h1>`);
    resp.write('<button class="opcao"><a href="/cadastro.html">Cadastrar filme</a></button>');
    resp.write("<br/>");
    resp.write('<button class="opcao"><a href="/listarFilmes">Listar filmes cadastrados</a></button>');
    resp.write('</div>')
    resp.write("</body>");
    resp.write('</html>')
    resp.end();
});

app.use('/listarFilmes', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista filmes</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Filmes</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Genero</th>');
    resp.write('<th>Data</th>');
    resp.write('<th>Nota</th>');
    resp.write('</tr>');
    for (let i=0; i<listaFilmes.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listaFilmes[i].nome}`);
        resp.write(`<td>${listaFilmes[i].genero}`);
        resp.write(`<td>${listaFilmes[i].data}`);
        resp.write(`<td>${listaFilmes[i].nota}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>')
    resp.write('</html>');
    resp.end();
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta http://localhost:${porta}`);
})