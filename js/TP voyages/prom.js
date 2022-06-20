"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freeTrip = exports.defaultTrip = exports.parisTrip = void 0;
exports.parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
exports.parisTrip.setPrice(100);
console.log(exports.parisTrip);
console.log(exports.parisTrip.getName);
console.log(exports.parisTrip.toString());
exports.defaultTrip = Trip.getDefaultTrip();
console.log(exports.defaultTrip.toString());
exports.freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(exports.freeTrip.toString());
