class Hero {
    constructor (name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack () {
        let attack
        switch (this.type) {
            case HeroClass.Mago:
                attack = 'magia'
                break;
            case HeroClass.Guerreiro:
                attack = 'espada'
                break;
            case HeroClass.Monge:
                attack = 'artes marciais'
                break;
            case HeroClass.Ninja:
                attack = 'shuriken'
                break;
            default:
                break;
        }

        return `O ${this.type} atacou usando ${attack}`
    }
}

const HeroClass = {
    Mago: 'mago',
    Guerreiro: 'guerreiro',
    Monge: 'monge',
    Ninja: 'ninja'
};

const mago = new Hero('Mago', 90, HeroClass.Mago);
const guerreiro = new Hero('Guerreiro', 38, HeroClass.Guerreiro);
const monge = new Hero('Monge', 130, HeroClass.Monge);
const ninja = new Hero('Ninja', 24, HeroClass.Ninja);

const heroes = [mago, guerreiro, monge, ninja]

heroes.forEach(hero => {
    console.log(hero.attack());
});