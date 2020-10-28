class Time {
    constructor(setTime = 30, startButton, pauseButton, callbacks) {
      this.setTime = setTime;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      if(callbacks){
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete
      }
  
      this.startButton.addEventListener("click", this.start);
      this.pauseButton.addEventListener("click", this.pause);
    }
  
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining)
        }
      this.tick();
      this.timeInterval = setInterval(this.tick, 50);
    };
  
    pause = () => {
      clearInterval(this.timeInterval);
    };
  
    tick = () => {
      if (this.timeRemaining <= 0) {
        this.pause();
        if(this.onComplete){
            this.onComplete()
        }
      } else {
        this.timeRemaining = this.timeRemaining - 0.05;
        if(this.onTick){
            this.onTick(this.timeRemaining)
        }
      }
    };
    get timeRemaining() {
      return this.setTime.value;
    }
    set timeRemaining(time) {
      this.setTime.value = time.toFixed(2);
    }
  }