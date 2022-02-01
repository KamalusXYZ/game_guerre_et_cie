class companies {

    constructor(nomCompanie) {

        this.type = this.constructor.name;
        this.nomCompanie = nomCompanie;
        this.nombreGuerrier = 0;
        this.guerriers = []


    }

    sePresenter = () => {

        console.log("La companie" + this.nomCompanie + ", composée de " + this.nombreGuerrier + " guerriers")

    }

    afficherGuerriers = () => {
        console.log("Liste des guerriers: ")
        this.guerriers.forEach(element => {
           console.log(element)
            
        });
    }

    guerrierAppartient = (guerrier) => {

        if (this.guerriers.indexOf(guerrier === -1)) {

            return false
        }
        else { return true}

    }

    ajouterGuerrier = (guerrier) => {

        if (guerrier.isDead() === true  ) return

        this.guerriers.push(guerrier)
        this.nombreGuerrier += 1 

    }

    supprimerGuerrier = (guerrier) => {

        // /incomplet/

        this.nombreGuerrier = this.nombreGuerrier -1


    }
    

}
let companie1 = new companies("Les chacals");


companie1.ajouterGuerrier(
    viking1
);
companie1.ajouterGuerrier(
    chevalier1
);

companie1.sePresenter()
companie1.afficherGuerriers()
companie1.guerrierAppartient("Les chats")







