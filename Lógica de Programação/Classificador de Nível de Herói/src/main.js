let numeroDeHerois = 3
let nomeHeroi = ['Rogério', 'Cleber', 'Tomas']
let xpHeroi = [8438, 2133, 9532]
let nivelHeroi = ['Ferro', 'Ferro', 'Ferro']

for (let i = 0; i < numeroDeHerois; i++) {
    if (xpHeroi[i] <= 1000) {
        nivelHeroi[i] = 'Ferro'  
    } else if (xpHeroi[i] >= 1001 && xpHeroi[i] <= 2000) {
        nivelHeroi[i] = 'Bronze'
    } else if (xpHeroi[i] >= 2001 && xpHeroi[i] <= 5000) {
        nivelHeroi[i] = 'Prata'
    } else if (xpHeroi[i] >= 5001 && xpHeroi[i] <= 7000) {
        nivelHeroi[i] = 'Ouro'
    } else if (xpHeroi[i] >= 7001 && xpHeroi[i] <= 8000) {
        nivelHeroi[i] = 'Platina'
    } else if (xpHeroi[i] >= 8001 && xpHeroi[i] <= 9000) {
        nivelHeroi[i] = 'Ascendente'
    } else if (xpHeroi[i] >= 9001 && xpHeroi[i] <= 10000) {
        nivelHeroi[i] = 'Imortal'
    } else {
        nivelHeroi[i] = 'Radiante'
    }    
}

for (let i = 0; i < numeroDeHerois; i++) {
    console.log(`O Herói de nome ${nomeHeroi[i]} está no nível de ${nivelHeroi[i]}`)
}
