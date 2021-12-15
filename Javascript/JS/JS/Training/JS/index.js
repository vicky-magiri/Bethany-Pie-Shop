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
    }else if(!validateEmail(email)){
        setError(emailAddress," Invalid Email Address");
    }
    else{       
        setTrue(emailAddress);
    }
    //check for password
    if(pass === ""){
        setError(password,"Password can not be blank");
    }else if(pass.length<8){
        setError(repeatPass,"Password should be 8 character or more");
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
 function validateEmail(email){
     const emailPattern=/\S+@\S+\.\S+/;
     return emailPattern.test(email);
 }



