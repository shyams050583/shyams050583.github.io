var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/firefox-icon2.png');
        }
    else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

console.log('Before mybutton onclick');
myButton.onclick = function() {
  setUserName();
}
  

function setUserName() {
    console.log('Inside setUserName');
    var myName = prompt('Please ener user name');
    localStorage.setItem('userName', myName);
    myHeading.textContent = 'Mozilla is cool' + ' T ' +myName;
    
}

console.log('Before localStorage.getItem');
if(!localStorage.getItem('userName')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('userName');
  myHeading.innerHTML = 'Mozilla is cool, ' + 'D ' + storedName;
}

console.log('End Of JS');

  
    
    
    
