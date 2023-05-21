const GameInstance = class {
    constructor() {
      this.narrativeManager = new narrativeManager(this)
      
      this.stages = ["stage1"];
      this.currentStage = "stage1"; 
      this.panels = {
        "stage1": ["panel1", "panel2", "panel3"]
      }
      this.currentPanel = "panel1";
      this.reports = $('#reports');

      this.hopes = 0;
      this.prayers = 0;

      this.altars = 0;
      this.altarsCost = 100;

      this.strength = 0;
      this.knowledge = 0;
      this.benevolence = 0;
      this.incrementSelf = .01;
      

      this.prophets = 0;
      this.prophetsCost = 250;

      this.miracles = 0;
      this.miracleCost = .1;
      this.incrementMiracle = .1;

      this.survivors = 0;

      this.clicked = 0;
      this.multipliedClicks = 0;
    }
    
    
  
    
    // the following functions are to be called from buttons in the index.html
    gainhopes(){ this.hopes +=1*rows; this.updateDisplay();}
    gainprayers(){ this.prayers +=1; this.updateDisplay();}
    gainaltars(){ 
      if(this.prayers >= this.altarsCost && this.hopes >= this.altarsCost){
        this.altars +=1;
        this.prayers -= this.altarsCost;
        this.hopes -= this.altarsCost;
        this.altarsCost += 50;
        this.updateDisplay();
      }else{
        this.reports.append("<br>You don't have enough hopes or prayers.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
    }

    gainstrength(){
      if(this.hopes >= 500 && this.prayers >= 500){
        this.strength += this.incrementSelf;
        this.strength = Math.round(this.strength * 100) / 100;
        if(this.strength >= 100){
          this.strength = 100;
          this.reports.append("<br>You have regained all your strength at the moment.");
          this.reports.scrollTop($("#reports")[0].scrollHeight);
        } else {
          this.hopes -= 500;
          this.prayers -= 500;
        }
      } else {
        this.reports.append("<br>You don't have enough hopes or prayers.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
      
      this.updateDisplay();
    }

    gainknowledge(){
      if(this.hopes >= 500 && this.prayers >= 500){
        this.knowledge += this.incrementSelf;
        this.knowledge = Math.round(this.knowledge * 100) / 100;
        if(this.knowledge >= 100){
          this.knowledge = 100;
          this.reports.append("<br>You have regained all your knowledge at the moment.");
          this.reports.scrollTop($("#reports")[0].scrollHeight);
        } else {
          this.hopes -= 500;
          this.prayers -= 500;
        }
      } else {
        this.reports.append("<br>You don't have enough hopes or prayers.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
      
      this.updateDisplay();

    }

    gainbenevolence(){
      if(this.hopes >= 500 && this.prayers >= 500){
        this.benevolence += this.incrementSelf;
        this.benevolence = Math.round(this.benevolence * 100) / 100;
        if(this.benevolence >= 100){
          this.benevolence = 100;
          this.reports.append("<br>You have regained all your benevolence at the moment.");
          this.reports.scrollTop($("#reports")[0].scrollHeight);
        } else {
          this.hopes -= 500;
          this.prayers -= 500;
        }
      } else{
        this.reports.append("<br>You don't have enough hopes or prayers.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
      
      this.updateDisplay();
    }

    gainprophets(){
      if(this.prayers >= this.prophetsCost && this.hopes >= this.prophetsCost){
        this.prophets +=1;
        this.prayers -= this.prophetsCost;
        this.hopes -= this.prophetsCost;
        this.prophetsCost += 100;
        this.updateDisplay();
      }else{
        this.reports.append("<br>You don't have enough hopes or prayers.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
    }
    
    gainmiracles(){
      if(this.strength >= this.miracleCost && this.knowledge >= this.miracleCost && this.benevolence >= this.miracleCost){
        this.miracles += 1;
        this.strength -= this.miracleCost;
        this.knowledge -= this.miracleCost;
        this.benevolence -= this.miracleCost;

        this.miracleCost += this.incrementMiracle;
        this.miracleCost = Math.round(this.miracleCost * 100) / 100;
        if(this.miracleCost>= 100){
          this.miracleCost = 100;
        }

        let savedPeople = Math.floor(Math.random()*500*this.miracles)
        this.gainsurvivors(savedPeople)
        if (savedPeople > 0){
          //TODO:ADD RANDOM DESCRIPTION HERE
          this.reports.append("<br>You saved " + savedPeople + "people.")
          this.reports.scrollTop($("#reports")[0].scrollHeight);
        } 
      }else{
        this.reports.append("<br>You don't have enough strength or knowledge or benevolence.");
        this.reports.scrollTop($("#reports")[0].scrollHeight);
      }
      this.updateDisplay();
    }
      
    gainsurvivors(num){
      this.survivors += num;
    }
    
    runaltarsWork(){
      this.prayers += this.altars;
    }

    runprophetsWork(){
      this.hopes += this.prophets;
      let savedPeople = Math.floor(Math.random()*this.prophets)
      
      //console.log(savedPeople);
      if (savedPeople > 0){
        //TODO:ADD RANDOM DESCRIPTION HERE
        if (Math.floor(Math.random() * 10) >= 8){
          this.gainsurvivors(savedPeople);
        }
        
      } 
    }
    
    updateDisplay(){
      io.writeValueIntoClass(this.hopes, 'hopesNumber')
      io.writeValueIntoClass(this.prayers, "prayersNumber")
      io.writeValueIntoClass(this.altars, "altarsNumber")
      io.writeValueIntoClass(this.altarsCost, "altarCost")

      io.writeValueIntoClass(this.strength, 'strengthNumber')
      io.writeValueIntoClass(this.knowledge, "knowledgeNumber")
      io.writeValueIntoClass(this.benevolence, "benevolenceNumber")
      io.writeValueIntoClass(this.incrementSelf, 'incrementSelf')

      io.writeValueIntoClass(this.prophets, 'prophetsNumber')
      io.writeValueIntoClass(this.prophetsCost, 'prophetCost')

      io.writeValueIntoClass(this.miracles, "miraclesNumber")
      io.writeValueIntoClass(this.miracleCost, 'miracleCost')

      io.writeValueIntoClass(this.survivors, "survivorsNumber")
      io.writeValueIntoClass(this.resource9, 'resource9Number')
      
    }
    
  };
  
  game = {};
  // this function forom JQuery waits until the web page is fully loaded before triggering the start of the game
  $( document ).ready(function() {
    game = new GameInstance();
    game.narrativeManager.setup();
    console.log(game.narrativeManager.beats.length)
    
    io.showStage(game); 
    game.updateDisplay()

    startRecording(game);
    
  
    // Run the Loop
    gameTimer = setInterval(function(){
      game.runaltarsWork();
      game.runprophetsWork();
      game.clicked = clicked;
      game.multipliedClicks = multipliedClicks;
      game.narrativeManager.assess();
      game.updateDisplay()
  }, 500);
    
  
  })