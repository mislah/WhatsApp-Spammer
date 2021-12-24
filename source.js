//Send the message n times if #n# is at the end of the message
document.addEventListener('click', () => {
    document.querySelectorAll("[contenteditable='true']")[1].addEventListener("keydown", event => {
        if(event.keyCode == 13){
            var msgBox = document.querySelectorAll("[contenteditable='true']")[1];
            msgBox.innerHTML = msgBox.innerHTML.replace('<br>','');
            if(msgBox.innerHTML.search(/#\d+#$/)!=-1){
                event.preventDefault();
                const type = new UIEvent('input', {bubbles: true, cancelable: true, view: window});
                const enter = new KeyboardEvent('keydown', {keyCode: 13, bubbles: true, view: window});
                var [message, count] = msgBox.innerHTML.split(/#(\d+)#$/);
                msgBox.innerHTML = '';
                count = parseInt(count);
                while(count--) {
                    msgBox.innerHTML = message;
                    msgBox.dispatchEvent(type);
                    msgBox.dispatchEvent(enter);
                }
            }
        }
    });
});
