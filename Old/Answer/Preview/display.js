function updatePreview()
{
    var preview = document.getElementById('preview_pane');
    preview.innerHTML = '';

    
    // Defenses
    var preview = document.getElementById('preview_pane');

    preview_array[0] = defense_loader;

    var n = 1; // Enumeration counter
    for (let i in preview_array[0])
    {
        if (preview_array[0][i]) 
        {
        let new_par_no = document.createElement('p');
            new_par_no.setAttribute('class', 'defense_par_no');
            new_par_no.innerText = nth(parseInt(n)) + ' Defense';

        let new_par_content = document.createElement('p');
            new_par_content.innerText = '\t' + preview_array[0][i];

        preview.appendChild(new_par_no);

        preview.appendChild(new_par_content);

        n = n + 1;
        };
    };


    // Responses - the merits are always the last defense!
    let response_defense = n;

    preview_array[1] = response_loader;

    let new_par_no = document.createElement('p');
        new_par_no.setAttribute('class', 'defense_par_no');        
        new_par_no.setAttribute('id', 'response_defense');
        new_par_no.innerText = nth(parseInt(n)) + ' Defense';
        
    preview.appendChild(new_par_no);

    var r = 1; // Response enumerator
    for (let i in preview_array[1])
    {
        if (preview_array[1][i])
        {
        let new_par_no = document.createElement('p');
            new_par_no.setAttribute('class', 'response_par_no');
            new_par_no.innerText = r + '.';
            r = r+1;

        preview.appendChild(new_par_no);
            
        let new_par_content = document.createElement('p');
            new_par_content.setAttribute('class', 'response_par_text');
            new_par_content.innerText = '\t' + preview_array[1][i];

        preview.appendChild(new_par_content);
        };
    };
}
