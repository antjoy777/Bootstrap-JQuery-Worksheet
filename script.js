let thisBox;
let newBorder;
let newColor;

allColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "black","magenta", "cyan"];
allBorders = ["dotted","dashed","solid","double","groved","ridge","inset","outset","none"];


function changeButton(id) {
 thisBox=document.getElementById (id);
newBorder=allBorders[Math.floor(Math.random() * allBorders.length)] + " 5px " + allColors[Math.floor(Math.random() * allColors.length)];
newColor = allColors[Math.floor(Math.random() * allColors.length)];
 thisBox.style.background = newColor;
 thisBox.style.border = newBorder;
}

function changeAll() {
   changeButton('box1');
   changeButton('box2');
   changeButton('box3');
   }

function hideButton(id) {
    thisBox=document.getElementById (id);
    thisBox.style.background = "none"
    thisBox.style.border= "hidden" 
}
function hideAll(){
    hideButton('box1');
    hideButton('box2');
    hideButton('box3');
}

 function resetColors(){
    function resetBox1(){
        thisBox= document.getElementById('box1');
        thisBox.style.background="red";
        thisBox.style.border="black solid 5px"; 
     }
     function resetBox2(){
         thisBox= document.getElementById('box2');
         thisBox.style.background="blue";
         thisBox.style.border="yellow dotted 5px";
      }
      function resetBox3(){
         thisBox= document.getElementById('box3');
         thisBox.style.background="green";
         thisBox.style.border="black solid 5px";
      }
     resetBox1();
     resetBox2();
     resetBox3();
    
 }

 function showAll(){
   