

function copyFunction1() {
    let text = document.querySelector('#preview_pane');
    navigator.clipboard.writeText(text.textContent);
    window.alert('copy1 that!');
};

function copyFunction2() {
    try {
        const content = (document.getElementsByClassName('copy_me')[0].innerHTML);
        const blobInput = new Blob([content], {type: 'text/html'});
        const clipboardItemInput = new ClipboardItem({'text/html' : blobInput});
        navigator.clipboard.write([clipboardItemInput]);
    }
    catch(e) {
        console.log(e);
    }
    window.alert('copy2 that!');
};

function copyFunction3() {
    
    


};


function makeCopyButton() {
    document.getElementById('preview_title').addEventListener('click', copyFunction3);
}