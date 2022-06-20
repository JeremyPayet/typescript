"use strict";
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.setPrice(0);
    }
    toString() {
        return "Free" + super.toString();
    }
}
