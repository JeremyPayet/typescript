class FreeTrip extends Trip {
    constructor(id: string, name: string, imageUrl: string) {
        super(id, name, imageUrl);
        this.setPrice(0);
    }
    toString() {
        return "Free" + super.toString();
    }
}