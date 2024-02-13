class Player {
    constructor(victories, defeats) {
        this.victories = victories
        this.defeats = defeats
        this.level
    }
}

function winBalance(victories, defeats) {
    return victories - defeats
}

function calculateLeval(victories) {
    if (victories <= 10) {
        return 'Ferro'
    } else if (victories >= 11 && victories <= 20) {
        return 'Bronze'
    } else if (victories >= 21 && victories <= 50) {
        return 'Prata'
    } else if (victories >= 51 && victories <= 80) {
        return 'Ouro'
    } else if (victories >= 81 && victories <= 90) {
        return 'Diamante'
    } else if (victories >= 91 && victories <= 100) {
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}

function message(player) {
    return `O Herói tem saldo de ${winBalance(player.victories, player.defeats)} está no nível de ${calculateLeval(player.victories)}`
}

const player1 = new Player(10, 10)
const player2 = new Player(11, 10)
const player3 = new Player(21, 10)
const player4 = new Player(50, 10)
const player5 = new Player(51, 10)
const player6 = new Player(80, 10)
const player7 = new Player(81, 10)
const player8 = new Player(90, 10)
const player9 = new Player(91, 10)
const player10 = new Player(100, 10)
const player11 = new Player(101, 10)
const player12 = new Player(20, 10)

const players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12]

players.forEach(player => {
    console.log(message(player))
});
