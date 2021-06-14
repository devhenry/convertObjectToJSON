

let userauth = [];

document.getElementById('userInput').addEventListener('submit',sendData)

function sendData(e){
 e.preventDefault();

var username = document.getElementById('usern').value;
var password = document.getElementById('pass').value;


var userDetails = {
  
    user : username ,
    pass : password 
}
 
userauth.push(userDetails);
document.forms[0].reset();

console.log('User details Added',{userauth});

let pre = document.querySelector('#disp pre');
pre.textContent = '\n'+ JSON.stringify(userauth, '\t',2);

localStorage.setItem('User Details',JSON.stringify(userauth));

}
