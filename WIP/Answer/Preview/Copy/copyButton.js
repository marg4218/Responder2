


function copyPreview() {

    const pane = document.getElementById('preview_pane');
    const pane_text = pane.innerHTML;

    const type = "text/html";
    const blob = new Blob([pane_text], {type});
    const data = [new ClipboardItem( { [type]: blob })];

    navigator.clipboard.write(data);
};

function setCopyButton() {

    const pane_title = document.getElementById('preview_title');
    pane_title.setAttribute('onclick', 'copyPreview();');
};