function valor(){
    fetch('dados.json').then(resposta => resposta.json()).then(banco =>{
       
       var identificador = document.getElementById('valorDigitado').value
       var encontrado = false
       
       banco.forEach(pessoa => {
            if(identificador == pessoa.cpf){
                //JQUERY
                var linkSite = `<a> href=${pessoa.link}">Visite o site</a>`
                document.getElementById('imagem').innerHTML = pessoa.imagem
                document.getElementById('nome').innerHTML = pessoa.nome
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome
                document.getElementById('cidade').innerHTML = pessoa.cidade
                document.getElementById('pais').innerHTML = linkSite
                document.getElementById('link').innerHTML = ""
                document.getElementById('job').innerHTML = pessoa.job
                document.getElementById('casado').innerHTML = pessoa.casado

                encontrado = true 
                console.log(pessoa)

            }
       })
       if(!encontrado){
        document.getElementById("erro").innerHTML = "CPF roubado"
       }
        console.log(identificador)
    })
}