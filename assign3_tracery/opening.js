/* Init variables */
var current_time = '0:00XM';
var goal_time = '0:00XM';
var store_owner = '';
var turn = 0;
var items = {
    'all_items': [
        "timepiece", "looking-glass", "silver cutlery", "taxidermy", "porcelain doll", "typewriter", "oil lamp", "teacup",
        "bloody knife", "candle", "eyeball", "dirty rag", "chainsaw", "mask", 
        "horse", "pistol", "bag of coins", "cowboy hat", "lasso", "mustache",
        "smile", "computer chip", "flower", "floral dress", "sunshine", "money",
        "cigar", "gun", "cement", "smoke", "fedora", "tie"
                ],
    'store_items': ["timepiece", "looking-glass", "silver cutlery", "taxidermy", "porcelain doll", "typewriter", "oil lamp", "teacup"],
    'horror_items': ["porcelain doll", "taxidermy", "bloody knife", "candle", "eyeball", "dirty rag", "chainsaw", "mask"],
    'western_items': ["oil lamp", "looking-glass", "horse", "pistol", "bag of coins", "cowboy hat", "lasso", "mustache"],
    'satire_items': ["teacup", "silver cutlery", "smile", "computer chip", "flower", "floral dress", "sunshine", "money"],
    'noir_items': ["typewriter", "timepiece", "cigar", "gun", "cement", "smoke", "fedora", "tie"]
};

/* Grammer flattening code */
function choose_grammer(grammer, stem){
    chosen = tracery.createGrammar(grammer)
    return chosen.flatten(stem)

}

/* Reference code from Cassandra */
/* let grammars = {
    GenerationSimple : function (gram){
    //console.log(gram)
            g = tracery.createGrammar(gram);
            return g.flatten("#origin#")
        }
    
    } */

$('#generate_intro').click(function(){
    /* Defining Main Grammar */
    var init_desc = {
        "Name": [],
        "Item": [],
        "Time": ['#gibberish#'],
        "gibberish": ['@', '^', "!", "%", "*", "&", "#gibberish##gibberish#", "#gibberish##gibberish#", "#gibberish##gibberish#", "#gibberish##gibberish#"],
        "origin":["#line#. #line2#. #line3#. #line4#. #line5#. The time is illegible, but you know that you need to find out when they're coming back, sooner rather than later."],
        "line":["A vision flashes before your eyes.<i> #shopName#</i>, #Item.a# shop"],
        "shopName":["#Name#'s #noun.capitalize#", "#Name#'s"],
        "noun":["sojourn", "market", "alley", "emporium", "bounty", "shadow", "palace", "cauldron", "cache", "hoard"],
        "line2":["Inside, #Item.s# of every #adj# imaginable line the walls and ceiling. You can hardly see the floor"],
        "adj":["type", "size", "shape", "animal", "age", "pattern", "color", "#adj# and #adj2#"],
        "adj2":["moisture", "thickness", "posture", "age", "material "],
        "line3":["#sound.s.capitalize# and louder #sound.s# #soundVerb# all around you"],
        "sound":["click", "ding", "whirl", "thwak", "dong", "chirp", "hiss", "silence"],
        "soundVerb":["murmur", "ring out", "scream out", "echo", "buzz" ],
        "line4":["It smells like #adj3# #noun2##smellDesc#"],
        "adj3":["rotting", "festering", "sickly-sweet", "moldy", "bleached", "musty"],
        "noun2":["eggs", "sawdust", "blood", "flesh", "mulch", "hides"],
        "smellDesc":[", but unfortunately it's a vision so you can't plug your nose", ", just like your grandmother's house", ", strong and sweet like kettle corn at the county fair", "", "", "", "", "", ""],
        "line5":["A #adj4#, #adj5# sign on the front desk assures you that '#Name#' or whoever runs this place will return at #Time#"],
        "adj4":["yellow", "pink", "blue", "green", "brown"],
        "adj5":["cracked", "faded", "hastily scrawled", "chipped", "haunted"]
        };
    
    /* Manually Adding Variable Functionality */
    var names = {
        "name":["Morgan", "Esther", "Janice", "Alex", "Doris", "Roy", "Harper", "Beatrice", "Callum", "Zephyr", "Ophelia"]
    }
    var chosen_name = choose_grammer(names, '#name#');
    store_owner = chosen_name;
    
    init_desc.Name.push(chosen_name);

    var items = {
        "item":["timepiece", "looking-glass", "silver cutlery", "taxidermy", "porcelain doll", "typewriter", "oil lamp", "teacup"]
    }
    var chosen_item = choose_grammer(items, '#item#');
    init_desc.Item.push(chosen_item);

    var time = {
        "time":["#hour#:#minute#"],
        "hour":['00', "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", '23'],
        "minute":['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
    }
    var chosen_time = choose_grammer(time, '#time#');
    /* init_desc.Time.push(chosen_time); */

    /* Set current time and goal time based on random time */
    var now_time = new Date()

   
    minute = now_time.getMinutes()
    var current_minutes = (( minute <= 9) ? '0' + minute : minute);
    
    current_time = now_time.getHours() + ':' + current_minutes;
    goal_time = chosen_time;

    /* Flattening main grammer */
    var chosen_intro = choose_grammer(init_desc, '#origin#');

    /* Displaying flattened grammer*/
    $("#intro_desc").append("<br><br>And then...<br><br>" + chosen_intro);

    /* Hide into button */
    $('#generate_intro').hide();

    /* Show time main */
    $('#time_main').show();

    /* Show current time in time main */
    $('#current_time').html(current_time);

    /* Testing in console */
    /* console.log(chosen_name, chosen_item, chosen_time);
    console.log(init_desc.Name, init_desc.Item); */
})


$('#time_shift').click(function(){
    
    /* Get entered time */
    entered_time = $('#entered_time').val()
    if (entered_time == goal_time){
       $('#time_shift').hide();
       $('#mood_indicator').html(gameEnd());
        console.log('success!', store_owner);
    }
    else if (entered_time == ''){
        console.log('Enter a time.');
        $('#mood_indicator').html('But not yet. Enter a time.');
    }
    else {
        turn += 1;
        /* Change Current Time */
        current_time = entered_time;
        var get_item = $('#item_used').val();
        /* console.log(get_item); */
        $('#current_time').html(current_time);
        $('#mood_indicator').html('The clock ticks.<br><br>' + timeChange(entered_time, get_item));

        /* console.log(current_time, 'The clock ticks') */
    };

    /* Test current time changes */
    /* console.log(current_time)
    console.log($('#entered_time').val()) */
})


function timeChange(time, item){
    var result = ''

    /* console.log(items['all_items'].includes(item)) */
    if (items['all_items'].includes(item)){
        result += parseItem(time, item) + '<br><br>'
    }
    else if (item){
        result += 'The item inputed was not recognized. It blinks out of existence.<br><br>'
    }

    var [hour, min]= parseTime(time);
    var genre = getGenre(hour);
    result += genreChallenge(genre);

    return result
}

function parseTime(time){
    var hour = time.slice(0,2);
    var min = time.slice(3);
    return [hour, min];
}

function parseItem(time, item){
    var result = "";
    var [hour, min] = parseTime(time);
    var [g_hour, g_min] = parseTime(goal_time);

    var int_hour = parseInt(hour)
    var int_g_hour = parseInt(g_hour)
    var int_min = parseInt(min)
    var int_g_min = parseInt(g_min)

    var genre = getGenre(int_hour)

    console.log(item != "taxidermy")
    
    if (genre == 1 && items['horror_items'].includes(item)){
        if (item != "porcelain doll" && item != "taxidermy"){
            result += test_equal(int_hour, int_g_hour, "hour")
        }
        else{
            result += test_equal(int_min, int_g_min, "minute")
        }
        
    }
    else if (genre == 2 && items['satire_items'].includes(item)){
        if (item != "teacup" && item != "silver cutlery"){
            result += test_equal(int_hour, int_g_hour, "hour")
        }
        else{
            result += test_equal(int_min, int_g_min, "minute")
        }

    }
    else if(genre == 3 && items['western_items'].includes(item)){
        if (item != "looking-glass" && item != "oil lamp"){
            result += test_equal(int_hour, int_g_hour, "hour")
        }
        else{
            result += test_equal(int_min, int_g_min, "minute")
        }

    }
    else if(genre == 4 && items['noir_items'].includes(item)){
        if (item != 'timepiece' && item != 'typewriter'){
            result += test_equal(int_hour, int_g_hour, "hour")
        }
        else{
            result += test_equal(int_min, int_g_min, "minute")
        }

    }
    else{
        result += "That item doesn't do anything here. It returns to your hands, a little wetter than you remember."
    }

    return result

    /* console.log(hour, min, genre)
    console.log(g_hour, g_min) */
    
}

function test_equal(guess, goal, type){
    if (guess < goal){
        return "Your " + type + " guess is less than the correct time."
    }
    else if (guess > goal){
        return "Your " + type + " guess is more than the correct time."
    }
    else{
        return "Your " + type + " guess is equal to the correct time."
    }
}

function genreChallenge(genre){
    var genreGrammer ={
        "horror": ["#horrorPrompts#<br><br>Challenge: #horrorActions#"],
        "horrorActions": ["Tell a scary story.", "Scream. Loudly.", "Complete a dare given to you by the other player(s)."],
        "horrorPrompts": ["#hPrompt1#", "#hPrompt2#", '#hPrompt3#', '#hPrompt1# #hPrompt2#', '#hPrompt3# #hPrompt2#'],
        "hPrompt1": ["There's nothing #horror1#, but #horror2# tells you otherwise."],
        "hPrompt2": ["You thought #horror3# would be a cheap way to spend you weekend. Well, it was definitely cheap."],
        "hPrompt3": ["There's something #horror1#. Don't #horror4#."],

        "horror1": ["behind you", "touching you", "holding your hand", "breathing down your neck"],
        "horror2": ["the smell", "the sweat", "the heat", "the moan"],
        "horror3": ["going to the abandoned factory", "breaking into the old asylum", "sleaping in the cemetary", 
                    "performing a sceance in the woods", "tracking down the #monster#", "playing truth or dare"],
        "monster": ["Jersey Devil", "Bigfoot", "Loch Ness Monster", "Chupacabra", "ghost"],
        "horror4": ["move", "sneeze", "breath", "flinch", "look", "run"],
        
        
        "satire": ["#satirePrompts#<br><br>Challenge: #satireActions#"],
        "satireActions": ["Everything's perfect. Smile for the next #num# turns.", "Profess your 'love' to another player. Adoringly. Sarcastically.", "Flutter your eyes at an inanimate object."],
        "satirePrompts": ["#sPrompt1#", '#sPrompt2#', '#sPrompt1# #sPrompt2#'],
        "sPrompt1":["Don't worry! Everything is #satire1#! Just don't #satire2#."],
        "sPrompt2":["Love is in the air! Isn't it #satire2#? #satire3.capitalize# #satire4#. Just don't think about it. Who needs to think?"],
        "sPrompt3":["It's so simple. All you have to do is #satire3# #satire4# and then you will be happy."],

        "satire1":['great', 'awesome', 'fine', 'dandy', 'spectacular', 'normal', 'perfect'],
        "satire2":['be different', 'step out of line', 'look to hard', 'stop smiling', 'think differently', 'break any rules'],
        "satire3":["marry", 'kiss', 'flirt with', 'idolize', 'latch onto', 'sleep with'],
        "satire4":["the first guy you see", "your professor", "your boss", "anyone", "the barista", "your childhood best friend", "someone"],

        "western": ["#westernPrompts#<br><br>Challenge: Pick an opponent. #westernActions#"],
        "westernActions": ["Immediately start a staring contest.", "Set a timer for 10 seconds. Whoever touches their nose first after the timer goes off, wins.", "Speak with a southern accent for the next #num# turns."],
        "westernPrompts": ["#wPrompt1#", '#wPrompt2#', "#wPrompt2# But, now's not the time. #wPrompt1#"],
        "wPrompt1":["The sun's setting on #western1#. You hop on your horse and set out, #western2#."],
        "wPrompt2":["You stand #bigNum# paces away from your rival, #westernNames#. You hand hovers over your pistol."],

        "western1":["Tombstone", "Dodge City", "Deadwood", "Durango", "Kansas City", "Virginia City", "Alamo"],
        "western2":["alone like you always have been", "unsure of where in the West will need you next", "ready to face the next challenge head on"],
        "westernNames": ['#westernAdj.capitalize# #westernName#', "#westernName2#"],
        "westernAdj":["bad", 'slippery', 'colonel', 'kid', 'ugly', 'honest', 'dastardly', 'wild'],
        "westernName":["Billy", "Cassidy", "Sam", 'Jessie', 'Bonnie', 'Clyde', 'Rose'],
        "westernName2": ['Wild Bill', 'Jesse James', 'Billy the Kid', 'Wyatt Earp', 'Doc Holiday', 'Rose Dunn'],

        "noir": ["#noirPrompts#<br><br>Challenge: #noirActions#"],
        "noirActions": ["First to complete the math problem wins: #bigNum# #symbol# #bigNum#", "Monologue about your day in the style of a detective going over the facts of a case.", "The lights hide the corruption making this city sick. Reveal the last time you lied."],
        "noirPrompts": ["#nPrompt1#", "#nPrompt2#", "#nPrompt3#", "#nPrompt2# #nPrompt1#", "#nPrompt3# #nPrompt1#", "#nPrompt3# #nPrompt2#","#nPrompt1# #nPrompt2# #nPrompt3#"],
        "nPrompt1":["This city's like #noir1# and it's #noir2#. Only you, the best detective on the force, can clean it up."],
        "nPrompt2":["The mob's got this place wrapped around its finger like #noir3# #noir4#."],
        "nPrompt3":["You look out over your city. The #cityPerson# who called you here gives you some space."],

        "noir1":["a rat's nest", "a ticking time boom", "powder keg", "spider's web", "rotten apple", "gilded lead bar"],
        "noir2":["about to explode", "only getting worse", "getting more tangled", "grimey", "rotten to the core", "losing its heart"],
        "noir3":["a fish", "a bear", "a firefly", "a hornet", "a rabbit", "a tiger"],
        "noir4":["on a hook", "in a bear trap", "in a jar", "in a net", "in a snare", "in a cage"],
        "cityPerson": ['dame', 'femme fatale', 'corrupt cop', 'mafia boss', 'collegue', 'politician'],

        

        
        "num": ['2', '3', '4', '5'],
        "bigNum": ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
        "symbol": ["/", "x", "+", "-"]
    }
    var result = ""
    if (genre == 1){
        result += choose_grammer(genreGrammer, "#horror#");
    }
    else if (genre == 2){
        result += choose_grammer(genreGrammer, '#satire#');
    }
    else if(genre == 3){
        result += choose_grammer(genreGrammer, '#western#');
    }
    else if(genre ==4){
        result += choose_grammer(genreGrammer, '#noir#');
    }
    else{
        /* console.log('Something has gone terribly wrong.') */
        result += 'You should not be seeing this message.'
    }

    var item = choose_grammer(items, '#all_items#');
    result += "<br><br>You receive this item if you win or complete the challenge: " + item;
    return result
}

function getGenre(hour){
    if (hour >= 0 && hour <=6){
        console.log('Horror')
        return 1
    }
    else if (hour >= 7 && hour <=11){
        console.log('Satire')
        return 2
    }
    else if (hour >= 12 && hour <=17){
        console.log('Western')
        return 3
    }
    else if(hour >= 18 && hour <= 23){
        console.log('Noir')
        return 4
    }
    else{
        console.log('Something has gone terribly wrong.')
        return -1
    }
}

function gameEnd(){
    var endMessage = "It's time. "
    endMessage = store_owner + " is back."

    if (turn <= 50) {
        endMessage = "Just as a voice that's not quite whole screams out your name, you flash back to reality. You're safe, back in front of your computer. Back in reality..."
    }
    else{
        endMessage = "Their form uncurls itself from behind the counter. They smile, but you don't know where their mouth is. With a voice that's too loud and too soft all at once, it calls out your name and you fade from existence..."
    }
    return endMessage
}



/* Generates all possible minute values
var time = []
for (let i = 0; i <= 5; i++){
    for (let j = 0; j <= 9; j++){
        time.push(i.toString() + j.toString());
    }
}
console.log(time); */