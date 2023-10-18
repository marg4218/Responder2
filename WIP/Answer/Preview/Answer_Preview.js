
function makeAnswerPreview() {
    let preview_pane_div = newDiv('preview_div', 'preview_pane_div');

    let preview_pane = newDiv('preview_pane_div', 'preview_pane');
    preview_pane.setAttribute('class', 'copy_me');

    preview_pane_div.appendChild(preview_pane);

    makeCopyButton(); // root/Answer/Copy/copyButton.js

}
