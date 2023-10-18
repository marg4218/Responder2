

function selectText(nodeId) {
    const node = document.getElementById(nodeId);

    if (document.body.createTextRange){
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Unsupported Brower");
    }
};



const clickable = document.querySelector('.click-me');
clickable.addEventListener('click', () => selectText('target'));

