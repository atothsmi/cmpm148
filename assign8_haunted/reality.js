// store your narrative beats and functions here narrativeBeasts =   
beats = [
  {
    triggered: false,
    test: function(data){return data.timeElapsed > 20}, 
    unlock: function(manager, data){
      manager.setPhase("phase1");},  
    report: function(){return}
  },
    {
      triggered: false,
      test: function(data){return data.timeElapsed > 45}, 
      unlock: function(manager, data){
        manager.setPhase("phase2");
        data.intensity += .05},  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){return data.timeElapsed > 60}, 
      unlock: function(manager, data){
        data.intensity += .05
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){return data.timeElapsed > 75}, 
      unlock: function(manager, data){
        data.intensity += .05
        data.startRed = true;
      },
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){return data.timeElapsed > 100}, 
      unlock: function(manager, data){
        data.intensity += .1},
      report: function(){return}
    },
    
    {
      triggered: false,
      test: function(data){        return data.timeElapsed >   120}, 
      unlock: function(manager, data){      manager.setPhase("phase3")},  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){return data.change_phase}, 
      unlock: function(manager, data){
        manager.setPhase("phase4");
        manager.setChangePhaseFalse();
      
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return document.title === 'LIES'}, 
      unlock: function(manager, data){
        manager.addVisited('LIES');
        manager.setPhase("phase5")},  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase5'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase6");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase6'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase7");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase7'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase8");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase8'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase9");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase9'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase10");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.change_phase && data.phase == 'phase10'}, 
      unlock: function(manager, data){      
        manager.setPhase("phase11");
        manager.setChangePhaseFalse();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return document.title === "HUNGER"}, 
      unlock: function(manager, data){   
        data.pages_visited.push('HUNGER');
        manager.setPhase("phase12");
        hauntings.wordScramble();
      },  
      report: function(){return}
    },
    
    {
      triggered: false,
      test: function(data){        return document.title === "Hansel and Gretel" && data.phase == 'phase12'}, 
      unlock: function(manager, data){
        hauntings.hungerLink();
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.pages_visited.includes('TRUTH')}, 
      unlock: function(manager, data){
        data.scramble = true;
        data.truth = true;
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){    return document.title === "TRUTH"}, 
      unlock: function(manager, data){
        data.pages_visited.push('TRUTH');
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.pages_visited.includes('HUNGER')}, 
      unlock: function(manager, data){
        data.taunt = true;
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return document.title === "TAUNT"}, 
      unlock: function(manager, data){
        data.pages_visited.push('TAUNT');
      },  
      report: function(){return}
    },

    {
      triggered: false,
      test: function(data){        return data.pages_visited.includes('TAUNT')}, 
      unlock: function(manager, data){
        data.trail = true;
      },  
      report: function(){return}
    },
    {
      triggered: false,
      test: function(data){        return document.title === "TRAIL"}, 
      unlock: function(manager, data){
        data.pages_visited.push('TRAIL');
      },  
      report: function(){return}
    },

    ]

    const hauntings = class {

      static allLies(intensity, word){
        var spans = $('.span');
        for (let i = 0; i < spans.length; i++){
          let split_sentences = spans[i].innerHTML.split(' \n')
          if(Math.random() < intensity){

            for (let j in split_sentences){
              let split_words = split_sentences[j].trim().split(" ")
              if(Math.random() < intensity){
                for (let k in split_words){
                  if(Math.random() < intensity){
                    split_words[k] = word;
                  }
                }
                
              }
              var new_sentence = split_words.join(' ')
              split_sentences[j] = new_sentence;
            }
          }
          spans[i].innerHTML = split_sentences.join(" ")
        }
      }

      static bloodRed(intensity){
        for (let i = 0; i<= 32; i++){
          if(Math.random() < intensity){
            let id = '#s' + i.toString();
            $(id).addClass('red-text');
          }
        }
      }

      static happyFamily(data){
        let body = $('body');
        let body_html = body.html();
        let message = "<div class='nosifer red-text'>" +  data.word + "</div>"
        body.removeClass('medium-right-margin medium-left-margin').addClass('no-margins center-text huge-text black');
          if (body_html == origin_body){
            body.html(message);
          }
          setInterval(function(){
            if (body_html == ''){
              body.html(message)
            } else {
              body.html('');
            }
          }, Math.random() * 5)
        data.reloaded = 0;
      }   

      static bloodyTitle(data){
        let title = $('#title');
        title.removeClass('nosifer red-text')
        setTimeout(() => {
          if (!(title.attr('class').includes('nosifer'))){
            title.addClass('nosifer red-text')
            window.scrollTo(0, 0);
        } else {
          title.removeClass('nosifer red-text')
        }
        }, Math.random() * 30000);
        

      }

      static bloodImages(){
        let body = $('body')
        if(!(body.attr('class').includes('red'))){
          body.addClass('red');
        }
        setInterval(() => {
          if (!(body.attr('class').includes('bkgd'))){
            body.addClass('bkgd')
        } else {
          body.removeClass('bkgd')
        }
        }, Math.random() * 3000);
      }

      static changeFont(data){
        for (let i = 0; i<= 32; i++){
          if(Math.random() < data.intensity){
            let id = '#s' + i.toString();
            let ran_num = Math.floor(Math.random() * 3)
            if (ran_num <= 0){
              $(id).addClass('small-text');
            } else if (ran_num == 1) {
              $(id).addClass('medium-text');
            } else {
              $(id).addClass('large-text');
            }

          }
        }
      }

      static scrollRandom(){
        let scrollHeight = document.getElementById('b1').scrollHeight;
        setTimeout(() => {
          window.scrollTo(0, Math.random() * scrollHeight);
        }, Math.random() * 1000);
        
      }

      static truth(){
        let ran_span = Math.floor(Math.random() * 32);
        $('#truth').show()
        $('#truth').insertAfter('#s' + ran_span.toString())
      }

      static lies(){
        let ran_span = Math.floor(Math.random() * 32);
        $('#lies').show()
        $('#lies').insertAfter('#s' + ran_span.toString())
      }

      static TRUTH(){
        $('body').removeClass('medium-right-margin medium-left-margin').addClass( 'black no-margins')
        $('body').html("<div class='nosifer red-text huge-text'>" + the_truth);
        //console.log(window.location.href)
        setTimeout(function(){
          window.location.href = "./truth.html";
        }, 5000)
      }

      static wordScramble(className, intensity){
        let spans = $('.'+className)
        setInterval(function(){
          if (Math.random() < intensity){ //INTENSITY
            for (let i = 0; i < spans.length; i++){
              let span = $('#s' + (i + 1).toString()).html()
              //console.log(span, i)
              let text = span
              let rtext = ''
              for(let chr = 0; chr < text.length; chr++){
                let num = chr
                if (Math.random() < .1){ //INTENSITY
                  num = Math.floor(Math.random() * text.length);
                }
                //console.log(text[ran_num])
                rtext += text[num]
              }
              spans[i].innerHTML = rtext
            }
          }
        }, 500)
        
      }

      static hungerLink(){
        let span = $('#s21')[0]
        let text = span.innerHTML
        let len = text.length
        span.innerHTML = text.slice(0, 238) + '<a href="hunger.html">hunger</a>' + text.slice(244, len)
        span = $('#s4')[0]
        text = span.innerHTML
        len = text.length
        span.innerHTML = text.slice(0, 72) + '<a href="hunger.html">hunger</a>' + text.slice(78, len)
        span = $('#s5')[0]
        text = span.innerHTML
        len = text.length
        span.innerHTML = text.slice(0, 70) + '<a href="hunger.html">hunger</a>' + text.slice(76, len)
      }
          
      }

var origin_body = $('body').html();

var the_truth = "The woods called to us all."