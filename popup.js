"use strict";

fetch('https://gist.githubusercontent.com/NanJ90/ab13a827a46bd30dada760adc41a2877/raw/3d9fdd48eddf764d991b050383df94ad04bb2f2a/data.json')
.then(function(res) {
  return(res.json()).then(function(res) {
    console.log(res);
    getDataSucess(res);
}).catch(function() {
  getDataFailure();
})
})

function getDataSucess(response) {
  //data will get from the JSON file and display on the popup window.
}

function getDataFailure() {
  document.querySelector('#item-descript').textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}
