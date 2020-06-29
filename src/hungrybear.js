export class HungryBear {

    constructor(name) {
      this.name = name;
      this.foodLevel = 10;
      this.gameOver = false;
    }
    setHunger() {
      setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten()) {
          this.gameOver = true;
        }
      }, 1000);
    }
    didYouGetEaten() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
    feed() {
      if (!this.gameOver && this.foodLevel > 0) {
        this.foodLevel = 10;
      }
    }
  }