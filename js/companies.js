class companies {

    constructor(nomCompanie, nomGuerriers = [],  nombreGuerrier = nomGuerriers.length) {

        this.type = this.constructor.name;
        this.nomCompanie = nomCompanie;
        this.nombreGuerrier = nombreGuerrier;
        this.nomGuerriers = nomGuerriers
    }

    sePresenter = () => {

        console.log("La companie" + this.nomCompanie + ", composée de " + this.nombreGuerrier + " guerriers")
    }




}


let nouvelleCompanie1 = new companies(" Brebis Galeuse");






nouvelleCompanie1.sePresenter()