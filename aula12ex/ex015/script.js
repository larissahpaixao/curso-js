function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'bebeo.png')
            } else if (idade <13) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'adolescenteo.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 3) {
                //Bebê
                img.setAttribute('src', 'bebea.png')
            } else if (idade <13) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 18) {
                //Adolescente
                img.setAttribute('src', 'adolescentea.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.innerHTML = `Você é ${gênero} e no ano de ${ano} completa ${idade} anos.`
        res.appendChild(img)
        
    }
}