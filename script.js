const form = document.getElementById('form');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const confirm = document.getElementById('confirm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const age = document.getElementById('age');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i <=formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const phoneVal = phone.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const ageVal = age.value.trim();
    const confirmVal = confirm.value.trim();


    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'First Name Cannot Be Blank!');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'Min 3 Char!');
    }
    else{
        setSuccessMsg(username);
    }

    //phone number

    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone Number Cannot Be Blank!');
    }
    else if(phoneVal.length <=9 ||( (phoneVal>='A' && phoneVal<='Z') || (phoneVal>='a' && phoneVal>='z'))){
        setErrorMsg(phone, 'Min 10 Char & Numeric Character!' );
    }
    else{
        setSuccessMsg(phone);
    }

     //age
     if(ageVal ===""){
        setErrorMsg(age, 'Age Cannot Be Blank!');
    }
    else if(ageVal.length<3 || (( (ageVal>='A' && ageVal<='Z') || (ageVal>='a' && ageVal>='z')))  ){
        setErrorMsg(age, 'Min 3 Character & In Numeric Form!');
    }
    else{
        setSuccessMsg(age);
    }


    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Email Cannot Be Blank!');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email Is Not Valid!');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password Cannot Be Blank!');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'Min 8 Char!');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(confirmVal === ""){
        setErrorMsg(confirm, 'Confirm Password Cannot Be Blank!');
    }
    else if(passwordVal!=confirmVal){
        setErrorMsg(confirm, 'Not Matched!');
    }
    else{
        setSuccessMsg(confirm);
    }
  

   
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
