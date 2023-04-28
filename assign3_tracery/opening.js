function choose_grammer(grammer, stem){
    chosen = tracery.createGrammar(grammer)
    return chosen.flatten(stem)
}

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
        "origin":["#line#. #line2#. #line3#. #line4#. #line5#."],
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
        "line5":["A #adj4#, #adj5# sign on the front desk assures you that '#Name#' or whoever runs this place will return at #time#"],
        "adj4":["yellow", "pink", "blue", "green", "brown"],
        "adj5":["cracked", "faded", "hastily scrawled", "chipped", "haunted"],
        "time":["rotting", "festering", "sickly-sweet", "moldy", "bleached", "musty"],
        };
    
    /* Manually Adding Variable Functionality */
    var names = {
        "name":["Morgan", "Esther", "Janice", "Alex", "Doris", "Roy", "Harper", "Beatrice", "Callum", "Zephyr", "Ophelia"]
    }
    var chosen_name = choose_grammer(names, '#name#');
    init_desc.Name.push(chosen_name);

    var items = {
        "item":["timepiece", "looking-glass", "silver cutlery", "taxidermy", "porcelain doll", "typewriter", "oil lamp", "teacup"]
    }
    var chosen_item = choose_grammer(items, '#item#');
    init_desc.Item.push(chosen_item);

    /* Flattening main grammer */
    var chosen_intro = choose_grammer(init_desc, '#origin#');

    /* Displaying flattened grammer*/
    $("#intro_desc").html(chosen_intro);

    

    /* Testing in console
    console.log(chosen_name, chosen_item, chosen_intro);
    console.log(init_desc.Name, init_desc.Item) */
})
