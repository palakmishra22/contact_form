function contactform() {
    console.log("click");
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    //var message = document.getElementById("message").value;

    alert("  Your name is "+fname+" "+lname+" , email is "+email+" , phone is "+phone+" and your form is submitted ")
}