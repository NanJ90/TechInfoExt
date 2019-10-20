"use strict";

var name, features;
fetch('https://gist.githubusercontent.com/NanJ90/ab13a827a46bd30dada760adc41a2877/raw/3d9fdd48eddf764d991b050383df94ad04bb2f2a/data.json')
.then(function(res) {
  res.json().then(function(parsedJson) {
    console.log('This is the parsed json', parsedJson);
  })
})
