== StuffHappens ==
*[Solidifying attributes...]
-
*[Relocating memories...]
-
*[Defining the truth...]
-
You wake up in a place you can't recognize. This place is not a place, and therefore there is nothing to recognize.
    ->stuff

=stuff


*["Hello?"]
    "Hello?" She snaps her fingers in front of your face. "Are you even listening?"
    **"Yep, of course."
        ~bravery = bravery + 1
        "Okay, then tell me what movie we were talking about." She waits expectantly.
            ***(wrong)"Man of Steel, obviously."
                ~satisfaction = satisfaction - 1
                "No!" She purses her lips. "Fine, it's okay. I guess I was just talking to myself for the past five minutes. Whatever."
            ***"Batman vs. Superman: Dawn of Justice, clearly."
                ~satisfaction = satisfaction + 1
                "Oh, you were listening." She relaxes. "Sorry, you just got a look over you."
            ***"Justice League, for sure."
                "Eh, close enough," she says. "You were sorta listening." 
    **(honest)"Not really."
        "Eh, fair enough." She laughs. "At least you're being honest!"
*"What?"
    "That's exactly what I said!" She stands up excitedly. "I honestly don't know what I was expecting, but it wasn't that!"
*{weirdness >= 1} "A twist!"
    ~satisfaction = satisfaction + 1
    "Yeah, but is it really a twist? I mean, there was no way they were going to let Superman stay dead." She crosses her arms. "It's like, hand of the author you know?"
*{weirdness <= 0} "That doesn't make sense."
    ~satisfaction = satisfaction - 1
    "Of course, it doesn't make sense!" she says. "Wonder Woman is right there! She could have easily taken the kryptonite spear and bam! Then the monster's dead and Superman's still alive."
*{bravery >= 1}Attempt to leave.
    ~satisfaction = satisfaction + 1
    You attempt to find a way out of this not place. It's something to do, but there's nothing to make progress on so this action is more so just for you.->stuff
*{bravery <= 0}Wait.
    ~desire = desire - 1
    You wait. It's actually impressive, because there's no sense of time in a place that's not a place so waiting is much harder.->stuff
    

- She twirls her fork in her spaghetti, creates a big pasta ball, and agressively puts the whole thing in her mouth in one bite. The chitter-chatter of other restaurant go-ers fill in the background. Pasta Pomodoro may not be the most romantic place for a date, but it is quite affordable. And who doesn't like pasta?

*{hope >= 1 and bravery >= 1}"So, you wanna do something later?"
    ~satisfaction = satisfaction + 1
    "Oooh, very forward. I like that." She smiles. "Let's not get ahead of ourselves though, let's get to know each other first. Let's see..." She thinks. "What do you do for work?"
    ->job_stuff
*(what_do)"So what do you do?"
    "Right now, I'm working at Walmart, but I'm looking to become a full-time artist, however that works..." she says. "What about you?"
    ->job_stuff
*{bravery <= 0}"Don't choke!"
    ~satisfaction = satisfaction + 1
    As if on cue, some pasta goes down the wrong pipe and she coughs a little. She holds a thumb up. "I'm good, don't worry about me."
    
    She coughs a little more.
*{weirdness >= 1 and not wrong} "My dinosaur pasta is great."
    ~satisfaction = satisfaction + 1
    "It looks great, I'm surpised they had it!" she says. "Although, I still don't know if it can beat the classics."
    **"Fair enough."
        "So, what do you do for work?"
    **"Dinosaur pasta does go rawr, though."
        She looks at you weird. "I mean, I guess it does."
        ***[Feel uncomfortable.]
            ~weirdness = weirdness - 1 
            You cringe at yourself.
        ***RAWR
            ~weirdness = weirdness + 1
            You let out a RAWR. She laughs half-heartedly. "You're weird, you know that?" There's a little uncomfortable silence.
        ***[Ask her about her job.] ->what_do
*(closed){weirdness <= 0} "Pasta Pomodoro is closed."
    ~satisfaction = satisfaction + 1
    "Yep, it sure is. That's why we had to go to Olive Garden instead." She raises an eyebrow at you. "Are you feeling alright?"
    
    You look at your basket of unlimited breadsticks, their buttery reality looking you in the face.
    
-"Right, anyways, what do you do for work?" she asks.
    ->job_stuff

= job_stuff
*(accountant)"I'm an accountant."
    {weirdness >= 2 and not wrong:
    You wink.
    
    She stares at you for a moment. "Ah, like the TikTok sound?"
    
    "Well, yes, but also I'm an actual accountant."
    -else:
    "So you do taxes and stuff?"
    
    "Yep."
    }
    "Cool, cool," she says. She {not closed: twirls her pasta again. | grabs a breadstick.} A light appears on her face.
    
    "Wait, do you do the taxes of anyone cool? she asks.
    **"Well..."
        You take a moment to think. "Who do you think is cool?"
        
        "You know, like someone famous," she says. "Like, an actor or something." She looks you up and down. "Eh, it's alright, you don't have to say. You're probably under an NDA or something anyways."
        
    **{weirdness >=2}"Actually, yeah!"
        ~satisfaction = satisfaction + 1
        ~bravery = bravery + 1 
        You look conspiratorily. "Do you know...Chris?"
        
        She gasps. "Chris Pratt? Chris Rock? Chris Evans!?"
        
        ***"Chris Pine."
            ~weirdness = weirdness - 1
            "Oh, him?" she asks. "Well, I guess that's sorta cool."
        ***["Nope!"]
            ~weirdness = weirdness + 1
            "Nope! Chris Schaffield," you say. "He's a dentist, been operating over 20 years."
        
            "Is he famous?" she asks.
        
            "No, he's a dentist," you say. "He's still a very cool guy, though. He gave me good deal on a root canal once."
        
            "Oh. Okay." She goes back to her pasta.
            
    **{bravery >= 1}"No, not really."
        ~satisfaction = satisfaction + 1
        ~bravery = bravery + 1
        "Oh, okay." She looks dissappointed.

*(sales)"I work in sales."
    "Ah a compatriot! It's a job right?" She laughs. "Any crazy customer stories? I have a ton."
    ** ["Oh totally."]
        "Oh totally," you say. "One time a customer wanted a refund for some sunglasses and they were way past the return policy, so I said I'm sorry I can't return them."
        
        "Right," she says.
        
        ***["That's it"]
        ~bravery = bravery - 1
        "That's it," you say.
        
        "Oh. That doesn't seem that crazy," she says. "Did you let her return them?"
        
            ****"Yeah, I mean, it was probably an honest mistake."
                ~hope = hope + 1 
                "Oh, maybe..." she says. "I have customers like that all the time though, they're usually not that well-intentioned."
                
                "I gave her the benefit of the doubt that time."
                
                "Okay..." She eats her pasta in silence.
                
            ****["No, it was late. She was probably trying to scam us."]
                ~hope = hope - 1 
                "Oh, thank gods," she says. "Everytime I hear stories like this, it's like they forgot to grow a spine."
        
        ***["So then..."]
        ~bravery = bravery + 1
            "So then, she threw a fit demanding that I return them and I just sat there with the most perfect customer service smile. She ended up calling a manager from a different department, because my manager wasn't there. They ended up letting her return it, but I did my best."
            
            "Damn girl, they never have our backs do they," she says.
            
            ****"I guess not, but everyone was just doing their job."
                ~hope = hope + 1
                "Yeah, but would it kill them to back us for once?" She frusturatedly eats her pasta.
            ****"Nope."
                ~hope = hope -1
                "Well, at least you tried," she says.
                
    ** "Nope."
        "Really, nothing?" she asks. "I've been at my job for only like 6 months at this point and I can think of at least 10 right off the top of my head."
        
        "Nope." You shrug. "Guess I just got some pretty chill customers."
        
        "Well, you're lucky." She gets a far off look in her eyes. "Walmart is like a war zone."

*(teacher)"I'm a teacher."
    "Ah, really? That's pretty cool," she says. "Training the next generation for the future. Any stories you care to tell?" She smirks."What does our future look like?"
    **{hope >= 1}"Bright."
        ~satisfaction = satisfaction + 1
        You smile to yourself, thinking of your students. "They're as smart as they are ridiculous. Love 'em to bits."
        
        "Aww, that's nice," she says.
    
    **{hope <= 0}"Dark."
        ~satisfaction = satisfaction + 1
        You grimace. "It is not looking good if my students are anything to go by."
        
        She stiffles a laugh. "Surely, they can't be that bad."
        
        ***["No, they aren't really..."]
            ~hope = hope + 1 
            "No, they aren't really, they just get on my nerves sometimes."
            
            "That's how kids are, isn't it? Sometimes they're kittens, sometimes they're sharks," she says.
        
        ***"Yes, they are."
            ~hope = hope - 1
            "Hot damn!" she exclaims. "Guess that's just how it is.{honest: Really saying the quiet part outloud today. Brutal.}"
    **"They're fine."
        You shrug. "They're not too bright, but not too bad either."
        
        "Huh, okay," she says.
--> happy


=happy
"Well, do you like it?" she asks.
*["I like it..."]
    ~satisfaction = satisfaction + 1
    "I like it," you say. "It's pretty consistent and I'm good at it so...it's nice."
    
    "That's great for you," she says.
*["It's fine, but..."]
    ~desire = desire + 1
    "It's fine, but..." You think. "I want something more.{promise.want: I made a promise a long time ago that I would keep wanting stuff out of life.} I don't think this is where I'm supposed to stop."
    
    "Wow, yeah. That makes sense." She thinks.
*["It's not bad..."]
    "It's not bad..." You shrug. "It's a living, right?"
    
    "Yep, that it is." She sighs, a big long sigh.
*"I hate it."
    ~satisfaction = satisfaction - 1
    "Then why are you still there? Couldn't you just...find someting else?" she asks.
    **(new_yes)["Yeah..."]
        ~desire = desire + 1
        "Yeah, I guess I could"
        
        "Well, then maybe you should."
    **"No..."
        ~desire = desire - 1 
        "I can't. There's nothing else I can do. This is what I got."
        
        "That's sad," she says. "Welp, waiter! Another Heineken, please. To-go." 

-->after_stuff

=after_stuff
She begins to gather her stuff. "Well, do you want to go somewhere?"
*(date)"Yeah, let's go."
    "Great!" She pats her pockets. "Ooo, I didn't grab my wallet, could you get the check?"
*(not_date)"No, I've got...some stuff to do."
    She shrugs. "Okay, your loss."


 
-The scene fades. Dates on dates on dates. They're not her, they're distractions. Every time you try to see her face, she blurs and shifts, turns just at the right angle, obscures her face with an errant shadow.
->old_souls























->old_souls