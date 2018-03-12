function saveTextAsFile() {
     var textToWrite = document.getElementById('textArea').value;

     var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
     var fileNameToSaveAs = "test.plist";

     var userInput = document.createElement("p");
     userInput.download = fileNameToSaveAs;
    //  userInput.innerHTML = "Download File";
     if (window.webkitURL != null)
     {
         // Chrome allows the link to be clicked
         // without actually adding it to the DOM.
         userInput.href = window.webkitURL.createObjectURL(textFileAsBlob);
     }
     else
     {
         // Firefox requires the link to be added to the DOM
         // before it can be clicked.
         userInput.href = window.URL.createObjectURL(textFileAsBlob);
        //  userInput.onclick = destroyClickedElement;
         userInput.style.display = "none";
         document.body.appendChild(textFileAsBlob);
     }

     userInput.click();
    $(".container__grid").append(textToWrite);

    console.log("clicking");
 }

 var button = document.getElementById('save');
 button.addEventListener('click', saveTextAsFile);

// for(var=i; i < 1000; i++) {
//   $.get("data"+ i +".html", function(data){
//      $(this).children("section:first").html(data);
//  });
// }
