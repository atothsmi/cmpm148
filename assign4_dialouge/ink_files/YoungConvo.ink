VAR y_weirdness = 0
VAR y_bravery = 0 
VAR y_hope = 0
VAR y_desire = 0

=== dreams ===
The following are true:
*Dreamers are foolish. -> foolish
*Dreamers are needed. -> needed

= foolish
~hope = hope - 1
They hold on to hope and fantasy, even in the face of hopeless odds and flat reality. We must not exhaust ourselves fighting the inevitable. 
-> obstacles

= needed
~hope = hope + 1
They know the future can be better and that those unwilling to imagine it won't work to make it real. A plan without a dream is worse than a dream without a plan.
-> obstacles

= obstacles
*Obstacles must be avoided. -> avoid
*Obstacles have to be faced head on. -> face

= avoid
~bravery = bravery - 1
Otherwise, they will keep you from moving forward.
-> sense

= face
~bravery = bravery + 1
Otherwise, they will fester and drag you down. 
->sense

= sense
* Everything makes sense. -> everything
* Nothing makes sense. -> nothing

= everything
~weirdness = weirdness - 1
If we look close enough and think hard enough, everything can be explained. The world can be reconstructed with the facts we know about it.
* [True as true is.] -> tenents

= nothing
~weirdness = weirdness + 1 
Nothing has to make sense. Not everything can be explained and yet, the world is still as big and wonderful.
* [True as true is.] -> tenents

= tenents
These are the tenents we hold ourselves to.
* [True as true is]-> young_convo

=== young_convo ===
"Jane? Jane, wake up! Jane!" Eris attempts shake to you awake. You can sense it's not nearly time to get up.

*"I{bravery >= 1:'m awake...| refuse...}" 
    ~satisfaction = satisfaction + 1
    -> bed
*(happening)"What's happening?"
    -> what
*{weirdness >= 1} [wiggle wiggle]
    ~satisfaction = satisfaction + 1
    -> wiggle

= bed
"Come on, let's go!"
*"Mmmmm...bed's so nice though..."
    "You said you would come with me today!" Eris bats her eyelashes at you. "Pweeeezeee."
    ** "But sleep is so nice..."
        -> names
    ** (fine)Fine...
        -> what
*(asleep){bravery < 1}[Pretend to be asleep]
    ~desire = desire - 1
    Eris waits for you to do something with her puppy dog face.
    **(bed_roll){desire > -10}[Roll out of bed begrudgingly.]
        ->what
    ++ (pretend_asleep){desire > -10}[Pretend to be asleep]
        -> asleep
    ** (sleeping){desire <= -10}-> false_end
        
*(coming)"I'm coming!" -> what

->DONE

=names
"Jaaaaannnnee..."
    *(up){desire > -10}"Fine, I'm up."
        ->what
    +{desire > -10}"Eeeerrriiissss... "
        ~desire = desire - 1
        -> names
    *(nammes){desire <= -10} -> false_end

=wiggle
You get a good wiggle going.

Eris giggles. "HA, what are you doing?"

*[Slither out of bed, like a snecky snake.] -> snecky
*[Wiggle more fiercely.] -> super_wiggle
*[Stop wiggling.] -> nevermind


=snecky
~satisfaction = satisfaction + 1
You slither out of bed. Impressively, you're able to stay in the blankets. You make it all the way to your closet, where you shed your comforter and emerge fully dressed.->what

=super_wiggle
~satisfaction = satisfaction + 2
You wiggle like you've never wiggled before. The wiggles are so impressive that you would probably get an award for it, if they gave out awards for this kind of thing.

Eris slow claps. "Truely impressive wiggling today, truely."
* (best_wiggle)"Honestly, the best wiggle I've had in a while."
    -> what
* {hope >= 1} "Truely the future of wiggling is bright."
    ~satisfaction = satisfaction + 1
    -> good_wiggle
* (forbidden)[The Forbbiden Subatomic Wiggle] -> false_end
->DONE

=nevermind
~satisfaction = satisfaction - 1
"Ah, nevermind it's nothing." Despite your desire to continue wiggling, you decide it's not the time for such silliness.

"Alright..." Eris raises an eyebrow at you. "Anyways, let's go!" 
-> what

=good_wiggle
"One day I hope to be such a wiggle master," Eris says with faux seriousness. "Now, for real, we gotta go!"
-> what

=what
~desire = desire + 1

{coming:You jump out of bed and throw on some clothes.}{happening or nevermind:You rub sleep out of your eyes.}{up:You manage to sit up.}{best_wiggle or good_wiggle:You wiggle your way out of bed.}{bed_roll or fine: You fall out of bed into the nearest set of clean-ish clothes.} "Where are we going?"


"We are going somewhere special!" Eris says.
    
* "Where?" -> where
* "Special?" -> where.special
* "Alright, let's go." -> place

=false_end
Uh oh.
	* {came_from(->sleeping)} ->false_sleeping
	* {came_from(->nammes)} ->false_nammes
	* {came_from(->forbidden)} -> false_forbidden

=false_sleeping
You accidentally fall asleep for real, circumventing whatever was supposed to happen today. Oh well!
->DONE

=false_nammes
You get stuck in an infinite loop competatively calling each other's name in longer and longer ways. Whoops!
	->DONE
	
=false_forbidden
	You wiggle the very particles of your being. Unfortunately, this causes many of them to bond which sets off a huge fusion reaction, completely derailing your plans for today. I guess there's a reason it was forbidden.
->DONE

== where ==
~desire = desire + 1
"Uhh... I'm not sure actually." Eris thinks. "Well, it needs to be special. We have something important to do."
    *{weirdness < 1} "What is it?"
        -> spoilers
    *"Let's go to the Rainbow Park."
        -> park
    *"Let's go to the roof."
        -> roof
    *"Let's go to the high school."
        -> school
    *(drive){weirdness >= 1}"Let's just drive."
        ~bravery = bravery + 1 
        ~satisfaction = satisfaction + 1
        ->place
        
= park
~satisfaction = satisfaction + 1 
"Ooo, that's a great idea," Eris says. "I'll grab us some snacks!"
-> place.park

= school
"High school? You want to go to the place where we spent 80% of our time since we've been together?" Eris looks at you incrediously.
* "That makes it pretty special doesn't it?"
    "It is where we met. Hmm..." Eris mulls over the idea. "Alright, yeah! Let's go!"
    ->place.school
* "No, nevermind..."
    {bravery >= 1:
    ~satisfaction = satisfaction - 1
  - else:
    ~satisfaction = satisfaction + 1
    }
    "Yeah, let's go somewhere else instead," Eris says. You head off.
    {~->place.park|->place.rooftop}
*"Yep, we're going."
    ~bravery = bravery + 1
    "Alright! I'll get my old student ID, just in case we get some looks." Eris heads off.
    -> place.school

= roof
"The roof? Your roof?" Eris goes to your window. "It looks pretty far up..."
*"I got you, don't worry about the height."
    ~bravery = bravery + 1
    "Alright, if you say so." Eris takes you hand as you guide her out the window.
    ->place.rooftop
*"Mmm, actually you're right."
    {bravery >= 1:
    ~satisfaction = satisfaction - 1
  - else:
    ~satisfaction = satisfaction + 1
    }
    "Yeah, let's go somewhere else," Eris says. "I'll drive!"
    {~->place.park|->place.school}

=special
~hope = hope + 1
"Very special," Eris says confidently. "I'm driving!"
->place

= spoilers
~desire = desire + 1 
"No spoilers! You'll find out when we get there." Eris smirks.
-> place

==place==
{where.drive == 0 and where.roof == 0: You head off.}{where.roof: You grab your blankets and climb onto the roof}{where.drive: You take the wheel and drive in whatever direction seems right. Occasionally you take a break from the road to look up at the night sky. It burns bright with stars.}
{~->park|->rooftop|->school}

= rooftop
{where.drive:
After driving for a while, you end up back at your house.

"Hmm..." Eris thinks. "I think this means the roof? Yeah, let's go to the roof."
}
A few moments later, {where.school or where.spoilers or where.special:you end up|you're} on your roof. From here, you can see your entire town{weirdness< 1: (due to your home's particuarlly good placement, on top of a hill)}. Lit up to face the night, a sea of street lights reveal the streets below filled with midnight cars on their way home.

"Beautiful, isn't it?" Eris leans on you.
* {hope >= 1} "Yeah, it really is."
    ~satisfaction = satisfaction + 1
   "That's our town. It always will be." 
* {hope < 1} ["No, not really."]
    ~satisfaction = satisfaction + 1
    "No, not really. It's just a city. There's a lot of cities out there just like this one."
    
    "Phf, sure, but this is our city!" Eris stands triumphantly, arms outstretched.
    **(steady){bravery < 1}[Steady Her.]
        ~satisfaction = satisfaction + 1
        Eris wavers a little, slipping on the ice under her boots. "Wooah!"
        
        You steady her and hold firmly to the roof. "I got you."
        
        "I know you do." Eris sits back down. "Still gotta be careful."
        
    **(careful)"Woah! Careful, it's icy up here."
        ~bravery = bravery - 1
        "I'll be fine!" Eris plants her feet in a wide stance. "Wow, I can really see everything from here."
        
    **{bravery >= 1} [Trust her.]
        ~satisfaction = satisfaction + 1 
        You let her stand tall, taking in the power of standing on top of something tall.
        "Wooooh! We're on top of the world!" Eris shouts. "The whole world..."
*[Rest your head on her shoulder.]
    You rest your head on her shoulder.
    ~desire = desire + 1
    

-->promise

= school
{where.drive: 
A time later, you roll up to your high school.

"Really? Don't we spend enough time here?" Eris shrugs. "Ah, well who am I to question the will of the road."
}
{where.spoilers or where.special:"Surprise!" Eris rolls down the window to reveal your high school's parking lot.}
{where.school:You arrive at your high school.}

The entrance to the school stands tall, lit by a single flickering bulb. What's a bland, aging building at best in the light of day, takes on an eerie effect at night. Despite the shadows, this place can't help but be familiar. There's a memory to reminisce on no matter where you look.

You and Eris perch carefully on the hood of your 2012 Prius C.

"Woah, litterally nothing has changed," Eris says. "I guess, it has only been a year, but... I don't know."
*["I know."]
    "I know. This place is in our past. It's like seeing a ghost. We've moved forward, but it hasn't."
    
    "Yeah, I guess," Eris responds.
    **"Or maybe, it's us who secretly never left! Spooky."
        ~weirdness = weirdness + 1
        "HA, yeah. One day, we'll escape high school." Eris laughs. 
        "One day..."->promise
    ** "It'll probably always be familiar."
        ~weirdness = weirdness -1
        
        "Yeah..."->promise
    
*"Yeah, it's...strange."
    "Right? Like, it looks the same, but it shouldn't," Eris says. "I've changed, why hasn't it changed?"

*{weirdness < 0}[Nod a little.]
    ~satisfaction = satisfaction + 1
    You nod. Change is normal, to be expected. However, schools always seem immune to that constant. Or they get suspiciously better the minute you leave.
-->promise

= park
{where.roof or where.school or where.drive or where.spoilers or where.special:You end up|You arrive} at Rainbow Park.

A warm light baths the children's park. It was named for the painted rainbow bridge that connected two towers of its central play fort. The paint has long since faded and yellow safety tape marks the bridge as a no-go zone until it passes a safety inspection.

"You know what makes me feel old?" Eris asks. "I rememeber that bridge actually having color."

*{bravery >= 1}"Let's climb it."
    "What?" Eris looks up. "Surely that tape is there for a reason."
    **"Come on, we'll be fine!"
        ~bravery = bravery + 1
        "Alright." Eris looks a little skeptical, but goes along with you. {weirdness <= 0: Carefully scoping out a path|Riding on hope and faith}, you make it to the center of the formerly rainbow bridge. It looks secure enough.
        
        "Alright, this isn't that bad..."->promise
    **"Tape-shmape."
        ~satisfaction = satisfaction + 1
        "Alright, I'm trusting you," Eris says. You both climb up one of the towers, ignoring the warnings. Eris stops at the peak. "So, um." ->promise
*"We're only 19."
    ~weirdness = weirdness - 1 
    "Yeah, I know. It's all about the feel though," Eris says.->promise
*{hope <= 0}"I don't think they'll ever fix it."
    "Ever is quite a long time."->promise
*{hope >= 1}"Maybe they'll fix it."
    "You think so?"
    **"Yeah, it'll get fixed."
        ~hope = hope + 1
        "I hope you're right."->promise
    **"Yeah, but I don't think they have to."
        ~weirdness = weirdness + 1
        "I get what you mean, this is how it has been most of my life. So what we can't use it, it's iconic."->promise

== promise ==
Eris pauses. "So...I want to do something. It's totally silly! Small, maybe even infantile."

*"Nice Vocab."
    "Thanks, I'm really pulling out the big guns." Eris flexes.
*{young_convo.wiggle}["You're worried about seeming silly? With me?"]
    ~satisfaction = satisfaction + 1
    "You're worried about seeming silly? With me? I just spent a good 10 minutes wiggling. Just wiggling."
    
    "HA, you right." Eris smiles.
*(what_promise)"What is it?"
    ~desire = desire + 1
*[Wait]
    ~desire = desire - 1

-"In all seriousness, I want us to make a promise."
* "What kind of promise?"
* "That's it?"
    "That's it." Eris locks eyes with you. "A promise."
* {desire < 1} "Okay."

-{what_promise:Eris shrugs.|Eris thinks a moment.} "What kind of promise do you think we should make?"
    ~desire = desire + 1
*(stay)[To not change too much]
    ~bravery = bravery - 1
    ~weirdness = weirdness - 1
    "We should promise to not change too much," you say. "I want to be able to look back to right now and recognize myself."
*(change)[To move forward and improve]
    ~bravery = bravery + 1
    ~hope = hope + 1
    "We should promise to move forward," you say. "We should strive to be better than we are now."
*(want)[To want something out of life]
    ~hope = hope - 1
    ~desire = desire + 1
    "We should promise to work to get what we want," you say. "I don't know what the future's going to look like, but I know I want to always want something. Something to keep me going."
    

*(self){weirdness >= 1}[To stay true to ourselves]
    ~weirdness = weirdness + 1
    "We should promise to stay true to ourselves," you say. "I want us to keep being weird and silly, even if we change in other ways."

-"Alright, deal!" Eris stands up{place.rooftop: again}.
{place.rooftop.steady or place.rooftop.careful: You watch her carefully just in case she steps somewhere she shouldn't have.} "To you, Jane Doe, I make this promise and you to me, the same. May we be strong enough to keep it."

*[True as true is.]
    -> next

== next ==
~y_weirdness = weirdness
~y_bravery = bravery
~y_hope = hope
~y_desire = desire
The memory fades. Once upon a time, two souls made a promise.
->StuffHappens

=== function came_from(-> x) 
    ~ return TURNS_SINCE(x) == 0


