function signIn(params) {
  userList = JSON.parse(localStorage.getItem("userList"));
  signName = document.getElementById("signName");
  signPass = document.getElementById("signPass");
  console.log(signName.value);
  console.log(userList);
  console.log(signPass.value);
  for (let index = 0; index < userList.length; index++) {
    nameCheck = userList[index];
    // console.log(nameCheck.username);
    if (nameCheck.username === signName.value) {
      if (nameCheck.pass === signPass.value) {
        alertStyle = document.querySelector(".done");
        alertStyle.style.display = "block";
        userName = signName.value
        localStorage.setItem('userNameChecked', userName)
      } else {
        document.getElementById("passAlert").innerHTML =
          "Mật khẩu hoặc tài khoản của bạn chưa đúng";
      }
    } else {
      // console.log('not that hello');
    }
  }
  document.getElementById("nameAlert").innerHTML =
    "Mật khẩu hoặc tài khoản của bạn chưa đúng";
}
// console.log(signName.value);
// console.log(userList);
// console.log(signPass.value);
