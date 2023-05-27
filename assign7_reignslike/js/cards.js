 //addPackToDeck("bumbling")
firstCard = {
  prompt: "Human!",
  rightChoiceText: "Turkey?",
  rightChoice: function(){
    addResource("heart", 10);
    addToTopDeck("TurkeyIntro");
    },
  
  leftChoiceText: "ACK!", 
  leftChoice: function(){
    addResource("heart", -10);
    addToTopDeck("TurkeyIntro");
    
  },
  name: "Turkey",
  resultText: "",
  image: "./images/turkey/turkey1.jpg",
  priority: 1,
  pack : "none"
}


// apple graduate heart wallet
cardPool = {
  "uniqueIDList" : ['FriendIntro', 'AppleIntro'],

  "TurkeyIntro":{
    prompt: "I sense a powerful magic has taken hold of your core. You have been cursed!",
    rightChoiceText: "Okay, sure.",
    rightChoice: function(){
      addResource("graduate", -10);
      addPackToDeck('turkeyquests');
      addToTopDeck("TurkeyBye");
      },
    
    leftChoiceText: "What is the curse?", 
    leftChoice: function(){
      addResource("graduate", 10);
      addPackToDeck('turkeyquests');
      addToTopDeck("TurkeyExplain");
      
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "none"
  },

  "TurkeyBye":{
    prompt: "Keep your wits about you, human! And by that I mean, don't fail!",
    rightChoiceText: "Bye, Turkey!",
    rightChoice: function(){
      addResource("apple", 10);
      addPackToDeck("intros");
      },
    
    leftChoiceText: "Okay...", 
    leftChoice: function(){
      addResource("apple", -10);
      addPackToDeck("intros");
      
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "none"
  },

  "TurkeyExplain":{
    prompt: "To have a decent work-life balance! Truly a difficult curse, human. I wish you the best.",
    rightChoiceText: "Cool. Cool, cool.",
    rightChoice: function(){
      addResource("wallet", 10);
      addPackToDeck("intros");
      },
    
    leftChoiceText: "Thanks for the info!", 
    leftChoice: function(){
      addResource("wallet", -10);
      addPackToDeck("intros");
      
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "none"
  },

  "Turkey1" : {
    prompt: "Human! I bestow upon you an opportunity. Which is more important?",
    rightChoiceText: "Health",
      rightChoice: function(){
      addResource("heart", 20);
      },
    leftChoiceText: "Graduating", 
    leftChoice: function(){
      addResource("graduate", 20)
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "turkeyquests"
  },

  "Turkey2" : {
    prompt: "Human! Does a dream or reality decide the future?",
    rightChoiceText: "A dream",
      rightChoice: function(){
      addResource("heart", 10);
      addResource('graduate', 10);
      addResource('apple', 10);
      },
    leftChoiceText: "Reality", 
    leftChoice: function(){
      addResource("wallet", -10);
      addResource("heart", -10);
      addResource("graduate", 10);
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey3.jpg",
    priority: 1,
    pack : "turkeyquests"
  },

  "Turkey3" : {
    prompt: "Human! Which is more important: creation or discovery?",
    rightChoiceText: "Discovery",
      rightChoice: function(){
      addResource("wallet", 10);
      addResource('graduate', 10);
      },
    leftChoiceText: "Creation", 
    leftChoice: function(){
      addResource("heart", -10);
      addResource("apple", 10);
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey2.jpg",
    priority: 1,
    pack : "turkeyquests"
  },

  "Turkey4" : {
    prompt: "Human! Do you live in the moment, or plan for the future?",
    rightChoiceText: "Plan for the future",
      rightChoice: function(){
      addResource("wallet", 10);
      addResource('graduate', 10);
      },
    leftChoiceText: "Live in the moment", 
    leftChoice: function(){
      addResource("heart", -10);
      addResource("apple", 10);
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey2.jpg",
    priority: 1,
    pack : "turkeyquests"
  },

  "Turkey5" : {
    prompt: "Human! ...actually I don't have anything for you right now.",
    rightChoiceText: "You philosophize a lot for a turkey.",
      rightChoice: function(){
      addResource("heart", -10);
      },
    leftChoiceText: "I appreciate your company", 
    leftChoice: function(){
      addResource("heart", 10);
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "turkeyquests"
  },

  


  "FriendIntro": {
      prompt: "Hey! Nice to see you, how have you been?",
      rightChoiceText: "Good, how about you?",
      rightChoice: function(){
        addResource("heart", 10);
        addPackToDeck('friendquests');
        addToTopDeck("FriendGood");
        },
      
      leftChoiceText: "Who're you?", 
      leftChoice: function(){
        addResource("heart", -10);
        addPackToDeck('friendquests');
        addToTopDeck("FriendForget");
      },
      name: "Friend",
      resultText: "",
      image: "./images/friend/friend_smile.jpg",
      priority: 2,
      pack : "intros"
  },
  
  "FriendGood" : {
    prompt: "I'm great! Are you looking forward to classes this quarter?",
    rightChoiceText: "Heck ya!",
      rightChoice: function(){
      addResource("graduate", 10);
      addResource("heart", 10);
      addToTopDeck("FriendLater");

      },
    leftChoiceText: "HAHA. . .no.", 
    leftChoice: function(){
      addResource("graduate", -10)
      addToTopDeck("FriendLater")
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_grin.jpg",
    priority: 1,
    pack : "none"
  },

  "FriendLater" : {
    prompt: "Nice! Yeah, me too. Well, see you around!",
    rightChoiceText: "Bye!",
      rightChoice: function(){
      addResource("heart", 10);
      },
    leftChoiceText: "Later.", 
    leftChoice: function(){
      addResource("heart", -10)
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_grin.jpg",
    priority: 1,
    pack : "none"
  },

  "FriendForget": {
    prompt: "HA, you're funny. Well see you around!",
    rightChoiceText: "Sounds good!",
      rightChoice: function(){
      addResource("heart", 10);

      },
    leftChoiceText: "Yep, cool cool cool...", 
    leftChoice: function(){
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_grin.jpg",
    priority: 1,
    pack : "none"
  },

  "Friend1" : {
    prompt: "I know it's Wednesday, but...wanna go to a party tonight? ",
    rightChoiceText: "Let's gooooooo!",
      rightChoice: function(){
      addResource("heart", 10);
      addResource('graduate', -10);
      },
    leftChoiceText: "Sorry, not tonight.", 
    leftChoice: function(){
      addResource("heart", -10)
      addResource('graduate', 10);
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_questioning.jpg",
    priority: 1,
    pack : "friendquests"
  },

  "Friend2" : {
    prompt: "Hey, let's do our CMPM 148 project together!",
    rightChoiceText: "Sorry, I want to do it myself",
      rightChoice: function(){
      addResource("heart", -10);
      addResource('graduate', 10);
      },
    leftChoiceText: "Great idea!", 
    leftChoice: function(){
      addResource("heart", 10)
      addResource('graduate', 10);
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_smile.jpg",
    priority: 1,
    pack : "friendquests"
  },

  "Friend3" : {
    prompt: "Do you think our mascot is cool or not?",
    rightChoiceText: "Yes, yes it is.",
      rightChoice: function(){
      addResource("heart", 10);
      addResource('graduate', 10);
      },
    leftChoiceText: "No, no it's not...", 
    leftChoice: function(){
      addResource("heart", -10)
      addResource('graduate', -10);
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_shrug.jpg",
    priority: 1,
    pack : "friendquests"
  },

  "Friend4" : {
    prompt: "Have you been getting enough sleep recently?",
    rightChoiceText: "Yes, if you can replace hours of sleep with cups of coffee.",
      rightChoice: function(){
      addResource("heart", -10);
      },
    leftChoiceText: "Yes, actually yes. 8 hours a night. I swear.", 
    leftChoice: function(){
      addResource("heart", 10)
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_questioning.jpg",
    priority: 1,
    pack : "friendquests"
  },

  "Friend5" : {
    prompt: "How did that midterm go?",
    rightChoiceText: "What midterm?",
      rightChoice: function(){
      addResource('graduate', -10);
      },
    leftChoiceText: "Well enough.", 
    leftChoice: function(){
      addResource('graduate', 10);
    },
    name: "Friend",
    resultText: "",
    image: "./images/friend/friend_questioning.jpg",
    priority: 1,
    pack : "friendquests"
  },

  "BossIntro":{
    prompt: "So...apple?",
    rightChoiceText: "Apple Apple Apple",
    rightChoice: function(){
      addResource("apple", 10);
      addToTopDeck("Boss1");
      },
    
    leftChoiceText: "Apple", 
    leftChoice: function(){
      addResource("apple", -10);
      addToTopDeck("AppleReject");
    },
    name: "A Mysterious Stranger",
    resultText: "",
    image: "./images/apple/apple6.jpg",
    priority: 1,
    pack : "none"
  },

  "Boss1":{
    prompt: "Hello, initiate. You've successfully entered the Secret Society of Apples.",
    rightChoiceText: "Great!",
    rightChoice: function(){
      addToTopDeck("Boss2");
      },
    
    leftChoiceText: "...now what?", 
    leftChoice: function(){
      addToTopDeck("Boss3");
    },
    name: "Boss Apple",
    resultText: "",
    image: "./images/boss_apple/boss_apple_norm.jpg",
    priority: 1,
    pack : "none"
  },

  "Boss2":{
    prompt: "Continue to promote our cause and great power will come to you. Apples!",
    rightChoiceText: "Apples.",
    rightChoice: function(){
      },
    
    leftChoiceText: "Apples!", 
    leftChoice: function(){
    },
    name: "Boss Apple",
    resultText: "",
    image: "./images/boss_apple/boss_apple_norm.jpg",
    priority: 1,
    pack : "none"
  },

  "Boss3":{
    prompt: "What do you mean? This is it. You're with us now, that's all. Just wanted to tell you formally.",
    rightChoiceText: "Oh, okay.",
    rightChoice: function(){
      addToTopDeck("Boss2");
      },
    
    leftChoiceText: "...cool...cool...",
    leftChoice: function(){
      addResource("apple", -10);
      addToTopDeck("Boss2");
    },
    name: "Boss Apple",
    resultText: "",
    image: "./images/boss_apple/boss_apple_right.jpg",
    priority: 1,
    pack : "none"
  },

  "BossReject":{
    prompt: "",
    rightChoiceText: "I feel like I'm missing content...",
    rightChoice: function(){
      },
    
    leftChoiceText: "Eh, probably dodged a bullet", 
    leftChoice: function(){
    },
    name: "A Mysterious Stranger",
    resultText: "The apple rolls away dissapointedly. It seems that was not what it wanted to hear.",
    image: "./images/apple/apple6.jpg",
    priority: 1,
    pack : "none"
  },

  "AppleIntro":{
    prompt: "Psst....",
    rightChoiceText: "Apple?",
    rightChoice: function(){
      addResource("apple", 10);
      addToTopDeck("AppleHello");
      },
    
    leftChoiceText: "Who's there?", 
    leftChoice: function(){
      addResource("apple", 10);
      addToTopDeck("AppleInit");
    },
    name: "A Mysterious Stranger",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 2,
    pack : "intros"

  },

  "AppleInit":{
    prompt: "Wanna be a part of the coolest secret society on campus?",
    rightChoiceText: "Apple-solutely!",
    rightChoice: function(){
      addResource("apple", 10);
      addPackToDeck("applequests");
      addToTopDeck("AppleNext");
      },
    
    leftChoiceText: "Mmm, I think I'll pass.", 
    leftChoice: function(){
      addResource("apple", -10);
      addPackToDeck("appleprobs");
      addToTopDeck("AppleMenance");
    },
    name: "A Mysterious Stranger",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 1,
    pack : "none"
  },

  "AppleProbs1":{
    prompt: "The apples are protesting apples being offered at the dining halls! What do you think about the whole thing?",
    rightChoiceText: "I support them!",
    rightChoice: function(){
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
      },
    
    leftChoiceText: "They do know they're food, right?", 
    leftChoice: function(){
      addResource('apple', -10);
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple2.jpg",
    priority: 1,
    pack : "appleprobs"
  },

  "AppleProbs2":{
    prompt: "The apples say I should stop eating them. But they're so delicious!",
    rightChoiceText: "Keep eating them",
    rightChoice: function(){
      addResource('apple', -20);
      },
    
    leftChoiceText: "There's lots of other foods.",
    leftChoice: function(){
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
    },
    name: "Turkey",
    resultText: "",
    image: "./images/turkey/turkey1.jpg",
    priority: 1,
    pack : "appleprobs"
  },

  "AppleProbs3":{
    prompt: "We demand a tithe.       ...please?",
    rightChoiceText: "Keep eating them",
    rightChoice: function(){
      addResource('wallet', -10);
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
      },
    
    leftChoiceText: "Absolutely not.",
    leftChoice: function(){
      addResource('wallet', 10);
      addResource('apple', -10);
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple3.jpg",
    priority: 1,
    pack : "appleprobs"
  },

  "AppleProbs4":{
    prompt: "The apples are being harassed by the turkies!",
    rightChoiceText: "I don't care.",
    rightChoice: function(){
      addResource('heart', -10);
      addResource('apple', -10);
      },
    
    leftChoiceText: "Oh no!.",
    leftChoice: function(){
      addResource('heart', 10);
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple4.jpg",
    priority: 1,
    pack : "appleprobs"
  },

  "AppleQuests1":{
    prompt: "Initiate! Which is better: Apples to Apples or Bananagrams?",
    rightChoiceText: "Definately Apples to Apples",
    rightChoice: function(){
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
      },
    
    leftChoiceText: "Not gonna lie, Bananagrams", 
    leftChoice: function(){
      addResource('apple', -10);
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple2.jpg",
    priority: 1,
    pack : "applequests"
  },

  "AppleQuests2":{
    prompt: "Please bring these apples to the bus stop. Their services are needed at the base of campus.",
    rightChoiceText: "Sure, will do.",
    rightChoice: function(){
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
      },
    
    leftChoiceText: "No, I've got to get to class.", 
    leftChoice: function(){
      addResource('apple', -10);
      addResource('graduate', 10);
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple3.jpg",
    priority: 1,
    pack : "applequests"
  },

  "AppleQuests3":{
    prompt: "Could you help me get to Porter Dining Hall? I'm meeting some friends down there.",
    rightChoiceText: "Sorry, I can't",
    rightChoice: function(){
      addResource('apple', -10);
      addResource('heart', -10)
      },
    
    leftChoiceText: "Yeah, I guess I have time.", 
    leftChoice: function(){
      addResource('apple', 10);
      addResource('heart', 10);
      if (resources.key == 'apple' && resources.value >=90){
        shuffleIntoDeck('BossIntro')
      }
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple4.jpg",
    priority: 1,
    pack : "applequests"
  },

  "AppleQuests4":{
    prompt: "The Secret Society of Apples is so cool, right?",
    rightChoiceText: "...mmm...",
    rightChoice: function(){
      addResource('apple', -10);
      },
    
    leftChoiceText: "Apple-solutely!", 
    leftChoice: function(){
      addResource('apple', 10);
      if (resources.key == 'apple' && resources.value == 90){
        shuffleIntoDeck('BossIntro')
      }
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple5.jpg",
    priority: 1,
    pack : "applequests"
  },

  "AppleMenance":{
    prompt: "Interesting choice. Well, we'll still be watching you.",
    rightChoiceText: "Alrighty",
    rightChoice: function(){
      },
    
    leftChoiceText: "Okay?", 
    leftChoice: function(){
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 1,
    pack : "none"
  },

  "AppleNext":{
    prompt: "Apple-celent news. We'll be in touch.",
    rightChoiceText: "See you later?",
    rightChoice: function(){
      },
    
    leftChoiceText: "Apple-tastic!", 
    leftChoice: function(){
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 1,
    pack : "none"
  },

  "AppleHello":{
    prompt: "Apple...apple apple?",
    rightChoiceText: "Apple.",
    rightChoice: function(){
      addResource("apple", 10);
      addPackToDeck("appleprobs");
      addPackToDeck("applequests")
      addToTopDeck("AppleApple");
      },
    
    leftChoiceText: "What?", 
    leftChoice: function(){
      addToTopDeck("AppleInit")
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 1,
    pack : "none"

  },

  "AppleApple":{
    prompt: "Apple. Apple, apple apple.",
    rightChoiceText: "Apple!",
    rightChoice: function(){
      },
    
    leftChoiceText: "Apple.", 
    leftChoice: function(){
    },
    name: "Apple",
    resultText: "",
    image: "./images/apple/apple1.jpg",
    priority: 1,
    pack : "none"

  },

  "WalletIntro":{
    prompt: "Hey bub, I've been a little thin lately. Mind keeping me a little more full?",
    rightChoiceText: "WHY IS MY WALLET TALKING",
    rightChoice: function(){
      addResource("wallet", -10);
      addPackToDeck('walletquests');
      addToTopDeck("WalletSass");
      },
    
    leftChoiceText: "I'll do my best!", 
    leftChoice: function(){
      addResource("wallet", 10);
      addPackToDeck('walletquests');
      addToTopDeck("WalletThanks");
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 2,
    pack : "intros"

  },

  "WalletThanks":{
    prompt: "Thanks bub, really appreciate it. The missus starts to worry, ya know?",
    rightChoiceText: "Oh yeah, totally.",
    rightChoice: function(){
      },
    
    leftChoiceText: "Uh huh...", 
    leftChoice: function(){
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "none"

  },

  "WalletSass":{
    prompt: "Watch it bub! No one gets to choose sentience. I'll see you around.",
    rightChoiceText: "Oh, okay, sorry.",
    rightChoice: function(){
      addResource("wallet", 10);
      },
    
    leftChoiceText: "Bye...", 
    leftChoice: function(){
      addResource("wallet", -10);
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "none"

  },

  "Wallet1":{
    prompt: "Bub! What are we doin' this weekend?",
    rightChoiceText: "Movie Night-In!",
    rightChoice: function(){
      addResource("wallet", 10);
      addResource('heart', 10);
      },
    
    leftChoiceText: "Drinks and a dance floor!", 
    leftChoice: function(){
      addResource("wallet", -10);
      addResource('heart', 10);
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"

  },

  "Wallet1":{
    prompt: "Bub! What are we doin' this weekend?",
    rightChoiceText: "Movie Night-In!",
    rightChoice: function(){
      addResource("wallet", 10);
      addResource('heart', 10);
      },
    
    leftChoiceText: "Drinks and a dance floor!", 
    leftChoice: function(){
      addResource("wallet", -10);
      addResource('heart', 10);
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"

  },

  "Wallet2":{
    prompt: "Money's tight bub...What are we eating tonight?",
    rightChoiceText: "Nothing, one night won't hurt.",
    rightChoice: function(){
      addResource("wallet", 10);
      addResource('heart', -10);
      },
    
    leftChoiceText: "Ramen, a classic, not old at all.", 
    leftChoice: function(){
      addResource("wallet", -10);
      addResource('heart', 10);
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"
  },

  "Wallet3":{
    prompt: "Eh, listen. Don't trust those apple's. There's something rotten there, I'd put a dollar on that.",
    rightChoiceText: "Thanks for the advice.",
    rightChoice: function(){
      addResource("apple", -10);
      },
    
    leftChoiceText: "I respectfully disagree.", 
    leftChoice: function(){
      addResource("apple", 10);
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"
  },

  "Wallet4":{
    prompt: "Bub! Should we buy these books or not? They're on the required reading list. ",
    rightChoiceText: "No, half the time we don't even need them.",
    rightChoice: function(){
      },
    
    leftChoiceText: "Yeah, we probably should.", 
    leftChoice: function(){
      addResource("graduate", 10);
      addResource('wallet', -10)
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"
  },

  "Wallet5":{
    prompt: "Rent time, bub. Ain't really gotta choice about it.",
    rightChoiceText: "Goodbye money...",
    rightChoice: function(){
      addResource('wallet', -10)
      },
    
    leftChoiceText: "Money goes, poof...", 
    leftChoice: function(){
      addResource('wallet', -10)
    },
    name: "Wallet",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg",
    priority: 1,
    pack : "walletquests"
  },

  "ComputerIntro":{
    prompt: "Salutations. Do you intend on charging me so we may commence with course work?",
    rightChoiceText: "Yes, I will...",
    rightChoice: function(){
      addResource("graduate", 10);
      addPackToDeck('computerquests');
      addToTopDeck("ComputerCharge");
      },
    
    leftChoiceText: "Why did inanimate objects start talking to me???", 
    leftChoice: function(){
      addResource("graduate", -10);
      addPackToDeck('computerquests');
      addToTopDeck("ComputerAvoid");
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_off.jpg",
    priority: 2,
    pack : "intros"
  },

  "ComputerCharge":{
    prompt: "Excellent. I highly suggest we commence with that post-haste.",
    rightChoiceText: "Yeah, yeah, later.",
    rightChoice: function(){
      },
    
    leftChoiceText: "Alright, we'll get to it.", 
    leftChoice: function(){
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_off.jpg",
    priority: 1,
    pack : "none"
  },

  "ComputerAvoid":{
    prompt: "As we are talking, I believe your classification to be extremely innaccurate. Regardless, we may recommence our work post-haste.",
    rightChoiceText: "Okay, sure.",
    rightChoice: function(){
      },
    
    leftChoiceText: "...fine.", 
    leftChoice: function(){
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_off.jpg",
    priority: 1,
    pack : "none"
  },

  "Computer1" : {
    prompt: "It is time to commence with your project that is due...tonight! At 11:59pm.",
    rightChoiceText: "I'll start it at 11:30",
      rightChoice: function(){
      addToTopDeck("Computer11");
      },
    leftChoiceText: "Alright, fine.", 
    leftChoice: function(){
      addResource('graduate', 10);
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_off.jpg",
    priority: 1,
    pack : "computerquests"
  },

  "Computer11" : {
    prompt: "...AM or PM?",
    rightChoiceText: "...PM",
      rightChoice: function(){
      addResource('graduate', -10);
      addResource('heart', -10);
      },
    leftChoiceText: "AM!", 
    leftChoice: function(){
      addResource('graduate', 10);
      addResource('heart', 10)
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "none"
  },

  "Computer2" : {
    prompt: "Please, please, I beg of you. Close some of the tabs you have open. Litterally any tab. Please. ",
    rightChoiceText: "I need them!",
      rightChoice: function(){
      addResource('heart', -10);
      },
    leftChoiceText: "I'll close one tab.", 
    leftChoice: function(){
      addResource('heart', 10);
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "computerquests"
  },

  "Computer3" : {
    prompt: "Your screen time is up by 400% this week. How is that even possible?",
    rightChoiceText: "Cramming to get a project done.",
      rightChoice: function(){
      addResource('graduate', 10);
      addResource('heart', -10);
      },
    leftChoiceText: "The Youtube rabbit hole", 
    leftChoice: function(){
      addResource('graduate', -10);
      addResource('heart', 10);
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "computerquests"
  },

  "Computer4" : {
    prompt: "According to your budget, you have some excess funds this week.",
    rightChoiceText: "Spend it on a trip to the Santa Cruz Beach Boardwalk",
      rightChoice: function(){
      addResource('wallet', -10);
      addResource('heart', 10);
      },
    leftChoiceText: "Save it", 
    leftChoice: function(){
      addResource('wallet', +10);
      addResource('heart', -10);
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "computerquests"
  },

  "Computer5" : {
    prompt: "You've received a suspicious email from 'a9pL3a9pL3@apple.edu.",
    rightChoiceText: "Open it",
      rightChoice: function(){
      addResource('apple', 10);
      addToTopDeck('AppleEmail');
      },
    leftChoiceText: "Mark as spam", 
    leftChoice: function(){
      addResource('apple', -10);
    },
    name: "Computer",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "computerquests"
  },

  "AppleEmail" : {
    prompt: "The email reads.",
    rightChoiceText: "Weird",
      rightChoice: function(){
      },
    leftChoiceText: "Apple apple", 
    leftChoice: function(){
    },
    name: "Computer",
    resultText: "We've taken great interest in you. If you want to meet the boss, accept our initiation and help our cause. Remember, apples to apples to apples.",
    image: "./images/computer/computer_open_on.jpg",
    priority: 1,
    pack : "none"
  },



  "END":{
    prompt: "The end of the quarter is here and you've more or less been able to manage all of your responsabilites. Congrats!",
    rightChoiceText: "Restart",
    rightChoice: function(){
      location.reload();
      },
    
    leftChoiceText: "Restart", 
    leftChoice: function(){
      location.reload();
    },
    name: "THE END",
    resultText: "",
    image: "./images/turkey/turkey4.jpg",
    priority: 1,
    pack : "none"

}



}



console.log(Object.keys(cardPool).length - 1);

in_pack = []
for (i in Object.keys(cardPool)){
  if (cardPool[Object.keys(cardPool)[i]].pack != 'none'){
    in_pack.push(Object.keys(cardPool)[i]);
  }
  
}
console.log(in_pack.slice(1, ));
cardPool['uniqueIDList'] = in_pack.slice(1, );