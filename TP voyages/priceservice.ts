import * as values from "./prom";

class PriceService {
    constructor(private map: Map<string, number|undefined>) {
        // TODO Map of 2 trips
        // 'paris' --> price == 100
        // 'rio-de-janeiro' --> price == 800)
        // no price for 'nantes'
        values.defaultTrip.setPrice(800)
        this.map.set(values.parisTrip.getId(), values.parisTrip.getPrice())
        this.map.set(values.defaultTrip.getId(), values.defaultTrip.getPrice())
        this.map.set(values.freeTrip.getId(), undefined)
    }
    findPriceByTripId(tripId:string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (this.map.has(tripId) && this.map.get(tripId)!== undefined) {
                    resolve(this.map.get(tripId));
                    // en cas de succès
                }
                else {
                    reject(`No price found for id ${tripId}`);
                    // en cas d'erreur
                }
            }, 2000)
        });
    }
}