/*
    HTML Factory is my attempt to recreate a React-type framework from the ground up, simplified for amateur web development.

    Ideally, this package should eliminate the vast majority of time working directly with HTML while facilitating a programmatic approach to the W3 presentation layer.
*/


// Note: Every 'id' attribute should be unique.  Shared attribute tagging belongs with the 'class' attribute.
function getId(id) {
    return document.getElementById(id);
}


function makeDiv(id, parent = 'body'){
    let new_div = document.createElement('div');
    new_div.id = id;
    parent.appendChild(new_div);
    return new_div;
}

var newDiv = function(parent_id, new_id) 
{
    let new_div = document.createElement("div");
    new_div.id = new_id;

    let parent = document.getElementById(parent_id);
    parent.appendChild(new_div);

    return new_div;
};


/// Facilitates dependency chain loading flows.
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}