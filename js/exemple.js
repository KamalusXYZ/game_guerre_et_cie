class Livre {
    constructor(nom, nombreDePages, catégorie) {
      this.nom = nom;
      this.nombreDePages = nombreDePages;
      this.catégorie = catégorie;
    }
  
    getNom = () => {
      return this.nom;
    };
  
    setNom = (nom) => {
      this.nom = nom;
    };
  
    afficherNombreDePages = () => {
      console.log(`Le livre possède ${this.nombreDePages} pages`);
    };
  
    présenterLeLivre = () => {
      console.log(
        `Le livre s'intitule ${this.nom}, c'est un livre ${this.catégorie} et il possède ${this.nombreDePages} pages`
      );
    };
  
    static comparerLeNombreDePages(livre1, livre2) {
      console.log(
        `${livre1.nom} possède ${livre1.nombreDePages}, et ${livre2.nom} possède ${livre2.nombreDePages}`
      );
      if (livre1.nombreDePages > livre2.nombreDePages) {
        console.log(`Le livre le plus gros est ${livre1.nom}.`);
      } else console.log(`Le livre le plus gros est ${livre2.nom}.`);
    }
  }
  
  let livre1 = new Livre('Le trone de fer', 800, 'Fantastique');
  let livre2 = new Livre('Le trone de fer pt2', 1299, 'Fantastique');
  
  Livre.comparerLeNombreDePages(livre1, livre2);
  
  class Nouvelle extends Livre {
    constructor(nom, catégorie, auteur, datePublication, texte) {
      super(nom, -1, catégorie);
  
      this.auteur = auteur;
      this.datePublication = datePublication;
      this.texte = texte;
    }
  
    lireTexte = () => {
      let indice = 0;
      let interval = setInterval(() => {
        document.body.innerHTML += this.texte[indice];
        indice++;
        if (indice === this.texte.length - 1) clearInterval(interval);
      }, 100);
    };
  }
  
  let nouvelle = new Nouvelle(
    'Lorem',
    'lambda',
    'ipsum',
    '31/01/2022',
    'lorem ipsum dolor sit amet ngkreomnzgkzernkgmrnezkglmnreklm....'
  );
  
  nouvelle.lireTexte();