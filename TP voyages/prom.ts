import jsdom from 'jsdom';
import request from 'request-promise-native';

export const parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
parisTrip.setPrice(100);
console.log(parisTrip);
console.log(parisTrip.getName);
console.log(parisTrip.toString());
export const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());
export const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip.toString());
