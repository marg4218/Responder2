function listDefCategories()
{
    
    // Create Div's for each category
    const parent = 'defenses_div';
    const def_cats = {
        'defenses_mand': "Mandatory",
        'defenses_cap' : "Capacity", 
        'defenses_cont': "Pltf Contributory", 
        'defenses_p3': "3rd Party", 
        'defenses_ele': "Elemental", 
        'defenses_juri': "Jurisprudential"
    }

    for (var i of Object.keys(def_cats))
    {
        let new_div = newDiv(parent, i);
            new_div.setAttribute('class', 'defense_cats')
            new_div.innerHTML = def_cats[i];
    }
}

// Generates lists of defenses from 'defenses.js'

function appendCount(id, number){
    let div = document.getElementById(id);
    let sub = document.createElement('p');
        sub.innerText = number;
    div.appendChild(sub);
}

function listDefenses() {
    var def_count = 0;

    for (var i in mand_keys)
    {
        let new_def = new Defense(mand_keys[i], 'defenses_mand', mand_vals[i], def_count);
        def_count = def_count + 1;
    }

    for (var i in cap_keys)
    {
        let new_def = new Defense(cap_keys[i], 'defenses_cap', cap_vals[i], def_count);
        def_count = def_count + 1;
    }
    
    for (var i in cont_keys)
    {
        let new_def = new Defense(cont_keys[i], 'defenses_cont', cont_vals[i], def_count);
        def_count = def_count + 1;
    }
    
    for (var i in p3_keys)
    {
        let new_def = new Defense(p3_keys[i], 'defenses_p3', p3_vals[i], def_count);
        def_count = def_count + 1;
    }
    
    for (var i in ele_keys)
    {
        let new_def = new Defense(ele_keys[i], 'defenses_ele', ele_vals[i], def_count);
        def_count = def_count + 1;
    }
    
    for (var i in juri_keys)
    {
        let new_def = new Defense(juri_keys[i], 'defenses_juri', juri_vals[i], def_count);
        def_count = def_count + 1;
    }
}


class Defense {
    constructor(name, category, content, count) {
        this.name = name;
        this.category = category;
        this.content = content;
        this.count = count;

        this.createDef();
        this.numberDef();
        this.clickMe();
    }

    createDef() {

        let def = newDiv(this.category, this.name);
            def.setAttribute('class', 'defense_options');
            def.innerHTML = this.name;
            

        let content = document.createElement('p');
            content.innerHTML = this.content;
            content.setAttribute('hidden', '');

        def.appendChild(content);
    }

    numberDef() {
        let div = document.getElementById(this.name);
        let sub = document.createElement('p');
            sub.innerText = this.count;
            sub.setAttribute('hidden','');
        div.appendChild(sub);

    }

    clickMe() {
        document.getElementById(this.name).addEventListener('click', loadDef);
    }
}

//////////////////////////////////////////
///  ACTION ON DEFENSES

function loadDef () {
            
    let full_def = this.firstElementChild.innerText;
    let def_order = this.lastElementChild.innerText;
    
    if (!defense_loader.includes(full_def))
    {
        defense_loader[def_order] = full_def;
        console.log("Adding Defense No. " + def_order);
    } else {
        let index = defense_loader.indexOf(full_def);
        defense_loader[index] = null;
        console.log("Removing Defense No. " + def_order);
    };

    updatePreview();
    console.log(defense_loader);

    
    // CSS Action
    flipDefColor(this.id);
}

// can't be cool (reference the css); must write-in the prefered styles
function flipDefColor(id) {
    var bg = document.getElementById(id);

    if (bg.style.color != 'yellow') {
        bg.style.color = 'yellow';
    } else {
        bg.style.color=  'white';
    };
}
