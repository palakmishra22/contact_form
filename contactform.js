function contactform() {
    console.log("click");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    //var message = document.getElementById("message").value;
    
    if (fname == ""){

        alert("please enter your name, name can't be blank");
    }
    else if (lname == ""){
        alert("please enter your name , name can't be blank");
    }
    
    

    if (email = ""){
        alert("please enter your email");
    } 
     

    alert("  Your name is "+fname+" "+lname+" , email is "+email+" , phone is "+phone+" and your form is submitted ");
}
   
function lettersOnly(input){
    var regex = /[^a-z]/gi ;
    input.value = input.value.replace(regex , "");

}
