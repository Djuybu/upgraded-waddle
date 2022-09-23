let fullName = document.getElementById('fullname')
let birthDay = document.getElementById('birthDay')
let phoneNumber = document.getElementById('phoneNumber')
let assets = document.getElementById('assets')
let email = document.getElementById('email')
let loanNumber = document.getElementById('loanNumber')
// gọi ra các thẻ div cảnh báo
let nameError = document.getElementById('error-name')
let birthDayError = document.getElementById('error-birthday')
let phoneError = document.getElementById('error-phonenumber')
let assetsError = document.getElementById ('error-assets')
let emailError = document.getElementById ('error-email')
let loanNumberError = document.getElementById('error-loannumber')
console.log(assetsError.innerHTML);
// store lên localStorage
function storeServiceProfile() {
    let serviceSigned = {
        userName: fullName.value,
        birthDay: birthDay.value,
        phoneNumber: phoneNumber.value,
        assets: assets.value,
        email: email.value,
        loanNumber: loanNumber.value,
    }
   
}





let form = document.querySelector('form')
form.addEventListener( "submit",   function validate(e) {
    e.preventDefault()
 success = true
if (fullName.value =="") {
    nameError.innerHTML = 'Tên bạn không được để trống'
    fullName.style.border ='1px solid red'
    success = false    
}
if (birthDay.value =="") {
    birthDayError.innerHTML ='Ngày sinh không được để trống'
    birthDay.style.border = '1px solid red'
    success = false 
}
if (phoneNumber.value == "") {
    phoneError.innerHTML = 'Số điện thoại không được để trống'
    phoneNumber.style.border = '1px solid red'
    success = false
}
if (assets.value == "") {
    assetsError.innerHTML ='Bạn chưa chọn loại tài sản'
    assets.style.border ='1px solid red'
    success = false
}
if (email.value == "") {
    emailError.innerHTML ='Email không được để trống'
    email.style.border = '1px solid red'
    success = false
}
if (loanNumber =="") {
    loanNumber.innerHTML ='Bạn chưa nhập số tiền cần vay'
    loanNumber.style.border ='1px solid red'
    success = false
}
if (success == true) {
    let alertStyle = document.querySelector(".done");
    alertStyle.style.display = "block";
    storeServiceProfile();
}
}
 )

//  chơi game xong:
// - làm cho xong cái file này (phần localStorage)
// - fix bug bên profile
// - thêm css mẫu phần profile
// - nghĩ xem mai nói cái gì?
//  