
function makeAnswerPreview() {
    let preview_pane_div = newDiv('preview_div', 'preview_pane_div'); // globals.js

    let preview_pane = newDiv('preview_pane_div', 'preview_pane');

    preview_pane_div.appendChild(preview_pane);

    //setPreviewCopy();
}

function setPreviewCopy() {
    var copy_button = document.getElementById('preview_title');

        copy_button.addEventListener('click', copyFunction);

};

function copyFunction() {
    let preview_text = document.getElementById('preview_pane');
    preview_text.select();
    navigator.clipboard.writeText(preview_text.value);
    return 1;
};