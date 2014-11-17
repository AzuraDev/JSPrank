javascript: var prompt1 = 'Input Link Here To Prank Your Friend ';
var prompt2 = 'Input Text Here For The Alert Spammer ';
var prompt3 = 'Input Password Here ';
var google = 'http://www.google.com';
var yahoo = 'http://www.yahoo.com';
var googleRainBowDash = 'https://www.google.com/#q=rainbowdash';
var googlePinkiePie = 'https://www.google.com/#q=pinkiepie';
var googleFlutterShy = 'https://www.google.com/#q=fluttershy';
var googleAlicorn = 'https://www.google.com/#q=alicorn';
var googleNightmareRarity = 'https://www.google.com/#q=nightmarerarity';
var googleMyLittlePony = 'https://www.google.com/#q=mylittlepony';
var w = 0;
var x = 0;
var z = 0;
var webPrankAlert;
var webPrank;
var webPrankPass;
var webPrankLoop;
document.onkeydown = prankScript;

function prankScript(keyBoard) {
    if (keyBoard.keyCode === 49) {
        x = 1;
        while (x === 1) {
            window.open(webPrank);
        }
    }
    if (keyBoard.keyCode === 50) {
        z += 1;
        if (z === 1) {
            webPrank = prompt(prompt1);
        } else if (z === 2) {
            webPrankAlert = prompt(prompt2);
        } else if (z === 3) {
            webPrankPass = prompt(prompt3);
        } else if (z === 4) {
            webPrankLoop = prompt('Enter Number');
        }
    } else if (keyBoard.keyCode === 51) {
        x = 0;
        y = 0;
        window.location.reload(true);
    } else if (keyBoard.keyCode === 52) {
        while (true) {
            alert(webPrankAlert);
        }
    }
    if (keyBoard.keyCode === 53) {
        var prankPass = webPrankPass;
        var prankPassArea = prompt(prompt3);
        if (prankPass === prankPassArea)
            alert('great');
        else {
            window.location = google;
        }
    }
    if (keyBoard.keyCode === 54) {
        while (true) {
            window.location = google;
            while (true) {
                window.location = yahoo;

            }
        }
    }
    if (keyBoard.keyCode === 55) {
            for (i = 0; i < webPrankLoop; i++) {
                window.open(webPrank);
            }
        }
}
