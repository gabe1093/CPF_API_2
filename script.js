function valor() {
    fetch('dados.json')
        .then(resposta => resposta.json())
        .then(banco => {
            var identificador = document.getElementById('valorDigitado').value;
            var encontrado = false;

            banco.forEach(pessoa => {
                if (identificador == pessoa.cpf) {
                    // corrige link
                    var linkSite = `<a href="${pessoa.link}" target="_blank">Visite o site</a>`;

                    // mostra imagem corretamente
                    document.getElementById('imagem').innerHTML = `<img src="${pessoa.imagem}" alt="${pessoa.nome}" width="200">`;

                    // demais campos
                    document.getElementById('nome').innerHTML = pessoa.nome;
                    document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                    document.getElementById('cidade').innerHTML = pessoa.cidade;
                    document.getElementById('pais').innerHTML = pessoa.pais;
                    document.getElementById('link').innerHTML = linkSite;
                    document.getElementById('job').innerHTML = pessoa.job ?? '';
                    document.getElementById('casado').innerHTML = pessoa.casado ?? '';

                    encontrado = true;
                    console.log(pessoa);
                }
            });

            if (!encontrado) {
                document.getElementById("erro").innerHTML = "CPF não encontrado!";
            }

            console.log(identificador);
        });
}