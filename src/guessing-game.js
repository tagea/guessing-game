class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.middle = 0;
    }

    setMiddle() {
        this.middle = Math.round((this.min + this.max) / 2); 
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }

    guess() {
        this.mid = this.setMiddle();
        return this.middle;
    }
}
module.exports = GuessingGame;
