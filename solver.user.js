// ==UserScript==
// @name         I swear i solved it wink
// @version      0.1
// @description  when you forgot the solution but want a puzzle marked as solved and get the points wink
// @author       VonFriedricht
// @match        https://twowi.de/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var title = document.getElementById("title")
    var checkList = document.getElementById("checklist")
    var victoryButton = document.createElement("button")
    checkList.appendChild(victoryButton)
    victoryButton.innerHTML = "just win"
    function justWin(e){
        console.log(title.innerHTML)
    }
    victoryButton.onclick = justWin
})();
