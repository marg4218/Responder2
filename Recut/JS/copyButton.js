

document.getElementById('preview_title').addEventListener('click', copyFunction);

function copyFunction() {
    let text = document.getElementById('preview_pane');
    navigator.clipboard.writeText(text);
    return 1;
};