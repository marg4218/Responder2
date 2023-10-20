function makeAnswer(pars)
{
    console.log(`Generating Answer Responder for ${pars} paragraphs.`)

    setAnswerLayout();  // see below

    listDefCategories(); // list_defenses.js
    listDefenses();      // list_defenses.js

    promptResponses(pars); // responses.js

    makeAnswerPreview();  // Answer_Preview.js
}


function setAnswerLayout()
{
    // top level: answer_div
    let answer_prompts = newDiv('dynamic_disp', 'answer_div'); // globals.js

    /// Defenses
    let defenses_column = newDiv('answer_div', 'defenses_div');
        defenses_column.setAttribute('class', 'answer_panes');

    let defenses_title = newDiv('defenses_div', 'defenses_title');
        defenses_title.setAttribute('class', 'answer_div_titles');
        defenses_title.innerHTML = "DEFENSES";

    /// Responses
    let responses_column = newDiv('answer_div', 'responses_div');
        responses_column.setAttribute('class', 'answer_panes');

    let responses_title = newDiv('responses_div', 'responses_title');
        responses_title.setAttribute('class', 'answer_div_titles');
        responses_title.innerHTML = "RESPONSES";
        
    /// Preview    
    let preview_column = newDiv('answer_div', 'preview_div');
        preview_column.setAttribute('class', 'answer_panes');

    let preview_title = newDiv('preview_div', 'preview_title');
        preview_title.setAttribute('class', 'answer_div_titles');
        preview_title.setAttribute('id', 'preview_title');

        preview_title.innerHTML = "PREVIEW (copy)";
        preview_title.addEventListener('click', copyFunction);
};

function copyFunction() {
    let text = document.getElementById('preview_pane');
    text.select();
    navigator.clipboard.writeText(text.value);
    return 1;
};