// this object is to keep track of narrative beats and unlocks
// each "beat" has a test function, a function which unlocks elements, and a report function
const narrativeManager = class {
    constructor() {
      this.data = {
        timeElapsed : 0,
        possiblePhases : ["phase0","phase1", "phase2", "phase3", "phase4", "phase5", "phase6", 'phase7', 'phase8', 'phase9', 'phase10'],
        phase : "phase0",
        beats : beats,
        beatsTriggered: [],
        
        intensity: 0.05,

        word: 'LIES',
        startRed: false,

        reloaded: 0,
        old_reloaded: 0,
        change_phase: false
      }

      for (let x in this.data.beats){
        this.data.beatsTriggered.push(false)
      }
      
    }

    // use this function to set up any variables and timers 
    run(){
      this.setAllElementsToCurrentPhase();
      
      self = this;
      this.mainInterval = setInterval(function(){
        self.loop()
        self.save()
        }, 1000)
      
       
    }
  
    // goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
    assess(){
      beats = this.data.beats
      //console.log( this.data.beatsTriggered)
      let beats_triggered = this.data.beatsTriggered;
      for (let b = 0; b < beats.length; b++){
        let beat = beats[b]
        
        if (!beats_triggered[b]){
        //console.log(b)
          if (beat.test(this.data)){
            beat.triggered = true;
            beats_triggered[b] = true;
            beat.unlock(this, this.data);
            beat.report(this, this.data);
          }
        }
      }
    }
    
    setPhase(phase){
      this.data.phase = phase;
      this.setAllElementsToCurrentPhase()
    }
    
    setPhaseOnElement(htmlElement){   
      for (let p = 0; p <this.data.possiblePhases.length; p++) {
        
        htmlElement.classList.remove(this.data.possiblePhases[p]);
      }
      
      htmlElement.classList.add(this.data.phase)
    }
    
    setAllElementsToCurrentPhase(){
      let pageElements = document.getElementsByTagName("*")
        for (let x = 0; x < pageElements.length; x++){
          if (pageElements[x].parentElement !== null)
          {
            if (pageElements[x].parentElement.tagName == "BODY"){
              this.setPhaseOnElement(pageElements[x])
            }
            this.setPhaseOnElement(document.getElementsByTagName("body")[0])
          }
      }
    }
    
    save(){
      console.log("save_attempted")
      window.localStorage.setItem("hauntedData", JSON.stringify(this.data))
    }
    
    canLoad(){
      return window.localStorage.getItem("hauntedData") !== null && window.localStorage.getItem("hauntedData") !== 'null'
    }
    
    load(){
      this.data = JSON.parse(window.localStorage.getItem("hauntedData"))
      this.setAllElementsToCurrentPhase()
    }
    
    reset(){
      this.data = new narrativeManager().data;
      window.localStorage.setItem("hauntedData", null)
    }

    setChangePhaseFalse(){
      this.data.change_phase = false;
    }
    
    loop(){
        this.data.timeElapsed += 1;
        if(this.data.phase == 'phase1'){
          hauntings.bloodyTitle(this.data);
        }

        if(this.data.phase == 'phase2'){
          hauntings.allLies(this.data.intensity, this.data.word)
          if(this.data.startRed){
            hauntings.bloodyTitle(this.data);
            hauntings.bloodRed(this.data.intensity);
          }
        }

        if(this.data.phase == 'phase3'){
          this.data.word = "WHY DO YOU WANT TO READ THESE LIES"
          hauntings.happyFamily(this.data);
        }

        if(this.data.phase == 'phase4' || this.data.phase == 'phase7'){
          hauntings.allLies(this.data.intensity, this.data.word)
          if (this.data.phase == 'phase7'){
            hauntings.changeFont(this.data);
          }
        }

        if(this.data.phase == 'phase5'){
          hauntings.bloodImages();
          this.data.word = 'WE WERE HAPPY'
          hauntings.allLies(this.data.intensity, this.data.word)
        }

        if(this.data.phase == 'phase6'){
          $('#truth').show()
          hauntings.truth();
          hauntings.scrollRandom();
        }

        if(this.data.phase == 'phase8'){
          this.data.word = "THE CHILDREN DID NOT TRICK ME"
          hauntings.happyFamily(this.data);
        }

        if(this.data.phase == 'phase9'){
          $('#truth').show()
          hauntings.truth();
        }

        if(this.data.phase == 'phase10'){
          hauntings.TRUTH();
        }


        this.assess();
    }
  }

manager = new narrativeManager();

window.addEventListener("load", function() {
  //console.log(manager.canLoad())
  if (manager.canLoad()){
    manager.load()
    manager.data.reloaded += 1;
    //console.log("loaded")
  }
  if (manager.data.phase == 'phase3' || manager.data.phase == 'phase5' || manager.data.phase == 'phase6' || manager.data.phase == 'phase7' || manager.data.phase == 'phase8' || manager.data.phase == 'phase9'){
    if(manager.data.reloaded > manager.data.old_reloaded){
      manager.data.change_phase = true
    }
  }
  
  manager.data.beats = beats;
  console.log(manager.data)
 
  manager.run();
  $('#truth').hide()
  if (manager.data.phase == 'phase6' || manager.data.phase == 'phase9'){
    $('#truth').mouseover(hauntings.TRUTH)
  }
  
});