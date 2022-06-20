class Sejour {
    constructor(private nom: string, private prix: number) {

    }

    public getNom(): string {
        return this.nom
    }
    public getPrix(): number {
        return this.prix
    }
}
class SejourService {
    constructor(private SejourListe: Sejour[]) {
        this.SejourListe.push(new Sejour("Test1", 50))
        this.SejourListe.push(new Sejour("Test2", 70))
    }
    /**
     * SeachByName
     */
    public SeachByName(nom: string): Sejour|null {
        let sejour = this.SejourListe.filter(s => s.getNom() == nom);
        if (sejour.length == 1) { return sejour[0]; }
        return null;
    }
}

var liste = new Array<Sejour>
const Service = new SejourService(liste);
console.log(Service.SeachByName("Test1")) //retourne le premier élément
console.log(Service.SeachByName("Test")) //retourne nullnpm install --save ts-node typescript @types/node @types/request-promise-native@types/jsdom