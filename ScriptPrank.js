javascript:
var prompt1 = 'Input Link Here To Prank Your Friend';
var x = 0;
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
  }else if(keyBoard.keyCode == 51){
    x = 0;
  }
}
