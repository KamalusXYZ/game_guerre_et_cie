class guerrier {

    constructor(nom, arme = "épée", pv = 100, armure = 5, degats = 10) {

        this.type = this.constructor.name;
        this.nom = nom;
        this.arme = arme;
        this.pv = pv;
        this.armure = armure;
        this.degats = degats;
    }

    sePresenter = () => {

        console.log(`Je suis ${this.nom}, je suis un ${this.type} et je combat avec l'arme: ${this.arme}`)
    }

    isDead = () => {

        if (this.pv <= 0) {
            return true
        } else {
            return false
        }
    }

    attaquer = (cible) => {
        if (cible.constructor.name === 'guerrier' || cible.constructor.name === 'viking' || cible.constructor.name === 'samourai' || cible.constructor.name === 'chevalier')
            console.log(
                `${this.nom} attaque avec une puissance de ${this.degats} , ${cible.nom} possède une armure de protection de ${cible.armure}`
            );

        let degatFinal = this.degats - cible.armure

        if (degatFinal < 0) {
            degatFinal = 0
        }

        cible.pv = cible.pv - degatFinal;

        console.log("PV du defenseur : " + cible.pv)

    }
    static combatUltime(combattant1, combattant2) {
        console.log(
            `${combattant1.nom} attaque ${combattant2.nom}`
        );
        while (combattant1.isDead() === false || combattant2.isDead() === false) {

            combattant1.attaquer(combattant2)
            console.log(combattant2.isDead())
            if (combattant2.isDead() === true) {
                console.log(`victoire de ${combattant1.nom}`)
                return combattant1.nom
            }
            if (combattant1.isDead() === true) {
                console.log(`victoire de ${combattant2.nom}`)
                return combattant2.nom
            }
        }
    }
}

class chevalier extends guerrier {
    constructor(nom) {
        super(nom, "éspadon", 100, 10, 10);

    }
}

class samourai extends guerrier {
    constructor(nom) {
        super(nom, "katana", 100, 10, 20);

    }
}

class viking extends guerrier {
    constructor(nom) {
        super(nom, "hache", 100, 7, 14);

    }
}


let guerrier1 = new guerrier("jean");
let guerrier2 = new guerrier("Paul");
let samourai1 = new samourai("shinichi")
let viking1 = new viking("ragnar")
let chevalier1 = new chevalier("arthas")

// guerrier.combatUltime(chevalier1, viking1)

guerrier1.sePresenter()



