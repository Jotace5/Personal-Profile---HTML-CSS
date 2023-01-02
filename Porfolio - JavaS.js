alert("Welcome to my porfolio page! This is my first project.");

let infoButton = document.getElementById('secret-button');
let moreInfo = document.getElementById('secret-p');

function turnInfoButton() {
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
      } else {
        moreInfo.style.display = "none";
      }
}
infoButton.addEventListener('click', turnInfoButton);

let infoButton2 = document.getElementById('secret-button2');
let moreInfo2 = document.getElementById('secret-p2');

function turnInfoButton2() {
    if (moreInfo2.style.display === "none") {
        moreInfo2.style.display = "block";
      } else {
        moreInfo2.style.display = "none";
      }
}
infoButton2.addEventListener('click', turnInfoButton2);

let infoButton3 = document.getElementById('secret-button3');
let moreInfo3 = document.getElementById('secret-p3');

function turnInfoButton3() {
    if (moreInfo3.style.display === "none") {
        moreInfo3.style.display = "block";
      } else {
        moreInfo3.style.display = "none";
      }
}
infoButton3.addEventListener('click', turnInfoButton3);

let infoButton4 = document.getElementById('secret-button4');
let moreInfo4 = document.getElementById('secret-p4');

function turnInfoButton4() {
    if (moreInfo4.style.display === "none") {
        moreInfo4.style.display = "block";
      } else {
        moreInfo4.style.display = "none";
      }
}
infoButton4.addEventListener('click', turnInfoButton4);

let infoButton5 = document.getElementById('secret-button5');
let moreInfo5 = document.getElementById('secret-p5');

function turnInfoButton5() {
    if (moreInfo5.style.display === "none") {
        moreInfo5.style.display = "block";
      } else {
        moreInfo5.style.display = "none";
      }
}
infoButton5.addEventListener('click', turnInfoButton5);





let item1 = document.getElementById('button-project1');
let dataInfo1 = document.getElementById('expand-project1');
    
function increaseAppear1(){
        dataInfo1.style.width = '650px';
        if (dataInfo1.style.display === "none") {
            dataInfo1.style.display = "block";
          } else {
            dataInfo1.style.display = "none";
          }
    }
item1.addEventListener('click', increaseAppear1);


let item2 = document.getElementById('button-project2');
let dataInfo2 = document.getElementById('expand-project2');
    
function increaseAppear2(){
        dataInfo2.style.width = '650px';
        if (dataInfo2.style.display === "none") {
            dataInfo2.style.display = "block";
          } else {
            dataInfo2.style.display = "none";
          }
    }
item2.addEventListener('click', increaseAppear2);



let item3 = document.getElementById('button-project3');
let dataInfo3 = document.getElementById('expand-project3');
    
function increaseAppear3(){
        dataInfo3.style.width = '650px';
        if (dataInfo3.style.display === "none") {
            dataInfo3.style.display = "block";
          } else {
            dataInfo3.style.display = "none";
          }
    }
item3.addEventListener('click', increaseAppear3);