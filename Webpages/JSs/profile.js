window.onload = addName ()

function addName () {
    userName = document.querySelector('.displayName');
    console.log(userName);
    let myName = localStorage.getItem('userNameChecked');
    console.log(myName);
    userName.innerHTML= myName
}
