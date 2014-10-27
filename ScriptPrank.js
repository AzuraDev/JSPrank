javascript:
var prompt1 = 'Input Link Here To Prank Your Friend';
var prompt2 = 'Input Text Here For The Alert Spammer';
var x = 0;
var y = 0;
var webPrankAlert;
var webPrank;
document.onkeydown = prankScript;
function prankScript(keyBoard) {
  if (keyBoard.keyCode == 49) {
    x = 1;
    while(x == 1){
      window.open(webPrank);
    }
  }
  if(keyBoard.keyCode == 50){
    webPrank = prompt(prompt1);
    webPrankAlert = prompt(prompt2);
  }else if(keyBoard.keyCode == 51){
    x = 0;
  }else if(keyBoard.keyCode == 52){
      y = 1;
      while(y == 1){
          alert(webPrankAlert);
      }
  }
}
