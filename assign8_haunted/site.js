// this object is to keep track of narrative beats and unlocks
// each "beat" has a test function, a function which unlocks elements, and a report function
const narrativeManager = class {
    constructor() {
      this.data = {
        timeElapsed : 0,
        possiblePhases : ["phase0","phase1", "phase2", "phase3", "phase4", "phase5", "phase6", 'phase7', 'phase8', 'phase9', 'phase10', 'phase11', 'phase12'],
        phase : "phase0",
        beats : beats,
        beatsTriggered: [],
        
        intensity: 0.05,

        word: 'LIES',
        startRed: false,

        reloaded: 0,
        old_reloaded: 0,
        change_phase: false,
        scramble: false,
        truth: false,
        trail: false,
        taunt: false,

        pages_visited: []
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

    addVisited(visit){
      this.data.pages_visited.push(visit);
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
          this.data.word = "WHY DO YOU WANT TO READ THESE LIES";
          hauntings.happyFamily(this.data);
          this.data.word = "<a href='lies.html'>LIES</a>"
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
          hauntings.wordScramble('span', this.data.intensity)
          $('#truth').show()
          hauntings.truth();
        }

        if(this.data.phase == 'phase10'){
          hauntings.TRUTH();
        }

        if(this.data.phase == 'phase12'){
          if(document.title == "LIES"){
            setInterval(function(){
              hauntings.truth();
              hauntings.lies();
            }, Math.random() * 500)
          }
        }

        if(this.data.pages_visited.includes('LIES') ){
          if(document.title === 'TRUTH'){
            if(this.data.pages_visited.includes('HUNGRY')){
              $('body').addClass('black white-text');
            }
          }else{
            $('body').addClass('black white-text');
          }
          
        }

        if(this.data.phase == 'phase12'){
          $('#lies').show();
          hauntings.lies();
        }

        if(this.data.scramble && document.title === 'Hansel and Gretel'){
          hauntings.wordScramble('span', this.data.intensity);
        }

        if(this.data.truth && document.title === 'Hansel and Gretel'){
          $('#truth').show();
          hauntings.truth();
          $('#lies').show();
          hauntings.lies();
        }

        if(this.data.trail && document.title === 'TRUTH'){
          $('#trail').show()
        }

        if(this.data.taunt && document.title === 'TRUTH'){
          $('#taunt').show()
        }

        if(this.data.pages_visited.includes('TRAIL') && document.title === 'Hansel and Gretel'){
          hauntings.bloodyTitle(this.data);
          hauntings.bloodRed(this.data.intensity);
        }

        if(this.data.pages_visited.includes('TAUNT') && document.title === 'Hansel and Gretel'){
          hauntings.bloodImages();
          hauntings.changeFont(this.data);
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
  if (manager.data.phase == 'phase3' || manager.data.phase == 'phase5' || manager.data.phase == 'phase6' || manager.data.phase == 'phase7' || manager.data.phase == 'phase8' || manager.data.phase == 'phase9' || manager.data.phase == 'phase10'){
    if(manager.data.reloaded > manager.data.old_reloaded){
      manager.data.change_phase = true
    }
  }
  
  manager.data.beats = beats;
  console.log(manager.data)
 
  manager.run();
  $('#truth').hide();
  $('#lies').hide();
  $('#trail').hide();
  $('#taunt').hide();
});