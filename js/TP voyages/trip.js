"use strict";
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    getId() {
        return this.id;
    }
    setId(newid) {
        this.id = newid;
    }
    getName() {
        return this.name;
    }
    setName(newname) {
        this.name = newname;
    }
    getImage() {
        return this.imageUrl;
    }
    setImage(newimage) {
        this.imageUrl = newimage;
    }
    getPrice() {
        return this._price;
    }
    setPrice(newprice) {
        this._price = newprice;
    }
    /**
     * toString
     */
    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }
    /**
     *  getDefaultTrip
     */
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
