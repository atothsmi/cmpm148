VAR promise_kept = false

== old_souls ==
*[Run towards her.]
-
*[Grab her hand.]
-
*[Answer for your promise.]
-
{place.school:
    ->reunion
}{place.rooftop:
    ->roof_party
}{place.park:
    ->new_park
}

=reunion
High school reunions try to make light of nightmares, but something about fairy lights and a couple of disco balls really make you forget all the horrors you went through in your high school's gym. The only difference between prom night and now is that everyone's wearing deodorant. Most of them at least. 

*(punch)[Get some punch.]
    You make your way to the punch bowl. It's not been spiked and you know it, because it's clearly labeled as "50% Vodka, 50% Everything Else."
    **(tipsy){bravery >= 1}[Drink it straight.]
        You bravely grab a red solo cup and sip the punch straight. The vodka is self-evident and the everything else turns out to be more vodka. For a moment, you wonder what gave the drink the red color, but then the world starts to spin a little, so you decide it's probably best to not think about it too hard. 
            ->found
    **[Cut the drink.]
        You decide to mix the drink with one of the many mixers available. You take a sip of your concoction. It's not terrible, but it's not that good either. It has a strong after-tast of jet fuel. 
            ->found
    **{bravery <= 0}[Get something non-alcoholic.]
        You decide to avoid the mystery punch in favor of your favorite non-alcoholic drink. It's exactly as you remember it tasted in high school. You've definitely had it since then, so you're not quite sure this is your most immediate comparison. 
            ->found
*[Go dance.]
    You head to the dance floor, the music of your teenage years beckoning you to let loose a little. For a second, the world seems to flicker in and out as you get into the beat. 
        -> found
*{hope >= 2} [Look for her.]
    You know she's here. At the very least you hope she is. You look around.
    **[Look at the dance floor.]
        You look towards the dance floor. People you used to know dance like they don't have crippling student loan debt or a loveless marriage. The songs bring you back to that time. 
        ->looked
    **[Look at the buffet.]
        You look towards the buffet. Honestly, it's best that the reunion planning committee rejected the cafeteria's generous offer to cater the event. Instead, there's a full pasta bar and the noodles are neither over nor under cooked.
        ->looked
    **{weirdness >= 3}[Look behind the bleachers.]
        You look behind the bleachers. It's a shadowy place you remember fondly. There's really no better place to hide if the hubub of school assemblies were getting to be too much. She's there.
        ->found_her


=roof_party
Before hipsters, rooftops were places for contemplating the end and making heartfelt confessions. Not that they aren't used for that stuff anymore, but now there's definitely a lot more artsy parties with delicately placed fake foliage. You find yourself at one such party now.
*(converse)[Converse with party go-ers.]
    You start up a conversation with someone nearby. You're not sure who invited you to this party, but the person you're talking to was apparently their uncle's daughter's roommate's camp counseler from 5th grade sleep away camp. They're apparently very close.
    ->found
*[Examine the foliage]
    You examine the foliage, in absence of other things to do. To your surprise, the foliage is in deed real, however it has been hot glued to the latticework. You assume this is because the way it was naturally growing simply didn't look 'natural' enough.
    ->found
*{hope >= 2}[Look for her.]
    She's here. You haven't seen her in a long time, and yet you know.
    **[Look at the band.]
        You look at the band. They're playing some alt-pop disco-infused jazz at least according to their sign, but you're not sure if those are just buzz words or a poor attempt at describing their sound. {weirdness >= 1:Either way, it looks like they're enjoying themselves and that's really all that matters isn't it.}
        ->looked
    **[Look in the crowd.]
        You look into the crowd. Faces remain indistinct as the crowd acts as one, swaying to the beat of the music and chatting just enough so no one seems lonely.
        ->looked
    **{weirdness >= 3}[Look in the bushes.]
        You look into the bushes, perhaps the only real plants up here or at least the only ones that are happy to have been forcibly shapped into peacocks, flamingos, and other impressive birds. You see her looking up at one such topiary.
        ->found_her


=new_park
There are somethings you sorta don't expect to ever change. So despite how badly the park was due for an update, you never really expected it to happen. When you see the old wooden structure being dismantled, you can't help but stop by.

*[Watch the construction workers.]
    You watch the construction workers. With great speed and efficacy, they tear down rotten wood and replace it. It's all going by so quickly that you don't notice your drink going cold.
    ->found
*(drink)[Sip your drink.]
    You take a sip of your drink. It could be coffee, tea, hot chocolate, really the specifics elude you. All you know for sure is that it's hot, something nice for a chilly day.
    ->found
*{hope >= 2}[Look for her.]
    She's here. You don't know how you know, but it's true.
    **[Look at the construction workers.]
        You examine the construction workers. Maybe her face is hidden amoung them, but as you reach for the memory of it, you realize you don't have it.
        ->looked
    **[Look at the swing set.]
        You look at the swing set, the only remenant of your childhood that somehow in good enough shape to not be replaced. You can feel she's here somewhere.
        ->looked
    **{weirdness >= 3}[Look behind you]
        You look behind you. Sure enough, sneaking up on you with a familiar resoluteness, there she is.
        ->found_her
        
    
=found_her
    *(whomst)[Who is she?]
        You think about her and try to remember. Her black hair falling down in waves, no it was auburn, or was it a sun-bleached golden. The curves of her face, sharp, round, square- everything she could be flashes before your eyes. All you're left with, is her voice.
                ->promised
    *{desire >= 1}"Eris."
        Her face comes into full focus. It's a little older, a little more worn, but it's still her. You wonder why, just for a moment, you thought you might not recognize it. She notices you. There's neither joy nor disgust in her gaze, just acceptance.
                ->promised
    *[Leave.]
        You don't know why you turn your back now, when she's so close, but you do. Maybe your scared you didn't keep your promise, maybe you just want to know what happens if you get out of here. You leave this place that's not a place and can't look back.
            **True as true is.->DONE
            
=looked
You search for her, but you don't see her. This place could be anywhere and you still wouldn't see her. It doesn't make sense, but you know it's true and it's driving you a little mad.
->found
    

=found
Someone taps you on the back. "Hey, Jane."

It's Eris, a older, more tired maybe, but it's still her.
*{bravery >= 1}"Hey!"
*"Oh, hi."
*[Say nothing.]

-{punch or drink or converse:
    {punch:
    "I see you got some suspicious punch there, I was coming to get some myself," she says. "Care if I join you?"
    {tipsy: You stumble a little and she grabs your arm. "Seems like it's a little strong, maybe I shouldn't actually. Let's find ourselves somewhere to sit."}
    }
    {drink:
    "Hey, fancy seeing you here," she says warmly. "Long time, no see."
    }
    {converse:
    "Mind if I but in?" she asks. The person you were talking to politely excuses themselves.
    }
-else:
    "Let's go find somewhere to talk," she says. You find a comfortable spot and sit down.
}
->promised



== promised ==
"So, what have you been up to? {not old_souls.found_her.whomst:" she asks. |}Anything new?
*{bravery <= 0}"No, not really."
    "Oh, that's a shame."
*{bravery >= 1}"Yeah, tons."
    "Oh really? Like what?"
    **{StuffHappens.happy.new_yes}"I quit my job."
        "Oh?"
        
        "Yeah, I hated it, so I thought I'd try something new."
        
        "Well, that's great!"
    **"I went skydiving recently."
        "Isn't that super dangerous?"
        
        "Less dangerous than driving."
        
        "Yeah, but you drive way more than you skydive."
        ***"I guess you're right."
            "Per usual."
        ***{weirdness >= 1}"Correct, however this type of skydiving utilizes reverse gravity."
        
            "What the heckles is that?"
                ****"When you shoot a whole lot of air at the ground right before you land."
                    "Aren't you supposed to pull the parachute like way before that?!?"
                    
                    "Technically, yes."
                    
                    "Technically???"
                    
                ****"When you temporarily reverse gravity."
                    "Woah, you can do that?"
                    
                    "Yep." You feel the world bending to fit that reality.
                    
                    "That's awesome."
                ****"When you do it in an airplane."
                    "So...like the airplane is diving?"
                    
                    "Yeah, it reduces a lot of the risk."
                    
                    "Oh, huh. That's really cool."
    **"I took up baking."
        "Oh, nice. I've always wanted to do that. Never found the time."
-->questions
=questions
*(doing)"What have you been doing?"
    "Oh, you know. Stuff."
    **{hope >= 1}"It's going well?"
        "Yep! I just sold my first big piece actually."
        ***{weirdness >= 1}"Awesome sauce!'
            "Heck yeah!" 
            ->questions
        ***"Good for you!"
            "Thanks!"
            ->questions
        ***"Good for you."
            "Yep."
            ->questions
    **{hope <= 0}"It's not going well?
        "No, not really...The art market is just down right now."
        ***"Oh, I'm sorry to hear that."
            "Yeah, me too. It just sorta is how it is."
            ->questions
        ***"Oh."
            "Yeah."
            ->questions
    **{bravery >= 1}"What kind of stuff?"
        "I'm trying to do art, I guess? I'm working as a nurse to keep off the student loan sharks, but that's what I working towards."
        ***{weirdness >= 1}[Joke]
            "Didn't know that you had to go to school to be a loan shark."
            
            "HA, yeah I didn't either. The major probably isn't offered everywhere."
            ->questions
        ***"Nice."
            "Yep."
            ->questions
    **{bravery <= 1}"Oh."
        "Mhm"
        ->questions
*(family)"How's your family?"
    "They're fine."
    **{hope >= 1}"Are they happy?"
        "Yeah, I think so. Happy as they can be."
        ***{bravery >= 1}"Are you happy?"
            "I don't know. I want to be."
            ->questions
        ***{bravery <= 0}"That's good."
            "Yeah it is."
            ->questions
    **{hope <= 1}"Anyone die?"
        "Yeah, my grandma did, but that's to be expected right? Everyone get's older."
        ***"I'm sorry for your loss."
            "Thanks. It's been a long time, but...scars fade, but never go away."
            ->questions
        ***{weirdness >= 1}"Not everyone."
            "What do you mean?"
            
            "Well, like in a game right? If you don't know what age they are to begin with, how can you tell if they're getting older?"
            
            "Huh. I've never thought about it like that."
            ->questions
*{doing and family}[A pause.]->pause
=pause 
There's a pause in the conversation.
"So, did you keep our promise?"{not old_souls.found_her.whomst: Eris looks at you expectantly.}

When she asks you this, you feel your answer more than think it.

*{promise.stay}[True is...]-> stay
*{promise.change}[True is..] -> change
*{promise.want}[True is...] -> want
*{promise.self}[True is...] -> self

= stay
{(weirdness == y_weirdness) and (bravery == y_bravery) and (hope == y_hope):
    ~promise_kept = true
    "Yep, I haven't changed a bit. The same as I've always been."
    ->satisfied
-else:
    ~promise_kept = false
    "No, I've changed a lot."

}

= change
{not (weirdness == y_weirdness) and not (bravery == y_bravery) and not(hope == y_hope):
    ~promise_kept = true
    "Yeah, I've changed a lot. I'm definitely different."
    ->satisfied
-else:
    ~promise_kept = false
    "I mean, no, I don't think I really did. Some parts of me are still exactly the same as they were."
   
}

= want
{desire >= 5:
    ~promise_kept = true
    "Yeah, I did. I've wanted a lot out of this life."
    ->satisfied
-else:
    ~promise_kept = false
    "No, I didn't. At least, I don't think I wanted as much as I could have."

}


= self
{weirdness >= y_weirdness:
    ~promise_kept = true
    "Of course, I did. How could I not? I'm still a weird as I used to be, maybe even more."
    ->satisfied
  - else:
    ~promise_kept = false
    "No, I didn't.{weirdness < 0: I...I don't know. I think I forgot how to see the fun in things. | I'm still a little weird, just not as much as I was.}"
}



== satisfied ==
"You kept it.{not old_souls.found_her.whomst:" She looks relieved. "|. }You really did."
*{hope <= 0}"Why are you so surprised?"
    "I...you know, you keep hoping for something for so long, you start to wonder if it's right to have hoped at all{not old_souls.found_her.whomst:," she says. "|. }You know the feeling?"
    
    **"Not really."
    **"Sort of"
    
    --"Oh." 
        ->next_up
*{hope >= 1}"Did you keep yours?"
    "I did. I always do{not old_souls.found_her.whomst:," she says.|."}
    ->truth
    

== unsatisfied ==
"Oh{not old_souls.found_her.whomst:," she says. |."}There's an uncomfortable silence between the two of you that you've never had before.

*{hope >= 1}"There's still time."
    "I don't think there is{not old_souls.found_her.whomst:," she says. She scrunches up her face. "|. }Dammit. I thought this would be the one."
    **{weirdness <= 0}"The one what?"
        "The one that's true."
        ->next_up
    **{weirdness >= 1}"I'm sorry it isn't."
        "I know. I'm sorry too."
        ->next_up
*{hope <= 0}"I'm sorry."
    "I know you are. You always are."
    ->next_up

== next_up ==
The two of you stew together in this place. This place that feels so real and true and right, and yet it isn't. You both know it. It isn't true, or at least, it isn't as true as it could be.
    ->END

== truth ==
And that's the truth. It's complicated, it's confusing, but that's what it is. True as true is.

{not old_souls.found_her.whomst: The world melts away gently. Everything that has been and could be fades away until it's just you and her.| Even the concept of voices has left now. It's just you and her.}
*{bravery >= 1} I'm scared.
    **It's okay to be scared.
    **I am too.
*{bravery <= 0} It's going to be okay.
    **It might not be.
    **I hope so.

-
*{hope >= 1}Are things going to get better?
    **I hope so. No matter what, we'll face it together.
    **Maybe they will. Maybe they won't.
*{hope <= 0}I'm worried things won't get better.
    **I don't know if things can get better.
    **I hope they will.

-
*{weirdness <= 0}I'm not ready.
    **It would be weird if you were.
    **I'll help you get ready.
*{weirdness >= 1}I'm ready.
    **Me too.
    **I'm right behind you.
-
*Eris?
    **Jane?
        *** I love you.
            ****I love you too.
-->epilogue

== epilogue ==
->END

















