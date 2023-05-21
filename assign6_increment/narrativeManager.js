// this object is to keep track of narrative beats and unlocks

// each "beat" has a test function, a function which unlocks elements, and a report function

const narrativeManager = class {
    constructor(parentObject) {
    this.data = parentObject;
      console.log(parentObject, this.data)
      
    this.beats = [
      {
        triggered: false,
        test: function(data){return true}, 
        report: function(){
          io.appendIntoElement("My world is ending.", "reports");
          //io.writeIntoElement ("Updated Name", "era");
          }
      },
      {
        triggered: false,
        test: function(data){return data.hopes >= 10}, 
        report: function(){
          io.appendIntoElement("The flames creep ever towards me.", "reports");
          //io.writeIntoElement ("Updated Name", "era");
          }
      },
      {
        triggered: false,
        test: function(data){return data.hopes >= 25},
        unlock:function(){$('#prayersRow').show();}, 
        report: function(){
          io.appendIntoElement("There is nothing to do but hope and pray.", "reports");
          }
      },

      {
        triggered: false,
        test: function(data){return data.prayers >= 175}, 
        report: function(){
          io.appendIntoElement("Why do they still pray in times like this?", "reports");
          }
      },

      {
        triggered: false,
        test: function(data){return data.hopes >= 175},  
        report: function(){
          io.appendIntoElement("Their hope is unwarrented.", "reports");
          }
      },

      {
        triggered: false,
        test: function(data){return data.hopes >= 50 || data.prayers > 50}, 
        unlock:function(){$('#panel2').show(); $("#showPanel2").show();},  
        report: function(){io.appendIntoElement("They are begining to build me altars. I do not want them.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.altars >= 1},  
        report: function(){io.appendIntoElement("More prayers flood in every second. What do they want from me?", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.altars >= 2},
        unlock:function(){$('.act').show();},  
        report: function(){io.appendIntoElement("Prophets are speaking on my behalf.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.prophets >= 5},  
        report: function(){io.appendIntoElement("Sometimes, I don't agree with what these 'prophets' say.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.hope >= 500},  
        report: function(){io.appendIntoElement("I thought I wanted to be at final rest, but their hope keeps me going.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.prophets >= 25},  
        report: function(){io.appendIntoElement("When there's so many prophets, some are bound to be right and some to be wrong.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 10},  
        report: function(){io.appendIntoElement("Maybe they're less so prophets, more so leaders. They're trying to save people.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 50},  
        report: function(){io.appendIntoElement("I think the prophets are succeeding.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 100},  
        unlock: function(){$('.qualities').show();},
        report: function(){io.appendIntoElement("I'm begining to feel like myself again.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 500},  
        report: function(){io.appendIntoElement("But who I am now is different than who I was before.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.strength >= .1 || data.knowledge >= .1 || data.benevolence >= .1},
        unlock: function(){$('#miraclesRow').show();},
        report: function(){io.appendIntoElement("I'm almost ready to perform some miracles.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 1000}, 
        unlock:function(){$('#panel3').show(); $("#showPanel3").show();},  
        report: function(){io.appendIntoElement("My world has ended. This is just the dying embers.", "reports");}
      },

      {
        triggered: false,
        test: function(){return clicked >= 1},  
        report: function(){io.appendIntoElement("But this world still has life yet left in it.", "reports");}
      },

      {
        triggered: false,
        test: function(){return clicked >= 15},  
        report: function(){io.appendIntoElement("I start to diminish the fire. It is difficult to tell when they're fully put out.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 5000},  
        report: function(){io.appendIntoElement("Who am I? Just now, I was so sure, but now I am so many more things even those keep changing.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 10000},
        unlock: function(){$('#diminish50').show();},  
        report: function(){io.appendIntoElement("The survivors are starting to help extingish the fire.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 20000}, 
        report: function(){io.appendIntoElement("They have made me a bundle of contradictions.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 35000},
        report: function(){io.appendIntoElement("Every part of me flickers in and out like the flames we are surrounded by.", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 60000},
        report: function(){io.appendIntoElement("We give and take. They exhale, I inhale. I weaken, they strengthen", "reports");}
      },

      {
        triggered: false,
        test: function(data){return data.survivors >= 100000},
        unlock: function(){$('#diminish250').show();},  
        report: function(){io.appendIntoElement("We beat back the fire bit by bit.", "reports");}
      },

      {
        triggered: false,
        test: function(data){
          if(rows>=5){
            data.incrementSelf = .1;
          }
          return rows >= 5
        },  
        report: function(){io.appendIntoElement("As the fire diminishes, my power mounts.", "reports");}
      },

      {
        triggered: false,
        test: function(data){
          if(rows>=10){
            data.incrementSelf = 1;
          }
          return rows >= 10
        },  
        report: function(){io.appendIntoElement("So goes the fire, so comes my power.", "reports");}
      },

      {
        triggered: false,
        test: function(data){
          if(rows>=15){
            data.incrementSelf = 10;
          }
          return rows >= 15
        },  
        report: function(){io.appendIntoElement("My power ebbs and flows as naturally as water.", "reports");}
      },

      {
        triggered: false,
        test: function(){return game_end},
        unlock: function(){$('#end').show(); $('#stage1').hide()},
        report: function(){
          io.appendIntoElement("My world is gone. We have made a different one anew.", "reports");
        }
      }
    ]
    }
    
    setup(){
      $('#prayersRow').hide();
      $(".qualities").hide();

      $("#showPanel2").hide();
      $(".act").hide();
      $("#miraclesRow").hide();

      $("#showPanel3").hide();
      $("#diminish50").hide();
      $('#diminish250').hide();
      $('#end').hide();
      
    }
  
  
  // goes through all narrative events, checks if they activate, runs activation code, and runs code that delivers a message about the story event
    assess(){
      for (let b = 0; b < this.beats.length; b++){
        let beat = this.beats[b]
        if (!beat.triggered){
          if (beat.test(this.data)){
            beat.triggered = true;
            
            if (typeof beat.unlock != 'undefined'){
              console.log(beat.unlock);
              beat.unlock();
            }
    
            beat.report();
            $("#reports").scrollTop($("#reports")[0].scrollHeight);
          }
        }
      }
    }
  
  }