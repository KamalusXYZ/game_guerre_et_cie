class companies {

    constructor(nomCompanie, nomGuerriers = [], nombreGuerrier = nomGuerriers.length) {

        this.type = this.constructor.name;
        this.nomCompanie = nomCompanie;
        this.nombreGuerrier = nombreGuerrier;
        this.nomGuerriers = nomGuerriers
    }

    sePresenter = () => {

        console.log("La companie" + this.nomCompanie + ", composée de " + this.nombreGuerrier + " guerriers")
    }

    afficherGuerriers = () => {

        console.log("Liste des guerriers " + this.nomGuerriers)
    }

    guerrierAppartient = (varCompanie) => {

        if (varCompanie === this.nomCompanie) {
            varCompanie = true
            console.log(true)
            return


        } else {
            varCompanie = false
            console.log(false)
            return
        }

    }



    // setnomGuerriers = (guerrier) => {
    //     this.nomGuerriers = guerrier;
        



    //     console.log(guerrier)
        

    // }
    // setnomGuerriers = (guerrier) => {
        
    //     this.nomGuerriers = [guerrier];
        



        
    //     console.log([guerrier])
        

    // }
    setnomGuerriers = (guerrier) => {
     
        this.nomGuerriers = companies1.guerrier;



        console.log({guerrier})

    }

}
let companie1 = new companies("Les chacals");


companie1.setnomGuerriers(
    viking1
);

companie1.sePresenter()
companie1.afficherGuerriers()
companie1.guerrierAppartient("Les chats")






// console.log(companie1)