'use strict'


//ぐーのボタンが押された時
const enemyHandArray = ["ぐぅ", "ちょき", "ぱぁ"]
let result = document.getElementById("resultText");
let enemyHand = document.getElementById("enemyHand")
let enemyDiv = document.getElementsByClassName("enemy");

const guButton = document.getElementById("guButton");
guButton.addEventListener("click", function (e) {
    // let result = document.getElementById("resultText");
    // let enemyHand = document.getElementById("enemyHand")
    // const enemyHandArray = ["ぐぅぅ", "ちょき", "ぱぁぁ"]
    // console.log(result);
    // console.log(enemyHand);
    // console.log("gu");
    let enemyHandChoice = Math.floor(Math.random() * 3);
    // console.log("enemy: " + enemyHandArray[enemyHandChoice]);
    enemyHand.textContent = enemyHandArray[enemyHandChoice];
    if (enemyHandChoice === 0) {//ぐー = ぐー
        // console.log("ぐー")
        // console.log("あいこ");
        result.textContent = "あいこ😑";
        result.removeAttribute("style");
    }
    if (enemyHandChoice === 1) {//ぐー > ちょき
        // console.log("ちょき")
        // console.log("勝ち");
        result.textContent = "勝ち😁";
        result.setAttribute("style", "color: red");
    }
    if (enemyHandChoice === 2) {//ぐー < ぱー
        // console.log("ぱー")
        // console.log("負け");
        result.textContent = "負け😥";
        result.setAttribute("style", "color: blue");
    }
}, false);

//ちょきのボタンが押された時
const tyokiButton = document.getElementById("tyokiButton");
tyokiButton.addEventListener("click", function (e) {
    let enemyHandChoice = Math.floor(Math.random() * 3);
    enemyHand.textContent = enemyHandArray[enemyHandChoice];
    if (enemyHandChoice === 0) {//ちょき < ぐー
        result.textContent = "負け😥";
        result.setAttribute("style", "color: blue");
    }
    if (enemyHandChoice === 1) {//ちょき = ちょき
        result.textContent = "あいこ😑";
        result.removeAttribute("style");
    }
    if (enemyHandChoice === 2) {//ちょき > ぱー
        result.textContent = "勝ち😁";
        result.setAttribute("style", "color: red");
    }
}, false);

//ぱーのボタンが押された時
const paButton = document.getElementById("paButton");
paButton.addEventListener("click", function (e) {
    let enemyHandChoice = Math.floor(Math.random() * 3);
    enemyHand.textContent = enemyHandArray[enemyHandChoice];
    if (enemyHandChoice === 0) {//ぱー > ぐー
        result.textContent = "勝ち😁";
        result.setAttribute("style", "color: red")
    }
    if (enemyHandChoice === 1) {//ぱー < ちょき
        result.textContent = "負け😥";
        result.setAttribute("style", "color: blue");
    }
    if (enemyHandChoice === 2) {//ぱー = ぱー
        result.textContent = "あいこ😑";
        result.removeAttribute("style");
    }
}, false);
