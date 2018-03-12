function saveTextAsFile() {
     var textToWrite = document.getElementById('textArea').value;
    $(".container__grid").append(textToWrite);
    // console.log("clicking");
 }

 var button = document.getElementById('save');
 button.addEventListener('click', saveTextAsFile);
