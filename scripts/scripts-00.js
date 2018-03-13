function saveTextAsFile() {
     var textToWrite = document.getElementById('textArea').value;

     var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
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
