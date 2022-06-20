class Trip {
    constructor(private id: string, private name: string, private imageUrl: string) {

    }
    private _price: number | undefined

    public getId(): string {
        return this.id;
    }
    public setId(newid: string) {
        this.id = newid;
    }
    public getName(): string {
        return this.name;
    }
    public setName(newname: string) {
        this.name = newname;
    }
    public getImage(): string {
        return this.imageUrl;
    }
    public setImage(newimage: string) {
        this.imageUrl = newimage;
    }
    public getPrice(): number | undefined {
        return this._price;
    }
    public setPrice(newprice: number) {
        this._price = newprice;
    }
    /**
     * toString
     */
    public toString(): string {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }
    /**
     *  getDefaultTrip
     */
    public static getDefaultTrip(): Trip {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
