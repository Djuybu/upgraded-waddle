if ("userList" in localStorage) {
  userList = JSON.parse(localStorage.getItem("userList"));
} else {
   userList = [];
}
let success;
let id = document.getElementById("ID");
let fname = document.getElementById("fullname");
let email = document.getElementById("email");
let gender = document.getElementsByName("gender");
let nation = document.getElementById("nation");
let genColor = document.getElementById("genders");
let hobbies = document.getElementsByName("hobby");
let pass = document.getElementById("pass");
let colorHobby = document.getElementById("hobbies");
let note = document.getElementById("note");
let alert = document.getElementById("alert");
let emailRegex = /\S+@\S+\.\S+/;

let errorName = document.getElementById("error-name");
let errorPass = document.getElementById("error-pass");
let errorId = document.getElementById("error-id");
let errorEmail = document.getElementById("error-email");
let errorGender = document.getElementById("error-gender");
let errorHobby = document.getElementById("error-hobby");
let errorNation = document.getElementById("error-nation");
let errorNote = document.getElementById("error-note");
let errors = document.getElementsByClassName("error");

function storeName(params) {
  let user = {
    username: fname.value,
    pass: pass.value,
  };
  userList.push(user);
  console.log(userList);
  localStorage.setItem ('userList', JSON.stringify(userList))
  // console.log(JSON.parse(localStorage.getItem('listUser')));
}

let form = document.querySelector("form");
form.addEventListener("submit", function validate(e) {
  e.preventDefault();

  if (fname.value == "") {
    errorName.innerHTML = "Không được để trống họ tên";
    fname.style.border = "1px solid red";
    success = false;
  }
  if (pass.value == "") {
    errorPass.innerHTML = "Không được để trống mật khẩu";
    pass.style.border = "1px solid red";
    success = false;
  }
  if (id.value == "") {
    errorId.innerHTML = "Không được để trống quê quán";
    id.style.border = "1px solid red";
    success = false;
  }

  if (pass.value == "") {
    errorPass.innerHTML = "Không được để trống mật khẩu";
    pass.style.border = "1px solid red";
    success = false;
  }
  if (email.value == "") {
    errorEmail.innerHTML = "Không được để trống email";
    email.style.border = "1px solid red";
    success = false;
  }

  if (!gender[0].checked && !gender[1].checked) {
    errorGender.innerHTML = "Giới tính không được để trống";
    genColor.style.border = "1px solid red";
    success = false;
  }

  if (nation.value == "") {
    errorNation.innerHTML = "Quốc tịch không được để trống";
    nation.style.border = "1px solid red";
    success = false;
  } else {
    let alertStyle = document.querySelector(".done");
    alertStyle.style.display = "block";
    storeName();
    // console.log(alertStyle);
  }
  return success;
});

function removeError() {
  id.style.border = "";
  fname.style.border = "";
  email.style.border = "";
  pass.style.border = "";
  genColor.style.border = "";
  nation.style.border = "";
  colorHobby.style.border = "";
  note.style.border = "";
  for (e of errors) e.innerHTML = "";
}
