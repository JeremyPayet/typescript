import * as values from "./prom";

class TripService {
    constructor(private set:Set<Trip>) {
        // TODO Set of 3 trips
        this.set = new Set();
        this.set.add(values.parisTrip);
        this.set.add(values.defaultTrip);
        this.set.add(values.freeTrip);

    } findByName(tripName:string){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                var result = false;
                this.set.forEach(trip => {
                    if (trip.getName() == tripName) {
                        resolve(trip);
                        // en cas de succès
                    }
                })
                if (!result) {
                    reject(`No trip with name ${tripName}`);
                }
            }, 2000)
        });
    }
}