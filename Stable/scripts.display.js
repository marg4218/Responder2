function updatePreview()
{
    var preview = document.getElementById('preview_pane');
    preview.innerHTML = '';

    
    // Defenses
    var preview = document.getElementById('preview_pane');

    preview_array[0] = defense_loader;

    var n = 1;
    for (let i in preview_array[0])
    {
        if (preview_array[0][i]) 
        {
        let new_par_no = document.createElement('p');
            new_par_no.setAttribute('class', 'defense_par_no');
            new_par_no.innerText = nth(parseInt(n)) + ' Defense';

        let new_par_content = document.createElement('p');
            //new_par_content.innerText = '\t' + preview_array[0][i]; //tab not working on defenses - yet
            new_par_content.innerHTML = '<pre>'+' '.repeat(12) + preview_array[0][i] + '</pre>'; 

        preview.appendChild(new_par_no);

        preview.appendChild(new_par_content);

        n = n + 1;
        };
    };


    // Responses - the merits are always the last defense!

    preview_array[1] = response_loader;

    let new_par_no = document.createElement('p');
        new_par_no.setAttribute('class', 'defense_par_no');        
        new_par_no.setAttribute('id', 'response_defense');
        new_par_no.innerText = nth(parseInt(n)) + ' Defense';
        
    preview.appendChild(new_par_no);

    // display responsive nature of this defense
            
    let responses_defense = document.createElement('p');
    responses_defense.setAttribute('class', 'response_par_text');
    responses_defense.innerHTML = '<pre>' + ' '.repeat(12) + 'The allegations of the Complaint in this action which are not herein admitted are hereby denied, subject to which Defendant hereby responds to the respective, enumerated allegations as follows:</pre>';

    preview.appendChild(responses_defense);


    var r = 1; // Response enumerator
    for (let i in preview_array[1])
    {
        if (preview_array[1][i])
        {

        // Enumerate the response
        let new_par_no = document.createElement('p');
            new_par_no.setAttribute('class', 'response_par_no');
            new_par_no.innerText = r + '.';
            r = r+1;

        preview.appendChild(new_par_no);
            
        let new_par_text = document.createElement('p');
            new_par_text.setAttribute('class', 'response_par_text');
            new_par_text.innerHTML = '<pre>' + ' '.repeat(12) + preview_array[1][i] + '</pre>' ;

        

        preview.appendChild(new_par_text);

        };
    };
}
