failCards = [{
  resource:"apple", 
  level: "high", 
  card: {
    prompt: "You're in too deep with the Secret Society of Apples and disappear on a secret mission one day, never to be found again.",
    rightChoiceText: "Apple Apple",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Bruh, why tho.", 
    leftChoice: function(){location.reload();
    },
    name: "Apple Overtake",
    resultText: "",
    image: "./images/apple/apple6.jpg"
  }
},
{
  resource:"apple", 
  level: "low", 
  card: {
    prompt: "The Secret Society of Apples close their doors to you, hurting you so deeply that you never recover.",
    rightChoiceText: "'Tis the fate worthy of apple-less-ness.",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Okay, lol.", 
    leftChoice: function(){location.reload();
    },
    name: "Apple Betrayed",
    resultText: "",
    image: "./images/apple/apple6.jpg"
  }
},
{
  resource:"graduate", 
  level: "high", 
  card: {
    prompt: "You spend the rest of college buried under your classwork.",
    rightChoiceText: "Yikes",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Relatable fr fr", 
    leftChoice: function(){location.reload();
    },
    name: "Overwhelming Pressure",
    resultText: "",
    image: "./images/computer/computer_open_on.jpg"
  }
},
{
  resource:"graduate", 
  level: "low", 
  card: {
    prompt: "You leave college in favor of pursuing other passions.",
    rightChoiceText: "Welp",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Not too bad", 
    leftChoice: function(){location.reload();
    },
    name: "Better Horizons",
    resultText: "",
    image: "./images/computer/computer_basic.jpg"
  }
},
{
  resource:"heart", 
  level: "high", 
  card: {
    prompt: "Your extremely healthy. So healthy in fact, that you ascend to a new plane and are therefore unable to continue with college.",
    rightChoiceText: "Fear me mortals",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Ight, I'ma peace out.", 
    leftChoice: function(){location.reload();
    },
    name: "Health Ascension",
    resultText: "",
    image: "./images/turkey/turkey4.jpg"
  }
},
{
  resource:"heart", 
  level: "low", 
  card: {
    prompt: "With not enough strategies to manage your stress, your body has given out under the weight of it.",
    rightChoiceText: "Ight, here we go again.",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Skill issue", 
    leftChoice: function(){location.reload();
    },
    name: "Body Breakdown",
    resultText: "",
    image: "./images/turkey/turky4.jpg"
  }
},
{
  resource:"wallet", 
  level: "high", 
  card: {
    prompt: "You have so much money in your account! However, you've forgotten to pay several very important bills.",
    rightChoiceText: "Looked so good while it lasted",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "Money's just a number", 
    leftChoice: function(){location.reload();
    },
    name: "Illusory Funds",
    resultText: "",
    image: "./images/wallet/wallet_closed.jpg"
  }
},
{
  resource:"wallet", 
  level: "low", 
  card: {
    prompt: "You're out of money.",
    rightChoiceText: "Money, money, money. Must be funny",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "in a rich man's world.", 
    leftChoice: function(){location.reload();
    },
    name: "Empty Pockets",
    resultText: "",
    image: "./images/wallet/wallet_open.jpg"
  }
},



]

defaultFailCard = {
  prompt: "You're unable to balance your personal life, school work, secret society, and monetary needs.",
  rightChoiceText: "Balance shmalance",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "Lol fair", 
  leftChoice: function(){location.reload();
  },
  name: "Turkey",
  resultText: "",
  image: "./images/turkey/turkey4.jpg"
}

failTransit = {
  prompt: "I detect a dastardly imbalance at your core!",
  rightChoiceText: "Uh oh",
  rightChoice: function(){},
  
  leftChoiceText: "Uh oh", 
  leftChoice: function(){},
  name: "Turkey",
  resultText: "",
  image: "./images/turkey/turkey4.jpg"
}