// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        this._diameter = this.radius * 2
        return this._diameter
    }

    get area() {
        this._area = (this.radius * this.radius) * Math.PI
        return this._area
    }
    
    get circumference() {
        this._circumference = Math.PI * this.diameter
        return this._circumference
    }

    set circumference(newCirc) {
        this.radius = (newCirc / Math.PI) / 2
    }
    
    set diameter(newDiam) {
        this.radius = newDiam / 2
    }
}