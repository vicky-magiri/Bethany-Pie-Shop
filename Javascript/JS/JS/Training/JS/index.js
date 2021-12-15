// Todo
//Building a pop Menu on a user form

//getting the popup Wrapper
const popup=document.querySelector(".popWrapper");


//getting the close popup
const close=document.querySelector(".far");
close.addEventListener("click",function(e){
    popup.style.display="none";
});

//performing form validation
const btnSubmit=document.getElementById("submit");
const firstName=document.getElementById("firstName");
const midName=document.getElementById("midName");
const lastName=document.getElementById("lastName");
const emailAddress=document.getElementById("email_id");
const password=document.getElementById("password");
const formInput=document.querySelector(".formControl");
const repeatPass=document.getElementById("passwordCheck");
const form=document.querySelector(".register");

//email Pattern
const emailPattern=/\S+@\S+\.\S+/;

//password Pattern
const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/

btnSubmit.addEventListener("click",(e) => {
    e.preventDefault();
    validateForm();
    // form.reset();
});
 function validateForm(){
    const fName=firstName.value.trim();
    const mName=midName.value.trim();
    const lName=lastName.value.trim();
    const email=emailAddress.value.trim();
    const pass=password.value.trim();
    const confirmPass=repeatPass.value.trim();
    
    //check whether the firstName field is empty
    if(fName === ""){
        setError(firstName,"First Name can not be blank");
    }else{
        setTrue(firstName);
    }
    //check for midName
    if(mName === ""){
        setError(midName,"Middle Name can not be blank");
    }else{
        setTrue(midName);
    }
    //check for the last Name
    if(lName === ""){
        setError(lastName,"Last Name can not be blank");
    }else{
        setTrue(lastName);
    }
    //check for the email
    if(email === ""){
        setError(emailAddress,"Email Address can not be blank");
    }
    else{       
        setTrue(emailAddress);
    }
    //check for password
    if(pass === ""){
        setError(password,"Password can not be blank");
    }else if(pass !== repeatPass){
        setError(repeatPass,"Passwords do not match");
    }
    else{
        setTrue(password);
    }
    //check for repeat Password
    if(confirmPass === ""){
        setError(repeatPass,"This field can not be blank");
    }else if(confirmPass !== pass){
        setError(repeatPass,"Passwords do not match");
    }
    else{
        setTrue(repeatPass);
    }

 }
 function setError(field,msg){
     const formControl=field.parentElement;
     const error_msg=formControl.querySelector(".error_msg");
     error_msg.innerText=msg;
     scrollTo(0,0);
     formControl.classList.add("error");
 }
 function setTrue(field){
    const formControl=field.parentElement;
    formControl.classList.add("correct")
 }
emailAddress.addEventListener("keyup",e =>{
    if(emailPattern.test(e.target.value)){
        const formControl=emailAddress.parentElement;
            formControl.classList.remove("error");
            formControl.classList.add("correct");
    }
    else{
        const formControl=emailAddress.parentElement;
            formControl.classList.remove("correct");
            formControl.classList.add("error");
    }
});
password.addEventListener("keyup",e => {
    if(passwordPattern.test(e.target.value)){
        const formControl=password.parentElement;
        formControl.classList.remove("error");
        formControl.classList.add("correct"); 
    }
    else{
        const formControl=password.parentElement;
        formControl.classList.remove("correct"); 
        formControl.classList.add("error");
    }
});
repeatPass.addEventListener("keyup",e=>{
    if(password.value.trim() === e.target.value){
        const formControl=repeatPass.parentElement;
        formControl.classList.remove("error");
        formControl.classList.add("correct"); 
    }
    else{
        const formControl=repeatPass.parentElement;
        formControl.classList.remove("correct"); 
        formControl.classList.add("error");
    }
});
