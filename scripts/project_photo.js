window.onload = initLinks;

var myPix = new Array("../assets/images/01.jpg","../assets/images/02.jpg","../assets/images/03.jpg","../assets/images/04.jpg","../assets/images/05.jpg","../assets/images/06.jpg",
"../assets/images/07.jpg","../assets/images/08.jpg","../assets/images/09.jpg","../assets/images/10.jpg","../assets/images/11.jpg","../assets/images/12.jpg","../assets/images/13.jpg",
"../assets/images/14.jpg","../assets/images/15.jpg","../assets/images/16.jpg","../assets/images/17.jpg","../assets/images/18.jpg","../assets/images/19.jpg","../assets/images/20.jpg",
"../assets/images/21.jpg","../assets/images/22.jpg","../assets/images/23.jpg");
var thisPic = 0;

function initLinks(){
    document.getElementById("nextLink").onclick = processNext;
    }

function processNext(){
    thisPic++;
        if(thisPic == myPix.length){
            thisPic = 0;
            }
            document.getElementById("myPicture").src = myPix[thisPic];
            return false;
    }
