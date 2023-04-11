
function promptResponses(pars) {
    var resp_div = newDiv('responses_div', 'responses_diplay');
    makeResponseTable(resp_div);

    for (let step = 0; step < pars; step++) 
    {
        responsePrompts(step+1);
    }
}


function makeResponseTable(div) {
    let response_table = document.createElement('table');
        response_table.setAttribute("id", "resp_table");
        response_table.setAttribute("style", "margin-left:auto; margin-right:auto");
        response_table.innerHTML = `
    <tr class="response_headers">
        <th>Par. No.</th>
        <th>Boilerplate</th>
        <th>Text (editable)</th>
        <th>Lock/Load</th>
    </tr>
    `;
    
    div.appendChild(response_table);
}

function responsePrompts(resp_no)
{   
    let next_response = document.createElement("tr");
        next_response.setAttribute('class', 'response_row');

    next_response.innerHTML = `
    
        <td style="text-align:center">${resp_no}</td>
        <td>
            <select id="resp_${resp_no}_boilerplate" onchange="hoist_response(${resp_no})">
                
                <option value=" " selected="true"> </option>
                <option value="admit">Admit</option>
                <option value="deny">Deny</option>
                <option value="insuff">Insufficient info</option>
                <option value="legal">Legal Conclusion</option>
                <option value="other">Other</option>
            
            </select>
        </td>
        <td>
            <textarea id="resp_${resp_no}_text" style="width:400px"></textarea>
        </td>
        <td>
            <input type="checkbox" id="resp_check_${resp_no}" label="Lock:" onclick="loadResponse(${resp_no})"></input>
        </td>

    `;

    document.getElementById("resp_table").appendChild(next_response);
}

// This function is called when the user selects which Boilerplate response.  It load the boilerplated in the respective "To Load" textbox
function hoist_response(resp_no)
{
    let this_resp = document.getElementById(`resp_${resp_no}_boilerplate`).value;
    let response_long = document.getElementById(`resp_${resp_no}_text`);

    if (this_resp == "admit")
    {
        response_long.innerText = `Defendant admits the allegation(s) contained within paragraph ${resp_no} of Plaintiff's complaint.`;
    }
    else if (this_resp == "deny")
    {
        response_long.innerText = `Defendant denies the allegation(s) contained within paragraph ${resp_no} of Plaintiff's complaint.`;
    }
    else if (this_resp == "insuff")
    {
        response_long.innerText = `Defendant, after reasonable investigation, lacks sufficient information to admit or deny the allegation(s) contained within paragraph ${resp_no} of Plaintiff's complaint.`;
    }
    else if (this_resp == "legal")
    {
        response_long.innerText = `The allegation(s) contained within paragraph ${resp_no} of Plaintiff's complaint call(s) for a legal conclusion not subject to factual admission or denial.`;
    }
    else if (this_resp == "other")
    {
        response_long.innerText = "";
    };
    
    let resp_height = response_long.scrollHeight;
    
    response_long.setAttribute("style", `width:400px; height:${resp_height}px`);
}


function loadResponse(resp_number)
{
    var response = document.getElementById(`resp_${resp_number}_text`).value;

    response_loader[resp_number] = response;
    console.log(response);

    updatePreview();

    toggleResponseEdit(resp_number) 
}


function toggleResponseEdit(resp_number) {
    var response = document.getElementById(`resp_${resp_number}_text`);
    let checkbox = document.getElementById(`resp_check_${resp_number}`);
    let boiler = document.getElementById(`resp_${resp_number}_boilerplate`);
        if (checkbox.checked)
        {
            response.setAttribute("disabled","");
            boiler.setAttribute("disabled", "");
        } else
        {
            response.removeAttribute("disabled");
            boiler.removeAttribute("disabled");
        }
}