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
const btnSubmit=document.querySelector("#submit");
const formInput=document.querySelector(".formControl");
const form=document.querySelector(".register");

btnSubmit.addEventListener("submit",e => {
    const fName = formInput.firstName.value;
    console.log(fName);
});


