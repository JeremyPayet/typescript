"use strict";
class Sejour {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    getNom() {
        return this.nom;
    }
    getPrix() {
        return this.prix;
    }
}
class SejourService {
    constructor(SejourListe) {
        this.SejourListe = SejourListe;
        this.SejourListe.push(new Sejour("Test1", 50));
        this.SejourListe.push(new Sejour("Test2", 70));
    }
    /**
     * SeachByName
     */
    SeachByName(nom) {
        let sejour = this.SejourListe.filter(s => s.getNom() == nom);
        if (sejour.length == 1) {
            return sejour[0];
        }
        return null;
    }
}
var liste = new Array;
const Service = new SejourService(liste);
console.log(Service.SeachByName("Test1")); //retourne le premier élément
console.log(Service.SeachByName("Test")); //retourne nullnpm install --save ts-node typescript @types/node @types/request-promise-native@types/jsdom
