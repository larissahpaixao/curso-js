function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    //Bom dia
    img.src = 'manha2.png'
    document.body.style.background = "#F5E344"
} else if (hora >=12 && hora < 18) {
    //Boa tarde
    img.src = 'tarde2.png'
    document.body.style.background = "#F2661D"
} else {
    //Boa noite
    img.src = 'noite2.png'
    document.body.style.background = "#201BF4"
}
}