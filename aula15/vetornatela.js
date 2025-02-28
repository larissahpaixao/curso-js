var valores = [8, 1 , 4, 7, 2, 9]

/* for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
} */

    
    for (var pos in valores) {
    console.log(valores[pos])
}

var posi = valores.indexOf(7)
console.log(`O valor 7 está na posição ${posi}`)