// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength,
        this.attack()
    }

    attack() {
        return this.strength
    }
    
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return 'Odin Owns You All!'
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health -= damage

    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
    } else if (this.health <= 0) {
        return `A Saxon has died in combat`
    }
}
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

    addViking(viking) {
    this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
    this.saxonArmy.push(saxon)
    }

    vikingAttack() {
    /* 
    1º: preciso criar um número randomico (0-length da array) pra ser o número do index
    o mesmo pro viking e pro saxon
    2º: pegar o saxon e pegar a função de receive damage e dentro dessa função o viking chama o de ataque
    3º: depois fazer if pra descobrir quem ficou vivo ou não,
    4º: depois tirar quem estiver menos de 0 da array
    */

    let iRandomViking = Math.floor(Math.random() * this.vikingArmy.length) //nesse caso é melhor usar o Math.floor porque tá falando de um INDEX
    let iRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    let viking = this.vikingArmy[iRandomViking]
    let saxon = this.saxonArmy[iRandomSaxon]

    let result = saxon.receiveDamage(viking.attack())

    if (saxon.health <= 0) {
        this.saxonArmy.splice(iRandomSaxon, 1)
    }


    return result
    }

    saxonAttack() {
        let iRandomViking = Math.floor(Math.random() * this.vikingArmy.length) //nesse caso é melhor usar o Math.floor porque tá falando de um INDEX
        let iRandomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    
        let viking = this.vikingArmy[iRandomViking]
        let saxon = this.saxonArmy[iRandomSaxon]
    
        let result = viking.receiveDamage(saxon.attack())
    
        if (viking.health <= 0) {
            this.vikingArmy.splice(iRandomViking, 1)
        }
    
        return result
    }

    showStatus(){
        if (!this.saxonArmy.length) {
            return 'Vikings have won the war of the century!'
        }
        if (!this.vikingArmy.length) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }

}
