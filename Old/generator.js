
function generateInputs()
{
    
    let doc = document.getElementById("doc_choice").value;


    if (document.getElementById("response_paragraphs_total").value < 0)
    {
        alert("Generating positive number of paragraphs.");
        document.getElementById("response_paragraphs_total").value = Math.abs(document.getElementById("response_paragraphs_total").value);
    }

    let pars = document.getElementById("response_paragraphs_total").value;
    
    switch (doc)
    {
        case 'Answer':
            disableHeadInputs();
            makeAnswer(pars); // Answer.js
            break;
        case 'RFA':
            disableHeadInputs();
            makeRFA(pars);
            break;
        case 'Other':
            disableHeadInputs();
            makeOther(pars);
            break;
        case '':
            alert('Please select a Document Type from the drop-down list.');
            break;
        default:
            alert('Unknown Error.  Please contact Morris.');
            break;
    }

}

function disableHeadInputs()
{
    document.getElementById("doc_choice").setAttribute("disabled", "");
    document.getElementById("response_paragraphs_total").setAttribute("disabled", "");
    document.getElementById('inputs_button').setAttribute('id', 'dead_button');
    document.getElementById('dead_button').setAttribute('disabled','');

    document.getElementById('lockout_text').removeAttribute('hidden');
}
